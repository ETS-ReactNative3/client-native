import { createAction } from "redux-actions"
import Immutable from 'immutable';

import {
  createApiAction,
  createAuthorizedApiAction
} from './api'

export const SEND_DEVICE_STATE = "USER/SEND_STATE";
export const SEND_DEVICE_STATE_SUCCESS = "USER/SEND_STATE_SUCCESS";
export const SEND_DEVICE_STATE_FAILURE = "USER/SEND_STATE_FAILURE";

export const sendDeviceState = (device_id, power, light, name, fan1, fan2, fan3, fan4) => async (dispatch, getState) => {
  const apiCall = createApiAction({
    types: [SEND_DEVICE_STATE, SEND_DEVICE_STATE_SUCCESS, SEND_DEVICE_STATE_FAILURE],
    path: 'devices/'+device_id+'/state',
    params: {"state": {power, light, name, fan1, fan2, fan3, fan4}}
  })
}