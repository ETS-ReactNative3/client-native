import { createAction } from "redux-actions"
import { AsyncStorage } from 'react-native';
import Immutable from 'immutable';

import {
  createApiAction,
  createAuthorizedApiAction
} from './api'

export const SET_TOKEN = "USER/SET_TOKEN"


export const setToken = createAction(SET_TOKEN);

export const saveToken = () => async (dispatch, getState) => {
  const token = getState().getIn(['user', 'auth', 'token']);
  await AsyncStorage.setItem('token', JSON.stringify(token.toJS()));
  console.log( "actions/user.js THE TOKEN IS: " + token)
};

export const loadToken = () => async (dispatch) => {
  const raw = await AsyncStorage.getItem('token');
  console.log ("Hello" + raw);
  const token = JSON.parse(raw);
  if (token && token.auth_token) {
    dispatch(setToken(token));
  }
  console.log ("actions/user.js loadToken: " + raw)
};

export const LOGIN = "USER/LOGIN";
export const LOGIN_FAILURE = "USER/LOGIN_FAILURE";

export const login = (email, pwd) => async (dispatch, getState) => {
  const apiCall = createApiAction({
    types: [LOGIN, SET_TOKEN, LOGIN_FAILURE],
    path: 'auth/login',
    params: {email, pwd}
  });

  await dispatch(apiCall);
  await dispatch(saveToken());
  console.log ("actions/user.js export login");
};


export const SIGNUP = "USER/SIGNUP";
export const SIGNUP_SUCCESS = "USER/SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "USER/SIGNUP_FAILURE";

export const signup = (email, pwd, name, birthday, gender, place, space, purpose, prefer_scents) => async (dispatch, getState) => {
  const apiCall = createApiAction({
    types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE],
    path: 'auth/signup',
    params: {email, pwd, name, birthday, gender, place, space, purpose, prefer_scents}
  });

  await dispatch(apiCall);
}

export const REFRESH_TOKEN = "USER/REFRESH_TOKEN";
export const REFRESH_TOKEN_FAILURE = "USER/REFRESH_TOKEN_FAILURE";

export const refreshToken = (refresh_token, token) => async (dispatch) => {
  const apiCall = createAuthorizedApiAction({
    types: [REFRESH_TOKEN, SET_TOKEN, REFRESH_TOKEN_FAILURE],
    path: 'auth/refresh_token',
    params: { refresh_token },
  });

  await dispatch(apiCall);
  await dispatch(saveToken());
  console.log ("actions/user.js export refreshToken")
}


export const LOGOUT = "USER/LOGOUT";
export const LOGOUT_SUCCESS = "USER/LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "USER/LOGOUT_FAILURE";

export const logout = () => async (dispatch) => {
  console.log("Logout pressed");
  const apiCall = createAuthorizedApiAction({
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE],
    path: 'auth/logout',
    params: {}
  });
  await dispatch(apiCall);
  await AsyncStorage.setItem('token', '');
}

export const USERINFO = "USER/USERINFO";
export const USERINFO_SUCCESS = "USER/USERINFO_SUCCESS";
export const USERINFO_FAILURE = "USER/USERINFO_FAILURE";

export const userinfo = () => async (dispatch) => {
  console.log ("Get User information");

  const apiCall = createAuthorizedApiAction ({
    types: [USERINFO, USERINFO_SUCCESS, USERINFO_FAILURE],
    path: 'auth/user_info',
    params: { user_id },
  });
  await dispatch (apiCall);
}
