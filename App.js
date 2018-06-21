import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"

// screens
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

// prepare extended stylesheet
EStyleSheet.build();

// describe nav structure
let Nav = createStackNavigator({
  Login: {
    screen: LoginScreen 
  },
  SignUp: {
    screen: SignUpScreen
  },
}, {
  initialRouteName: "Login"
});

// create store
const store = createStore(()=>({}));


// entry component
export default () => {
  return (
    <Provider store={store}>
      <Nav/>
    </Provider>
  );
}


