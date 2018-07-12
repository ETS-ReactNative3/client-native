import React from 'react';
import { Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import HomeScreen from '../screens/Home/HomeNav'
import AlarmScreen from '../screens/AlarmScreen/AlarmScreen';
import ControlScreen from '../screens/ControlScreen';
import CollectionScreen from '../screens/CollectionScreen/CollectionScreen';
import SettingScreen from '../screens/SettingScreen';

let iconPath = '../../assets/icon/';

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const TabScreen = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
      tabBarIcon: (props) => <Image style = {[styles.icon, props.focused && styles.focusedIcon]} source = {require ( iconPath + 'home.png')} />,
        }
    },
    Alarm: { 
      screen: AlarmScreen,
      navigationOptions: {
        tabBarIcon: (props) => <Image style = {[styles.icon, props.focused && styles.focusedIcon]} source = {require ( iconPath + 'alarm-01.png')} />,
      },
    },
    Control: { 
      screen: ControlScreen,
      navigationOptions: {
        tabBarIcon: (props) => <Image style = {[styles.icon, props.focused && styles.focusedIcon]} source = {require ( iconPath + 'control-01.png')} />,
      }
    },
    Collection: { 
      screen: CollectionScreen,
      navigationOptions: {
        tabBarIcon: (props) => <Image style = {[styles.icon, props.focused && styles.focusedIcon]} source = {require ( iconPath + 'collection-01.png')} />,
      }
    },
    Setting: { 
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: (props) => <Image style = {[styles.icon, props.focused && styles.focusedIcon]} source = {require ( iconPath + 'setting-01.png')} />,
      },
    },
  },
  {
    initialRouteName: "Collection",
    tabBarOptions: {
      showLabel: false,
      style: { 
        backgroundColor: '#ffffff'
      },
      tabStyle: {
        height: 50
      }

    },
    tabBarComponent: (props) => <TabBarComponent {...props} style = {{borderTopWidth: 0}}/>,
  }
);

export default TabScreen;

const styles = EStyleSheet.create ({
  icon: {
    width: 25,
    height: 25,
    tintColor: '#B5B4B4',
  },
  focusedIcon: {
    tintColor: '#4F9A5C',
  },
});
