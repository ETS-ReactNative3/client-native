import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from "redux"
import { apiMiddleware } from 'redux-api-middleware';
import { Provider } from "react-redux"

// screens
import LoginScreen from './src/screens/LoginScreen';
import FirstScreen from './src/screens/SignUpScreen/FirstScreen';
import SecondScreen from './src/screens/SignUpScreen/SecondScreen';

// prepare extended stylesheet
EStyleSheet.build();

// describe nav structure
let Nav = createStackNavigator({
  Login: {
    screen: LoginScreen 
  },
  SignUpFirst: {
    screen: FirstScreen
  },
  SignUpSecond: {
    screen: SecondScreen
  }
}, {
  initialRouteName: "SignUpFirst",
  headerMode: 'none'
});


// apply redux middlewares
const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware, thunk)(createStore);

// create store
const store = createStoreWithMiddleware(reducers);

// entry component
export default () => {
  return (
    <Provider store={store}>
      <Nav/>
    </Provider>
  );
}


