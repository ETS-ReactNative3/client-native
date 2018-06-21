import { RSAA } from 'redux-api-middleware';
import { createAction } from "redux-actions"

export const LOGIN = "USER/LOGIN";
export const LOGIN_SUCCESS =  "USER/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USER/LOGIN_FAILURE";

const API_URL = "http://localhost:5000/";

function createEndpoint(path) {
  return API_URL + path;
}

export const login = (email, pwd) => {
  return {
    [RSAA]: {
      types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE],
      endpoint: createEndpoint("auth/login"),
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, pwd})
    }
  };
}
