import React from 'react';
import { Text, View, ImageBackground,TouchableOpacity, StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
import Image from 'react-native-remote-svg';

import HomeScreen from './HomeScreen'
import AlarmScreen from './AlarmScreen';
import ControlScreen from './ControlScreen';


export default createMaterialBottomTabNavigator({
  Home: { 
    screen: HomeScreen 
  },
  Alarm: {
    screen: AlarmScreen
  },
  Control: {
    screen: ControlScreen
  }
}, {
  initialRouteName: 'Home',
  activeTintColor: '#F44336',
});
