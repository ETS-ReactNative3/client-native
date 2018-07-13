import { createAction } from "redux-actions"
import Immutable from 'immutable';

import {
  createApiAction,
  createAuthorizedApiAction
} from './api'

export const REGISTER_DEVICE = "DEVICE/REGISTER_DEVICE";
export const REGISTER_DEVICE_SUCCESS = "DEVICE/REGISTER_DEVICE_SUCCESS";
export const REGISTER_DEVICE_FAILURE = "DEVICE/REGISTER_DEVICE_FAILURE";

export const registerDevice = (device_id) => async (dispatch, getState) => {
  console.log("api called")
  const apiCall = createAuthorizedApiAction({
    types: [REGISTER_DEVICE, REGISTER_DEVICE_SUCCESS, REGISTER_DEVICE_FAILURE],
    path: 'devices/'+device_id+'/register',
    params: {},
    options: {deviceId: device_id}
  })
  console.log("Inside action register device")
  await dispatch (apiCall);
  console.log("Register device inside actions pressed");
}


export const SEND_DEVICE_STATE = "USER/SEND_STATE";
export const SEND_DEVICE_STATE_SUCCESS = "USER/SEND_STATE_SUCCESS";
export const SEND_DEVICE_STATE_FAILURE = "USER/SEND_STATE_FAILURE";

export const updateDeviceState = (device_id, power, light, name, fan1, fan2, fan3, fan4) => async (dispatch, getState) => {
  const apiCall = createApiAction({
    types: [SEND_DEVICE_STATE, SEND_DEVICE_STATE_SUCCESS, SEND_DEVICE_STATE_FAILURE],
    path: 'devices/'+device_id+'/state',
    params: {"state": {power, light, name, fan1, fan2, fan3, fan4}}
  })
}
