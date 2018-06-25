import { RSAA } from 'redux-api-middleware';
import { createAction } from "redux-actions"
import { AsyncStorage } from 'react-native';
import Immutable from 'immutable';

const API_URL = "https://develop.deepscent.io/";

function createEndpoint(path) {
  return API_URL + path;
}

export function createApiAction({types, path, params, token}) {
  let headers = {
    'Content-Type': 'application/json',
    'Referrer': 'arom-native',
    'Origin': 'arom-native'
  };

  if (token)
    headers['Authorization'] = token;

  return {
    [RSAA]: {
      types,
      endpoint: createEndpoint(path),
      method: "POST",
      headers,
      body: JSON.stringify(params),
    }
  };
}

export function createAuthorizedApiAction({types, path, params}) {
  return async (dispatch, getState) => {
    const token = getState().getIn(['user', 'auth', 'token', 'auth_token']);
    await dispatch(createApiAction({
      types,
      path,
      params,
      token
    }));
  };
}

export const SET_TOKEN = "USER/SET_TOKEN";

export const setToken = createAction(SET_TOKEN);

export const saveToken = () => async (dispatch, getState) => {
  const token = getState().getIn(['user', 'auth', 'token']);
  await AsyncStorage.setItem('token', JSON.stringify(token.toJS()));
};

export const loadToken = () => async (dispatch) => {
  const raw = await AsyncStorage.getItem('token');
  const token = JSON.parse(raw);
  if (token && token.auth_token) {
    dispatch(setToken(token));
  }
};

export const LOGIN = "USER/LOGIN";
export const LOGIN_SUCCESS =  "USER/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USER/LOGIN_FAILURE";

export const login = (email, pwd) => async (dispatch, getState) => {
  const apiCall = createApiAction({
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE],
    path: 'auth/login',
    params: {email, pwd}
  });

  await dispatch(apiCall);
  await dispatch(saveToken());
};

export const REFRESH_TOKEN = "USER/REFRESH_TOKEN";
export const REFRESH_TOKEN_SUCCESS = "USER/REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILURE = "USER/REFRESH_TOKEN_FAILURE";

export const refreshToken = (refresh_token, token) => async (dispatch) => {
  const apiCall = createAuthorizedApiAction({
    types: [REFRESH_TOKEN, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE],
    path: 'auth/refresh_token',
    params: { refresh_token },
  });

  await dispatch(apiCall);
  await dispatch(saveToken());
}
