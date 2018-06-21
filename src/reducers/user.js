import { handleActions } from "redux-actions";
import Immutable from "immutable";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
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
    }
  },
  Immutable.fromJS(initalState)
);

