import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Slider from 'react-native-slider';
import Icon from 'react-native-vector-icons/FontAwesome'
import { getScentIcon } from '../../helpers/icon'

import CircularSlider from './CircularSlider';

let circularSliderMargin = 0;
const linkIcon = (<Icon name="link" size={20} color="#000" />)
class CircularSliderSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: 0,
      sliders: this.props.sliders,
      fixRatio: false,
      stopSlider: false,
      ratio: [1, 1, 1, 1],
      angle: [this.props.defaultAngle1, this.props.defaultAngle2, this.props.defaultAngle3, this.props.defaultAngle4],
      maxAngle: [359.99, 359.99, 359.99, 359.99],
      deviceId: 'arom_jaeyoung',

      //deviceName: 'dd',

    }
  }


  render() {
    updateAngle = (index, angle) => {
      let newArray = this.state.angle.slice(); //creates the clone of the state
      newArray[index] = angle;
      this.setState({stopSlider: false, angle: newArray});
    }


    updateAngleByRatio = (index, angle) => {
      // console.log("update angle by ratio")
      let value = Math.round(angle*100/360);
      let newArray = this.state.angle.slice();
      const sliderNumbers = this.state.sliders
      // console.log("slider numbers is",sliderNumbers);
      for (let i = 0; i < sliderNumbers; i++) {
        newArray[i] = this.state.ratio[i] * value / this.state.ratio[index] * 360 / 100
        if (newArray[i] > this.state.maxAngle[i]) {
          newArray[i] = this.state.maxAngle[i];
        }
        if (newArray[i] >= 360) {
          newArray[i] = 359.99
        }
      }
      this.setState({angle: newArray})
    }

    onSendDeviceState = () => {
      this.props.onSendDeviceStatePress(this.state.deviceId, true, this.state.light,'dd', this.state.angle[0], this.state.angle[1], this.state.angle[2], this.state.angle[3])
    }

    onRegisterRecipeState = () => {
      this.props.onRegisterRecipeStatePress (this.state.deviceId)
    }

    return (
      <View style={styles.container}>
        {/* {console.log(this.state)} */}
        <Text>Light</Text>
        <Slider
          value={this.state.light}
          onValueChange={(value) => {
            this.setState({
              light: Math.round(value)
            })
          }}
          minimumValue = {0}
          maximumValue = {100}
          onSlidingComplete = {
            ()=> {
              this.props.actionOnRelease ? 
              onSendDeviceState() : 
              console.log("Do not do anything")
            }}
        />
        <View style={styles.rowView}>
          <View>
            {this.state.sliders > 0 ? 
              <CircularSlider
                radius={this.props.radius}
                lineWidth={this.props.lineWidth}
                btnRadius={this.props.btnRadius}
                startValue={this.state.angle[0]}
                maxAngle={this.state.maxAngle[0]}
                stopSlider={this.state.stopSlider}
                onSlidingComplete = {
                  ()=> {
                    this.props.actionOnRelease ? 
                    onSendDeviceState() : 
                    console.log("Do not do anything")
                  }}
                onChangeAngle={(angle) => {
                  this.state.fixRatio == false ? updateAngle(0, angle) : updateAngleByRatio(0, angle)
                }}
                lineColor='red'
                circleColor='#cbf442'
                backgroundSource={this.props.background1}
              /> :
              <View></View>
            }
          </View>
          <View>
            {this.state.sliders > 1 ? 
              <CircularSlider 
                radius={this.props.radius}
                lineWidth={this.props.lineWidth}
                btnRadius={this.props.btnRadius}
                startValue={this.state.angle[1]}
                maxAngle={this.state.maxAngle[1]}
                stopSlider={this.state.stopSlider}
                onSlidingComplete = {
                  ()=> {
                    this.props.actionOnRelease ? 
                    onSendDeviceState() : 
                    console.log("Do not do anything")
                  }}
                onChangeAngle={(angle) => {
                  this.state.fixRatio == false ? updateAngle(1, angle) : updateAngleByRatio(1, angle)
                }}
                lineColor='blue'
                circleColor='#f0bcff'
                backgroundSource={this.props.background2}
              /> :
              <View></View>
            }

          </View>
        </View>
        <TouchableOpacity style={{alignItems: 'center'}}
          onPress={() => {
            let {angle, maxAngle, fixRatio} = this.state
            let maxIndex = angle.indexOf(Math.max(...angle))
            let newArray = angle.map(x => Math.round(x*100/angle[maxIndex]))
            let newMaxAngle = [359.99, 359.99, 359.99, 359.99]
            if (fixRatio == false) {
              newMaxAngle = newArray.map(x => {
                return x*360/newArray[maxIndex] == 360 ? 359.99 : x*360/newArray[maxIndex]
              })
            }
            this.setState({
              ratio: newArray,
              maxAngle: newMaxAngle,
              fixRatio: this.state.fixRatio===false ? true : false
            })
          }}
        >
          {linkIcon}
        </TouchableOpacity>
        <View style={styles.rowView}>
          <View>
            {this.state.sliders > 2 ?
              <CircularSlider 
                radius={this.props.radius}
                lineWidth={this.props.lineWidth}
                btnRadius={this.props.btnRadius}
                startValue={this.state.angle[2]}
                maxAngle={this.state.maxAngle[2]}
                stopSlider={this.state.stopSlider}
                onSlidingComplete = {
                  ()=> {
                    this.props.actionOnRelease ? 
                    onSendDeviceState() : 
                    console.log("Do not do anything")
                  }}
                onChangeAngle={(angle) => {
                  this.state.fixRatio == false ? updateAngle(2, angle) : updateAngleByRatio(2, angle)
                }}
                lineColor='black'
                circleColor='#f0bcff'
                backgroundSource={this.props.background3}
              /> :
              <View></View>
            }
          </View>
          <View>
            {this.state.sliders > 3 ?
              <CircularSlider 
                radius={this.props.radius}
                lineWidth={this.props.lineWidth}
                btnRadius={this.props.btnRadius}
                startValue={this.state.angle[3]}
                maxAngle={this.state.maxAngle[3]}
                stopSlider={this.state.stopSlider}
                onSlidingComplete = {
                  ()=> {
                    this.props.actionOnRelease ? 
                    onSendDeviceState() : 
                    console.log("Do not do anything")
                  }}
                onChangeAngle={(angle) => {
                  this.state.fixRatio == false ? updateAngle(3, angle) : updateAngleByRatio(3, angle)
                }}
                lineColor='purple'
                circleColor='#f0bcff'
                backgroundSource={this.props.background4}
              /> :
              <View></View>
          }
          </View>
        </View>
        <TouchableOpacity 
          style={{alignItems:'center'}}
          onPress={
            ()=>{ 
              onSendDeviceState();
              onRegisterRecipeState();
            }
          }
        >
          <Text>향기 등록하기</Text>
        </TouchableOpacity>
      </View> 
    )
  }
}

CircularSliderSet.defaultProps = {
  actionOnRelease: false,
  background1: getScentIcon('bergamot'),
  background2: getScentIcon('bergamot'),
  background3: getScentIcon('bergamot'),
  background4: getScentIcon('bergamot'),
}

export default CircularSliderSet;

const styles = EStyleSheet.create({
  container: {

  },
  rowView: {
    flexDirection: 'row',
  },
  CircularSlider: {
    alignItems: 'flex-end',
  }
});
