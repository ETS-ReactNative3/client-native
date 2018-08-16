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
  SHARE_DEVICE,
  SHARE_DEVICE_SUCCESS,
  SHARE_DEVICE_FAILURE,
  REGISTER_SHARE_DEVICE,
  REGISTER_SHARE_DEVICE_SUCCESS,
  REGISTER_SHARE_DEVICE_FAILURE,
} from '../actions/device';

const initialState = Immutable.fromJS({

});
const deviceTemplate = Immutable.fromJS({
  loading: false,
  error: null,
  state: undefined,
  share: null,
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
  },
  [SHARE_DEVICE] (deviceState, {payload, meta}) {
    console.log ("SHARE_DEVICE");
    const device = deviceTemplate.set ('loading', true);
    return deviceState.set (meta.deviceId, device);
  },
  [SHARE_DEVICE_SUCCESS] (deviceState, {payload, meta}) {
    console.log ("SHARE_DEVICE_SUCCESS");
    const device = deviceTemplate.set ('share', payload);
    return deviceState.set (meta.deviceId, device);
  },
  [SHARE_DEVICE_FAILURE] (deviceState, {payload, meta}) {
    console.log ("SHARE_DEVICE_FAILURE");
    console.log ("payload", payload);
    const device = deviceTemplate.set ('error', payload);
    return deviceState.set (meta.deviceId, device);
  },
  [REGISTER_SHARE_DEVICE] (deviceState, {payload}) {
    console.log ("REGISTER_SHARE_DEVICE");
    console.log ("payload ", payload);
    const device = deviceTemplate.set ('loading', true);
    return deviceState.set ("temp", device);
  },
  [REGISTER_SHARE_DEVICE_SUCCESS] (deviceState, {payload}) {
    console.log ("REGISTER_SHARE_DEVICE_SUCCESS");
    console.log ("payload ", payload);
    const deviceId = payload.device_id;
    deviceState.get ("temp").set ('loading', false);
    const device = deviceTemplate.set ('state', payload);
    return deviceState.set (deviceId, device);
  },
  [REGISTER_SHARE_DEVICE_FAILURE] (deviceState, {payload}) {
    console.log ("REGISTER_SHARE_DEVICE_FAILURE");
    deviceState.get ("temp").set ('loading', false);
    console.log ("payload ", payload);
    const device = deviceTemplate.set ('error', payload.message);
    console.log ("device", device);
    const deviceId = payload.device_id;
    console.log ("deviceState ", deviceState);
    return deviceState.set (deviceId, device);
  }
},
initialState
);

