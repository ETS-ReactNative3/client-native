import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AddDeviceScreen from '../../components/HomeScreen/AddDeviceScreen';
import { requestSetOwner } from '../../helpers/device';

export class AddDeviceScreenContainer extends React.Component {

  onAddNewDevicePress = async() => {
    await requestSetOwner("fa016839-00c8-43e2-99c6-07b6d73a04f2");
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