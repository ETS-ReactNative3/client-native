import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import Slider from "react-native-slider";
import { Dropdown } from 'react-native-material-dropdown';
import CircularSliderSetContainer from '../../containers/ControlScreen/CircularSliderSetContainer';


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
        <CircularSliderSetContainer
          sliders = {4}
          radius = {55}
          lineWidth = {10}
          btnRadius = {20}
          defaultAngle1 = {90}
          defaultAngle2 = {180}
          defaultAngle3 = {135}
          defaultAngle4 = {150}
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