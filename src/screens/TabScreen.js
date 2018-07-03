import React from 'react';
import { Image, Text, View, ImageBackground,TouchableOpacity, StyleSheet} from 'react-native';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
//import Image from 'react-native-remote-svg';

import HomeScreen from './HomeScreen'
import AlarmScreen from './AlarmScreen';
import ControlScreen from './ControlScreen';
import CollectionScreen from './CollectionScreen';
import SettingScreen from './SettingScreen';

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const TabScreen = createBottomTabNavigator(
  {
    Home: {
       screen: HomeScreen,
       navigationOptions: {
         tabBarIcon: <Image source = {require ('../../assets/icon/home-01.png')} />,
       },
      },
    Alarm: { screen: AlarmScreen},
    Control: { screen: ControlScreen},
    Collection: { screen: CollectionScreen},
    Setting: { screen: SettingScreen},
  },
  {
    tabBarComponent: props =>
      <TabBarComponent
        {...props}
        style={{ borderTopColor: '#605F60' }}
      />,
  }
);

export default TabScreen;
/*
export default createMaterialBottomTabNavigator({
  Home: { 
    screen: HomeScreen,
  },
  Alarm: {
    screen: AlarmScreen
  },
  Control: {
    screen: ControlScreen
  },
  Collection: {
    screen: CollectionScreen
  },
  Setting: {
    screen: SettingScreen
  }
}, {
  initialRouteName: 'Home',
  labled: false,
  inactiveTintColor: '#d0d8d1',
  activeTintColor: '#2d7a3c',
  barStyle: { backgroundColor: '#ffffff'},
}
);*/
