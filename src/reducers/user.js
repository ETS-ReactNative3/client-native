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
  SEND_DEVICE_STATE,
  SEND_DEVICE_STATE_SUCCESS,
  SEND_DEVICE_STATE_FAILURE
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
  devices: {
    loading: false,
    error: null,
    // Device_id/state이 들어간다
  }
});

export default handleActions({
  [SET_TOKEN] (userState, { payload }) {
    let token = Immutable.fromJS(payload);
    let auth = initialState.get('auth').set('token', token);
    return userState.set('auth', auth);
  },
  [LOGIN] (userState) {
    let auth = initialState.get('auth').set('loading', true);
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
  [SEND_DEVICE_STATE] (userState) {
    let send_device = initialState.get('devices').set('loading', true);
    return userState.set('devices', send_device_state);
  },
  [SEND_DEVICE_STATE_SUCCESS] (userState, {payload}) {
    let send_device_state = initialState.get('devices').set(디바이스아이이, playload);
    return userState.set('devices', send_device_state);
  }
},
initialState
);

