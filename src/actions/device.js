import { createAction } from "redux-actions"
import Immutable from 'immutable';

import {
  createApiAction,
  createAuthorizedApiAction
} from './api'

const host = "192.168.4.1";

export const REGISTER_DEVICE = "DEVICE/REGISTER_DEVICE";
export const REGISTER_DEVICE_SUCCESS = "DEVICE/REGISTER_DEVICE_SUCCESS";
export const REGISTER_DEVICE_FAILURE = "DEVICE/REGISTER_DEVICE_FAILURE";

export const registerDevice = (device_id) => async (dispatch, getState) => {
  console.log("api called")
  const apiCall = createAuthorizedApiAction({
    types: [REGISTER_DEVICE, REGISTER_DEVICE_SUCCESS, REGISTER_DEVICE_FAILURE],
    path: 'devices/'+device_id+'/register',
    params: {}
  })
  console.log("Inside action register device")
  await dispatch (apiCall);
  console.log("Register device inside actions pressed");
}


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

export async function requestDeviceId() {
  let data = await rpcCall("Device.Id");
  let deviceId = data['device_id'];
  return deviceId;
}

export async function requestSetOwner(ownerId) {
  await rpcCall("Device.Owner", {owner_id: ownerId})
  console.log("set owner to",ownerId);
}

export async function requestWifiList() {
  const data = await rpcCall("Wifi.Scan");
  const wifiList = data["results"];
  const wifiListLength = wifiList.length;
  const filteredWifiList = [];

  // 나중에는 auth level이 5여도 처리되게 해야함
  for (let i = 0; i < wifiListLength; i++) {
    console.log("wifi is",wifiList[i])
    if (wifiList[i].auth != 5) {
      filteredWifiList.push(wifiList[i])
    }
  }

  return filteredWifiList;
}

export async function requestSsidList() {
  const data = await rpcCall("Wifi.Scan");
  const wifiList = data["results"];
  const wifiListLength = wifiList.length;
  const filteredSsidList = [];

  // 나중에는 auth level이 5여도 처리되게 해야함
  for (let i = 0; i < wifiListLength; i++) {
    console.log("wifi is",wifiList[i])
    if (wifiList[i].auth != 5) {
      filteredSsidList.push(wifiList[i].ssid)
    }
  }

  return filteredSsidList;
}

export async function requestSetWifi(ssid, password) {
  console.log("need to connect to wifi ",ssid,"with password",password);
  const params = {
    "ssid": ssid,
    "pw": password
  }
  return await rpcCall("Wifi", params);
}

export async function rpcCall(name, params={}) {
  console.log("inside rpc call")
  try {
    let response = await fetch(
      'http://'+host+'/rpc/'+name, {
        method: 'POST',
        body: JSON.stringify(params)
      }
    );
    console.log('awaiting response');
    let responseJson = await response.json();
    console.log("response JSON is",responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
}
