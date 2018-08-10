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

export const GET_DEVICE_STATE = "DEVICE/GET_DEVICE_STATE";
export const GET_DEVICE_STATE_SUCCESS = "DEVICE/GET_DEVICE_STATE_SUCCESS";
export const GET_DEVICE_STATE_FAILURE = "DEVICE/GET_DEVICE_STATE_FAILURE";

export const getDeviceState = (device_id) => async (dispatch, getState) => {
  const apiCall = createAuthorizedApiAction ({
    types: [{
      type: GET_DEVICE_STATE,
      meta: {
        deviceId: device_id
      }
    }, {
      type: GET_DEVICE_STATE_SUCCESS,
      meta: {
        deviceId: device_id
      }
    }, {
      type: GET_DEVICE_STATE_FAILURE,
      meta: {
        deviceId: device_id
      }
    }],
    path: 'devices/' + device_id + '/state',
    method: 'GET',
    //params: {}
  })
  await dispatch (apiCall)
}

export const SHARE_DEVICE = "DEVICE/SHARE_DEVICE";
export const SHARE_DEVICE_SUCCESS = "DEVICE/SHARE_DEVICE_SUCCESS";
export const SHARE_DEVICE_FAILURE = "DEVICE/SHARE_DEVICE_FAILURE";

export const shareDevice = (device_id) => async (dispatch, getState) => {
  const apiCall = createAuthorizedApiAction ({
    types: [{
      type: SHARE_DEVICE,
      meta: {
        deviceId: device_id
      }
    }, {
      type: SHARE_DEVICE_SUCCESS,
      meta: {
        deviceId: device_id
      }
    },{
      type: SHARE_DEVICE_FAILURE,
      meta: {
        deviceId: device_id
      }
    }],
    path: 'devices/' + device_id + '/share',
  })
  await dispatch (apiCall)
}

export const REGISTER_SHARE_DEVICE = "DEVICE/REGISTER_SHARE_DEVICE";
export const REGISTER_SHARE_DEVICE_SUCCESS = "DEVICE/REGISTER_SHARE_DEVICE_SUCCESS";
export const REGISTER_SHARE_DEVICE_FAILURE = "DEVICE/REGISTER_SHARE_DEVICE_FAILURE";

export const registerShareDevice = (share_code) => async (dispatch, getState) => {
  console.log ("actions ", share_code);
  const apiCall = createAuthorizedApiAction ({
    types: [REGISTER_SHARE_DEVICE, REGISTER_SHARE_DEVICE_SUCCESS, REGISTER_SHARE_DEVICE_FAILURE],
    path: 'devices/register_by_sharing_code',
    params: {
      "sharing_code" : share_code,
    }
  })
  await dispatch (apiCall)
}
