import { RSAA } from 'redux-api-middleware';
import { createAction } from "redux-actions"

const API_URL = "https://develop.deepscent.io/";

function createEndpoint(path) {
  return API_URL + path;
}

function createApiAction({types, path, params}){
  return {
    [RSAA]: {
      types,
      endpoint: createEndpoint(path),
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Referrer': 'arom-native',
        'Origin': 'arom-native'
      },
      body: JSON.stringify(params),
    }
  };
}

export const LOGIN = "USER/LOGIN";
export const LOGIN_SUCCESS =  "USER/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USER/LOGIN_FAILURE";

export const login = (email, pwd) => {
  return createApiAction({
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE],
    path: 'auth/login',
    params: {email, pwd}
  });
};

export const REFRESH_TOKEN = "USER/REFRESH_TOKEN";
export const REFRESH_TOKEN_SUCCESS = "USER/REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILURE = "USER/REFRESH_TOKEN_FAILURE";

export const refreshToken = (refresh_token) => {
  return createApiAction({
    types: [REFRESH_TOKEN, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE],
    path: 'auth/refresh_token',
    params: { refresh_token }
  });
};
