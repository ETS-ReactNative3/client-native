import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import reducers from './src/reducers';

import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { AppLoading } from 'expo';
import { loadToken } from './src/actions/user';

//middlewares
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import tokenRefresher from './src/middlewares/tokenRefresher';

// screens
import LoginScreen from './src/screens/LoginScreen';
import FirstScreen from './src/screens/SignUpScreen/FirstScreen';
import SecondScreen from './src/screens/SignUpScreen/SecondScreen';
import HomeScreen from './src/screens/HomeScreen';

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
  },
  Home: {
    screen: HomeScreen
  },
}, {
  initialRouteName: "Home",
  headerMode: 'none'
});


// apply redux middlewares
const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware, thunk, tokenRefresher)(createStore);

// create store
const store = createStoreWithMiddleware(reducers);


export default class App extends React.Component {
  state = {
    isReady: false
  };

  render() {
    if(this.state.isReady) {
      return (
        <Provider store={store}>
          <Nav/>
        </Provider>
      );
    }
    else {
      return (
        <AppLoading
          startAsync={this.initApp}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
  }

  async initApp() {
    await store.dispatch(loadToken());
  }
}
