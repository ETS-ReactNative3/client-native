import React from 'react';
import { Text, View } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import Slider from "react-native-slider";
import { Dropdown } from 'react-native-material-dropdown';
import CircleSlider from './common/CircleSlider';
import CircularSlider from './common/CircularSlider'


const aromMachine = [{
  value: 'Arom1'
}, {
  value: 'Arom2'
}]
class ControlScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: 0,
      scent: 0,
      startAngle: Math.PI * 10/6,
      angleLength: Math.PI * 7/6
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowView}>
          <View style={styles.machineDropdownView}>
            <Dropdown
              style={styles.machineDropdown}
              label='사용할 장소'
              data={aromMachine}
              onChangeText={(value, index, data) => {
                this.setState({
                  space: value
                });
              }}
            />
          </View>
        </View>
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
        />
        <Text>Scent</Text>
        <Slider
          value={this.state.scent}
          onValueChange={(value) => {
            this.setState({
              scent: Math.round(value)
            })
          }}
          minimumValue = {0}
          maximumValue = {100}
        />
        <CircularSlider />
        <CircleSlider
          value={90}
          onValueChange={(value)=>{console.log(Math.round(value*100/365))}}
        />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,

  },
  rowView: {
    flexDirection: 'row'
  },
  machineDropdownView: {
    width: '50%'
  }
});

export default ControlScreen;