import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();

let Nav = createStackNavigator({
  Login: {
    screen: LoginScreen 
  }
}, {
  initialRouteName: "Login",
  headerMode: 'none'
});

export default () => {
  return <Nav/>
}


