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
  USERINFO_OTHERS,
  USERINFO_OTHERS_SUCCESS,
  USERINFO_OTHERS_FAILURE,
  LOGINFB,
  LOGINFB_FAILURE,
  SIGNUPFB,
  SIGNUPFB_SUCCESS,
  SIGNUPFB_FAILURE
} from '../actions/user';

const initialState = Immutable.fromJS({
  auth: {
    loading: false,
    error: null,
    token: {
      auth_token: null,
      refresh_token: null,
      exp_time: null
    },
    fb_exist_account: true
  },
  signup: {
    loading: false,
    success: null,
    error: null
  },
  userinfo: {
  },
});

const userTemplate = Immutable.fromJS ({
  loading: false,
  error: null,
  data: null,
})

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
  [USERINFO] (userState, {payload, meta}) {
    console.log ("User Info loading meta is", meta);
    let userinfo = userTemplate.set ('loading', true);

    return userState.setIn (["userinfo", meta.userId], userinfo);
  },
  [USERINFO_SUCCESS] (userState, {payload, meta}) {
    let userinfo = userTemplate.set ('data', Immutable.fromJS (payload.user_info));
    console.log ("user info success");
    return userState.setIn (["userinfo", meta.userId], userinfo);
  },
  [USERINFO_FAILURE] (userState, {payload, meta}) {
    let userinfo = userTemplate.set ('error', payload);
    return userState.setIn (["userinfo", meta.userId], userinfo);
  },
  [USERINFO_OTHERS] (userState, {payload, meta}) {
    console.log ("User Others Info loading");
    let userinfo = userTemplate.set ('loading', true);
    return userState.setIn (["userinfo", meta.userId], userinfo);
  },
  [USERINFO_OTHERS_SUCCESS] (userState, {payload, meta}) {
    let userinfo = userTemplate.set ('data', Immutable.fromJS (payload.user_info));
    console.log ("user info others success");
    return userState.setIn (["userinfo", meta.userId], userinfo);
  },
  [USERINFO_OTHERS_FAILURE] (userState, {payload, meta}) {
    let userinfo = userTemplate.set ('error', payload);
    return userState.setIn (["userinfo", meta.userId], userinfo);
  },
  [LOGINFB] (userState) {
    let auth = initialState.get('auth').set('loading', true);
    console.log("(reducers) LoginFB called");
    return userState.set('auth', auth);
  },
  [LOGINFB_FAILURE] (userState, { payload }) {
    console.log("Facebook login failed, need to go to signup, payload is",payload.response);
    let auth = initialState.get('auth').set('fb_exist_account', false);
    return userState.set('auth',auth);
  },
  [SIGNUPFB] (userState) {
    let signup = initialState.get('signup').set('loading', true);
    return userState.set('aignup', signup);
  },
  [SIGNUPFB_SUCCESS] (userState) {
    let signup = initialState.get('signup').set('success', true);
    return userState.set('signup', signup);
  },
  [SIGNUPFB_FAILURE] (userState, {payload}) {
    let signup = initialState.get('signup').set('error', payload);
    console.log("FB signup failed, payload is",payload.response)
    return userState.set('signup', signup);
  }
},
initialState
)
