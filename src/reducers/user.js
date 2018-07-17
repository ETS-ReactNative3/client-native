import { handleActions } from "redux-actions";
import Immutable from "immutable";
import {
  SET_TOKEN,
  LOGIN,
  LOGIN_FAILURE,
  REFRESH_TOKEN,
  REFRESH_TOKEN_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  USERINFO,
  USERINFO_SUCCESS,
  USERINFO_FAILURE,
} from '../actions/user';

const initialState = Immutable.fromJS({
  auth: {
    loading: false,
    error: null,
    token: {
      auth_token: null,
      refresh_token: null,
      exp_time: null
    }
  },
  signup: {
    loading: false,
    success: null,
    error: null
  },
  userinfo: {
    loading: false,
    error: null,
    data: null,
  },
});

export default handleActions({
  [SET_TOKEN] (userState, { payload }) {
    let token = Immutable.fromJS(payload);
    let auth = initialState.get('auth').set('token', token);
    return userState.set('auth', auth);
  },
  [LOGIN] (userState) {
    let auth = initialState.get('auth').set('loading', true);
    console.log ("reducers/user.js AUTH IS: " + auth)
    return userState.set('auth', auth);
  },
  [LOGIN_FAILURE] (userState, {payload}) {
    let auth = initialState.get('auth').set('error', payload);
    return userState.set('auth', auth);
  },
  [SIGNUP] (userState) {
    let signup = initialState.get('signup').set('loading', true);
    return userState.set('signup',signup);
  },
  [SIGNUP_SUCCESS] (userState) {
    let signup = initialState.get('signup').set('success', true);
    return userState.set('signup',signup);
  },
  [SIGNUP_FAILURE] (userState, {payload}) {
    let signup = initialState.get('signup').set('error', payload);
    return userState.set('signup', signup);
  },
  [LOGOUT] (userState) {
    console.log("Signout");
    let signout = initialState.get('auth').set('loading', true);
    return userState.set('auth', signout);
  },
  [LOGOUT_SUCCESS] (userState) {
    console.log("SIgnout success");
    let signout = initialState.get('auth');
    return userState.set('auth', signout);
  },
  [LOGOUT_FAILURE] (userState, {payload}) {
    console.log("Signout failure    ",payload);
    let signout = initialState.get('auth').set('error', payload);
    return userState.set('auth', signout);
  },
  [USERINFO] (userState) {
    console.log ("User Info");
    let userinfo = initialState.get ('userinfo').set ('loading', true);
    return userState.set ('userinfo', userinfo);
  },
  [USERINFO_SUCCESS] (userState, {payload}) {
    let userinfo = initialState.get ('userinfo').set ('data', Immutable.fromJS (payload.user_info));
    console.log ("user info success");
    return userState.set ('userinfo', userinfo);
  },
  [USERINFO_FAILURE] (userState, {payload}) {
    let userinfo = initialState.get ('userinfo').set ('error', payload);
    return userState.set ('userinfo', userinfo);
  }
},
initialState
);

