import { RSAA } from 'redux-api-middleware';
import querystring from 'querystring';

const API_URL = "https://develop.deepscent.io/";
// const API_URL = 'http://192.168.1.43:5000/'
// const API_URL = 'http://localhost:5000/'

function createEndpoint(path) {
  return API_URL + path;
}

export function createApiAction({
  types, path, params, token, method="POST", options={}}) {

  let headers = {
    'Content-Type': 'application/json',
    'Referrer': 'arom-native',
    'Origin': 'arom-native',
    'Accept': '*/*'
  };

  if (token)
    headers['Authorization'] = token;

  let endpoint = createEndpoint(path);
  let body = undefined;

  if (method == 'GET') {
    endpoint = endpoint + '?' + querystring.stringify(params);
  }
  else {
    body = JSON.stringify(params);
  }

  return {
    [RSAA]: {
      types,
      endpoint,
      method,
      headers,
      body,
    }
  };
}

export function createAuthorizedApiAction({
  types, path, params, method="POST", options={}}) {
  return async (dispatch, getState) => {
    const token = getState().getIn(['user', 'auth', 'token', 'auth_token']);
    await dispatch(createApiAction({
      types,
      path,
      params,
      token,
      method,
      options
    }));
  };
}

