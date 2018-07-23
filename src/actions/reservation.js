import { createAction } from "redux-actions"
import { userinfo } from "./user"
import {
  createApiAction,
  createAuthorizedApiAction
} from './api'
import Immutable from "immutable"

export const LOAD_RESERVATION = "RESERVATION/LOAD_RESERVATION";
export const LOAD_RESERVATION_SUCCESS = "RESERVATION/LOAD_RESERVATION_SUCCESS";
export const LOAD_RESERVATION_FAILURE = "RESERVATION/LOAD_RESERVATION_FAILURE";

export const loadReservation = () => async  (dispatch, getState ) => {
  //const raw = await AsyncStorage.getItem ('token');
  //console.log ("afafadfadfdfdfad");
  await dispatch (userinfo ());
  console.log (getState ());
  const devices = getState ().getIn (["user", "userinfo", "data", "devices"]);
  var map = Immutable.fromJS (devices);
  const [...keys] = map.keys ();
  console.log (keys[0]);
  console.log ("reservation reducer");
  //console.log (getState ());
  //console.log (getState ().getIn (["user", "userinfo", "error"]).message);
  //console.log (getState ().getIn (["user", "userinfo", "error"]).response);

  
  

  const apiCall = createAuthorizedApiAction ({
    method: 'GET',
    path: 'reservations/' + keys[0],
    params: {},
    types: [LOAD_RESERVATION, LOAD_RESERVATION_SUCCESS, LOAD_RESERVATION_FAILURE]
  });

  await dispatch (apiCall)
}

export const ADD_RESERVATION = "RESERVATION/ADD_RESERVATION";
export const ADD_RESERVATION_SUCCESS = "RESERVATION/ADD_RESERVATION_SUCCESS";
export const ADD_RESERVATION_FAILURE = "RESERVATION/ADD_RESERVATION_FAILURE";

export const addReservation = (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo) => async (dispatch) => {
  console.log ("hello");

  const apiCall = createAuthorizedApiAction ({
    types: [{
      type: ADD_RESERVATION,
      meta: {
        deviceId: device_id
      }
    }, {
      type: ADD_RESERVATION_SUCCESS,
      meta: {
        deviceId: device_id
      }
    }, {
      type: ADD_RESERVATION_FAILURE,
      meta: {
        deviceId: device_id
      }
    }],
    path: "reservations/" + device_id,
    params: {
      "reservation_id" : reservation_id,
      "startTime" : startTime,
      "endTime" : endTime,
      "every" : every,
      "invokeTime" : invokeTime,
      "notification" : notification,
      "notificationIds" : notificationIds,
      "light" : light,
      "fanPower" : fanPower,
      "scentInfo" : scentInfo,
    }
  })
  await dispatch (apiCall)
}
