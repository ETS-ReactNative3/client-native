import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from "redux"

// screens
import LoginScreen from './src/screens/LoginScreen';

// prepare extended stylesheet
EStyleSheet.build();

// describe nav structure
let Nav = createStackNavigator({
  Login: {
    screen: LoginScreen 
  }
}, {
  initialRouteName: "Login",
  headerMode: 'none'
});


// entry component
export default () => {
  return <Nav/>
}


