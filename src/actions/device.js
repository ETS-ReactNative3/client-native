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
    types: [{
      type: REGISTER_DEVICE,
      meta: {
        deviceId: device_id
      }
    }, {
      type: REGISTER_DEVICE_SUCCESS,
      meta: {
        deviceId: device_id
      }
    }, {
      type: REGISTER_DEVICE_FAILURE,
      meta: {
        deviceId: device_id
      }
    }],
    path: 'devices/'+device_id+'/register',
    params: {},
  })
  console.log("Inside action register device")
  await dispatch (apiCall);
  console.log("Register device inside actions pressed");
}


export const SEND_DEVICE_STATE = "USER/SEND_STATE";
export const SEND_DEVICE_STATE_SUCCESS = "USER/SEND_STATE_SUCCESS";
export const SEND_DEVICE_STATE_FAILURE = "USER/SEND_STATE_FAILURE";

export const sendDeviceState = (device_id, power, light, name, fan1, fan2, fan3, fan4) => async (dispatch, getState) => {
  console.log("Device id is",device_id);
  console.log("api called with fans", fan1, fan2, fan3, fan4)
  console.log("power:",power,"light:",light,"name:",name);
  const apiCall = createAuthorizedApiAction({
    types: [{
      type: SEND_DEVICE_STATE,
      meta: {
        deviceId: device_id
      }
    }, {
      type: SEND_DEVICE_STATE_SUCCESS,
      meta: {
        deviceId: device_id
      }
    }, {
      type: SEND_DEVICE_STATE_FAILURE,
      meta: {
        deviceId: device_id
      }
    }],
    path: 'devices/'+device_id+'/state',
    params: {
      "state": 
        {"power": power, "light": light, "name": name, "fan1": fan1, "fan2": fan2, "fan3": fan3, "fan4": fan4}, 
      "is_recipe": 'false'
    }
  })
  await dispatch (apiCall)
}
