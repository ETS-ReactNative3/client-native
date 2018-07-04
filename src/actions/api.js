import { RSAA } from 'redux-api-middleware';

const API_URL = "https://develop.deepscent.io/";

function createEndpoint(path) {
  return API_URL + path;
}

export function createApiAction({
  types, path, params, token, method="POST"}) {
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
      method,
      headers,
      body: JSON.stringify(params),
    }
  };
}

export function createAuthorizedApiAction({
  types, path, params, method="POST"}) {
  return async (dispatch, getState) => {
    const token = getState().getIn(['user', 'auth', 'token', 'auth_token']);
    await dispatch(createApiAction({
      types,
      path,
      params,
      token,
      method
    }));
  };
}

