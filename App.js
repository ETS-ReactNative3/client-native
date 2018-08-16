import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import reducers from './src/reducers';
import _ from 'lodash';
import Immutable from 'immutable'

import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { AppLoading, Font } from 'expo';
import { loadToken, userinfo } from './src/actions/user';
import { getDeviceState } from './src/actions/device';

//middlewares
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import tokenRefresher from './src/middlewares/tokenRefresher';

// screens
import LoginScreen from './src/screens/LoginScreen';
import FirstScreen from './src/screens/SignUpScreen/FirstScreen';
import SecondScreen from './src/screens/SignUpScreen/SecondScreen';
import TabScreen from './src/screens/TabScreen';
import EachCollectionScreen from './src/screens/CollectionScreen/EachCollectionScreen';
//import AddAlarm from './src/screens/AlarmScreen/AddAlarmScreen';
//import ModAlarm from './src/screens/AlarmScreen/ModAlarmScreen';
//import Register from './src/screens/ControlScreen/RegisterScreen';

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
  Tab: {
    screen: TabScreen
  },
  EachCollection: {
    screen: EachCollectionScreen
  },

}, {
  initialRouteName: "Login",
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  }
});


// apply redux middlewares
const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware, thunk, tokenRefresher)(createStore);

// create store
const store = createStoreWithMiddleware(reducers);

getDeviceStates = async() => {
  await store.dispatch(userinfo());
  devices = store.getState().getIn(['user','userinfo','user', 'data']).get('devices').keySeq().toArray();
  jsonDevice = JSON.stringify(devices)
  devices.map(x => {
    console.log("asd", x);
    getDeviceState(x);
  }) 
}

setInterval( async() => {
  if (_.toString(store.getState().getIn(['user', 'auth', 'token', 'auth_token'])) != '') {
    // await store.dispatch(userinfo()
    // console.log(devices););
    this.getDeviceStates();
  }
}, 1000)

export default class App extends React.Component {
  state = {
    isReady: false
  };

  render() {
    if(this.state.isReady) {
      console.log ("App.js isReady true");
      return (
        <Provider store={store}>
          <Nav />
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
    console.log ("App.js initApp()");
    await store.dispatch(loadToken());
    Font.loadAsync ({"Noto Sans Bold": require ('./assets/fonts/noto-sans-bold.ttf')});
    Font.loadAsync ({"Noto Sans": require ('./assets/fonts/noto-sans-regular.ttf')});
  }
}
