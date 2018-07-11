import { handleActions } from "redux-actions";
import Immutable from "immutable";
import {
  REGISTER_DEVICE,
  REGISTER_DEVICE_SUCCESS,
  REGISTER_DEVICE_FAILURE,
  SEND_DEVICE_STATE,
  SEND_DEVICE_STATE_SUCCESS,
  SEND_DEVICE_STATE_FAILURE,
} from '../actions/device';

const initialState = Immutable.fromJS({
  devices: {
    loading: false,
    error: null,
    // Device_id/state이 들어간다
  }
});

export default handleActions({
  [REGISTER_DEVICE] (userState) {
    console.log("Register device in reducers pressed");
    let register_device = initialState.get('devices').set('loading', true);
    return userState.set('devices', register_device);
  },
  [REGISTER_DEVICE_SUCCESS] (userState, {payload}) {
    console.log("Register Device Success and payload is",payload);
    return userState;
  },
  [REGISTER_DEVICE_FAILURE] (userState, {payload}) {
    console.log("Register Device failure and payload is",payload);
    return userState;
  },
  [SEND_DEVICE_STATE] (userState) {
    let send_device = initialState.get('devices').set('loading', true);
    return userState.set('devices', send_device_state);
  },
  [SEND_DEVICE_STATE_SUCCESS] (userState, {payload}) {
    let send_device_state = initialState.get('devices').set(디바이스아이이, playload);
    return userState.set('devices', send_device_state);
  },
},
initialState
);

