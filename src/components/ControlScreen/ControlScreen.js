import React from 'react';
import { Text, View } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import Slider from "react-native-slider";
import { Dropdown } from 'react-native-material-dropdown';
import CircularSliderSet from './CircularSliderSet';


const aromMachine = [{
  value: 'Arom1'
}, {
  value: 'Arom2'
}]

let firstCircularPosition = {x: 0, y: 0};
class ControlScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: 0,
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
        <CircularSliderSet 
          sliders = {4}
          radius = {50}
          lineWidth = {10}
          btnRadius = {15}
          defaultAngle1 = {50}
          defaultAngle2 = {100}
          defaultAngle3 = {150}
          defaultAngle4 = {200}
        />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {

  },
  rowView: {
    flexDirection: 'row'
  },
  machineDropdownView: {
    width: '50%'
  }
});

export default ControlScreen;