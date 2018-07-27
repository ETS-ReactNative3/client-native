import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import { Dropdown } from 'react-native-material-dropdown';
import CircularSliderSetContainer from '../../containers/common/CircularSliderSetContainer';
import { sendDeviceState } from '../../actions/device';
import { getScentIcon } from '../../helpers/icon'


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
        <CircularSliderSetContainer
          sliders = {4}
          radius = {55}
          lineWidth = {10}
          btnRadius = {20}
          defaultAngle1 = {90}
          defaultAngle2 = {180}
          defaultAngle3 = {135}
          defaultAngle4 = {150}
          background1 = {getScentIcon('latulip')}
          background2 = {getScentIcon('lavender')}
          background3 = {getScentIcon('lemon')}
          background4 = {getScentIcon('sandalwood')}
          actionOnRelease = {true}
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
