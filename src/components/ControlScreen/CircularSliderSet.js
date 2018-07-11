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
      value: [this.props.defaultAngle1, this.props.defaultAngle2, this.props.defaultAngle3, this.props.defaultAngle4]
    }
  }


  render() {
    updateAngle = (index, angle) => {
      let newArray = this.state.value.slice(); //creates the clone of the state
      newArray[index] = angle;
      this.setState({stopSlider: false, value: newArray});
    }


    updateAngleByRatio = (index, angle) => {
      // console.log("update angle by ratio")
      let shouldUpdate = true;
      let newArray = this.state.value.slice();
      const sliderNumbers = this.state.sliders
      // console.log("slider numbers is",sliderNumbers);
      for (let i = 0; i < sliderNumbers; i++) {
        newArray[i] = this.state.value[i] * angle / this.state.value[index]
        if (newArray[i]>=359.9) {
          shouldUpdate = false
        }
      }
      if (shouldUpdate) {
        this.setState({value: newArray, stopSlider: false})
      } else {
        this.setState({stopSlider: true})
      }
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
              startAngle={this.state.value[0]}
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
              startAngle={this.state.value[1]}
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
            let newArray = this.state.value.slice()
            this.setState({
              fixRatio: this.state.fixRatio===false ? true : false,
              ratio: newArray
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
              startAngle={this.state.value[2]}
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
              startAngle={this.state.value[3]}
              stopSlider={this.state.stopSlider}
              onChangeAngle={(angle) => {
                this.state.fixRatio == false ? updateAngle(3, angle) : updateAngleByRatio(3, angle)
              }}
              lineColor='#fff'
              circleColor='#f0bcff'
            />
          </View>
        </View>
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
