import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome'

import CircularSlider from '../common/CircularSlider';

let circularSliderMargin = 0;
const linkIcon = (<Icon name="link" size={20} color="#000" />)
class CircularSliderSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: 4,
      fixRatio: false,
      stopSlider: false,
      ratio: [1, 1, 1, 1],
      angle: [this.props.defaultAngle1, this.props.defaultAngle2, this.props.defaultAngle3, this.props.defaultAngle4],
      maxAngle: [359.99, 359.99, 359.99, 359.99],
      deviceId: 'arom_jaeyoung'
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

    return (
      <View style={styles.container}>
        {/* {console.log(this.state)} */}
        <View style={styles.rowView}>
          <View>
            <CircularSlider
              radius={this.props.radius}
              lineWidth={this.props.lineWidth}
              btnRadius={this.props.btnRadius}
              startValue={this.state.angle[0]}
              maxAngle={this.state.maxAngle[0]}
              stopSlider={this.state.stopSlider}
              onChangeAngle={(angle) => {
                this.state.fixRatio == false ? updateAngle(0, angle) : updateAngleByRatio(0, angle)
              }}
              lineColor='#fff'
              circleColor='#cbf442'
            />
          </View>
          <View>
            <CircularSlider 
              radius={this.props.radius}
              lineWidth={this.props.lineWidth}
              btnRadius={this.props.btnRadius}
              startValue={this.state.angle[1]}
              maxAngle={this.state.maxAngle[1]}
              stopSlider={this.state.stopSlider}
              onChangeAngle={(angle) => {
                this.state.fixRatio == false ? updateAngle(1, angle) : updateAngleByRatio(1, angle)
              }}
              lineColor='#fff'
              circleColor='#f0bcff'
            />
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
            <CircularSlider 
              radius={this.props.radius}
              lineWidth={this.props.lineWidth}
              btnRadius={this.props.btnRadius}
              startValue={this.state.angle[2]}
              maxAngle={this.state.maxAngle[2]}
              stopSlider={this.state.stopSlider}
              onChangeAngle={(angle) => {
                this.state.fixRatio == false ? updateAngle(2, angle) : updateAngleByRatio(2, angle)
              }}
              lineColor='#fff'
              circleColor='#f0bcff'
            />
          </View>
          <View>
            <CircularSlider 
              radius={this.props.radius}
              lineWidth={this.props.lineWidth}
              btnRadius={this.props.btnRadius}
              startValue={this.state.angle[3]}
              maxAngle={this.state.maxAngle[3]}
              stopSlider={this.state.stopSlider}
              onChangeAngle={(angle) => {
                this.state.fixRatio == false ? updateAngle(3, angle) : updateAngleByRatio(3, angle)
              }}
              lineColor='#fff'
              circleColor='#f0bcff'
            />
          </View>
        </View>
        <TouchableOpacity 
          style={{alignItems:'center'}}
          onPress={
            ()=>this.props.onRegisterScentPress()
          }
        >
          <Text>향기 등록하기</Text>
        </TouchableOpacity>
      </View> 
    )
  }
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
