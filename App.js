import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from "redux"
import { apiMiddleware } from 'redux-api-middleware';
import { Provider } from "react-redux"
import { AppLoading } from 'expo';
import { loadToken } from './src/actions/user';

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


// apply redux middlewares
const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware, thunk)(createStore);

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
