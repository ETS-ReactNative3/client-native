import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AddDeviceScreen from './AddDeviceScreen';
import ShareDeviceScreen from './ShareDeviceScreen';
import WifiListScreen from './WifiListScreen';
import Header from '../../components/Headers/MainHeader';
import GoBackHeader from '../../components/Headers/GoBackHeader'

const HomeNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:({navigaton}) => ({
      header: <Header />// Your custom header
    })
  },
  AddDevice: {
    screen: AddDeviceScreen,
    navigationOptions:({navigation}) => console.log(navigation) || ({
      header: <GoBackHeader navigation={navigation} />// Your custom header
    })
  },
  RegisterShareDevice: {
    screen: ShareDeviceScreen,
    navigationOptions: ( {navigation} ) => ({
      header: <GoBackHeader navigation= {navigation} />
    })
  },
  WifiList: {
    screen: WifiListScreen,
  }
}, {
  initialRouteName: "Home",
})

export default HomeNav;
