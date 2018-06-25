import { handleActions } from "redux-actions";
import Immutable from "immutable";
import {
  SET_TOKEN,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE
} from '../actions/user';

const initalState = {
  auth: {
    loading: false,
    error: null,
    token: {
      auth_token: null,
      refresh_token: null,
      exp_time: null
    }
  }
};

export default handleActions({
  [SET_TOKEN] (userState, { payload }) {
    return userState
      .set('auth', Immutable.fromJS({...initalState.auth, token: payload}));
  },
  [LOGIN] (userState) {
    return userState
      .set('auth', Immutable.fromJS({...initalState.auth, loading: true}));
  },
  [LOGIN_SUCCESS] (userState, {payload}) {
    return userState
      .set('auth', Immutable.fromJS({...initalState.auth, token: payload}));
  },
  [LOGIN_FAILURE] (userState, {payload}) {
    return userState
      .set('auth', Immutable.fromJS({...initalState.auth, error: payload}));
  },
  [REFRESH_TOKEN_SUCCESS] (userState, {payload}) {
    return userState
      .set('auth', Immutable.fromJS({...initalState.auth, token: payload}));
  }
},
Immutable.fromJS(initalState)
);

