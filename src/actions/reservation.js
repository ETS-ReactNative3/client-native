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
