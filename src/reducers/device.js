import { handleActions } from "redux-actions";
import Immutable from "immutable";
import {
  REGISTER_DEVICE,
  REGISTER_DEVICE_SUCCESS,
  REGISTER_DEVICE_FAILURE,
  SEND_DEVICE_STATE,
  SEND_DEVICE_STATE_SUCCESS,
  SEND_DEVICE_STATE_FAILURE,
  GET_DEVICE_STATE,
  GET_DEVICE_STATE_SUCCESS,
  GET_DEVICE_STATE_FAILURE,
} from '../actions/device';

const initialState = Immutable.fromJS({
  devices: {
  }
});
const deviceTemplate = Immutable.fromJS({
  loading: false,
  error: null,
  state: undefined
});

export default handleActions({
  [REGISTER_DEVICE] (deviceState, {meta}) {
    console.log("device id is",meta.deviceId);
    const device = deviceTemplate.set('loading', true);
    return deviceState.set(meta.deviceId, device);
  },
  [REGISTER_DEVICE_SUCCESS] (deviceState, {payload, meta}) {
    console.log("Register Device Success and payload is",payload);
    const device = deviceTemplate.set('state', payload);
    return deviceState.set(meta.deviceId, device);
  },
  [REGISTER_DEVICE_FAILURE] (deviceState, {payload, meta}) {
    console.log("Register Device failure and payload is",payload);
    const device = deviceTemplate.set('error', payload);
    return deviceState.set(meta.deviceId, device);
  },
  [SEND_DEVICE_STATE] (deviceState, {meta}) {
    console.log("Send device state started")
    const device = deviceTemplate.set('loading', true);
    return deviceState.set(meta.deviceId, device);
  },
  [SEND_DEVICE_STATE_SUCCESS] (deviceState, {payload, meta}) {
    console.log("Send Device State Success");
    const device = deviceTemplate.set('state', payload);
    return deviceState.set(meta.deviceId, device);
  },
  [SEND_DEVICE_STATE_FAILURE] (deviceState, {payload, meta}) {
    console.log("Send Device State failure, error is",payload);
    const device = deviceTemplate.set('error', payload);
    return deviceState.set(meta.deviceId, device);
  },
  [GET_DEVICE_STATE] (deviceState, {payload, meta}) {
    console.log ("Get device state started")
    const device = deviceTemplate.set ('loading', true);
    return deviceState.set (meta.deviceId, device);
  },
  [GET_DEVICE_STATE_SUCCESS] (deviceState, {payload, meta}) {
    console.log ("Get device state Success payload: ", payload);
    const device = deviceTemplate.set ('state', Immutable.fromJS (payload));
    return deviceState.set (meta.deviceId, device);
  },
  [GET_DEVICE_STATE_FAILURE] (deviceState, {payload, meta}) {
    console.log ("Get device state failure");
    const device = deviceTemplate.set ('error', payload.response);
    return deviceState.set (meta.deviceId, device);
  }
},
initialState
);

