import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AddDeviceScreen from '../../components/HomeScreen/AddDeviceScreen';

export class AddDeviceScreenContainer extends React.Component {
  render() {
    return (
      <AddDeviceScreen />
    )
  }
}

export default AddDeviceScreenContainer;