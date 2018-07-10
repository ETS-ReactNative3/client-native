import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AddDeviceScreen from '../../components/HomeScreen/AddDeviceScreen';

export class AddDeviceScreenContainer extends React.Component {

  onAddNewDevicePress = async() => {
    this.props.navigation.push("WifiList");
  }
  
  render() {
    return (
      <AddDeviceScreen 
        onAddNewDevicePress = {this.onAddNewDevicePress}
      />
    )
  }
}

export default AddDeviceScreenContainer;