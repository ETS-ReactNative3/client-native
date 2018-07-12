import { createAction } from "redux-actions"
import {
  createApiAction,
  createAuthorizedApiAction
} from './api'

export const LOAD_RESERVATION = "RESERVATION/LOAD_RESERVATION";
export const LOAD_RESERVATION_SUCCESS = "RESERVATION/LOAD_RESERVATION_SUCCESS";
export const LOAD_RESERVATION_FAILURE = "RESERVATION/LOAD_RESERVATION_FAILURE";

export const loadReservation = ({
  
}) => async (dispatch, getState ) => {
  const raw = await AsyncStorage.getItem ('token');
  console.log ("hello this is reservation api");
  const token = JSON.parse (raw);
  if (token && token.user) {
    const user = token.user;
  }
}
  
  

  const apiCall = createAuthorizedApiAction ({
    method: 'GET',
    path: 'reservation/' + user,
    params: {},
    types: [LOAD_RESERVATION, LOAD_RESERVATION_SUCCESS, LOAD_RESERVATION_FAILURE]
  });

  await dispatch (apiCall)
}
