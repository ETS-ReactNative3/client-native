import { handleActions } from "redux-actions";
import Immutable from "immutable";
import {
  SET_TOKEN,
  LOGIN,
  LOGIN_FAILURE,
  REFRESH_TOKEN,
  REFRESH_TOKEN_FAILURE
} from '../actions/user';

const initalState = Immutable.fromJS({
  auth: {
    loading: false,
    error: null,
    token: {
      auth_token: null,
      refresh_token: null,
      exp_time: null
    }
  }
});

export default handleActions({
  [SET_TOKEN] (userState, { payload }) {
    let token = Immutable.fromJS(payload);
    return userState
      .set('auth', initalState.get('auth').set('token', token));
  },
  [LOGIN] (userState) {
    return userState
      .set('auth', initalState.get('auth').set('loading', true));
  },
  [LOGIN_FAILURE] (userState, {payload}) {
    return userState
      .set('auth', Immutable.get('auth').set('error', payload));
  }
},
initalState
);

