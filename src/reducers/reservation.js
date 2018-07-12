import { handleActions } from "redux-actions";
import Immutable from "immutable";

import {
  LOAD_RESERVATION,
  LOAD_COLLECTION_SUCCESS,
  LOAD_COLLECTION_FAILURE,
} from '../actions/reservation'

const initialState = Immutable.fromJS ({
  reservation: {
    loading: false,
    error: null,
    list: null
  },
});


// "reservations": [
//   {
//     "reservation_id": "reservation id",
//     "device_id": "device id",
//     "user_id": "user id",
//     "startTime": "10:00",
//     "endTime": "14:00",
//     "every": [
//       "mon",
//       "tue",
//       "wed",
//       "thr",
//       "fri"
//     ],
//     "invokeTime": 1530493200000,
//     "notification": true,
//     "notificationIds": [
//       15304931400001,
//       15304931400002,
//       15304931400003,
//       15304931400004,
//       15304931400005
//     ],
//     "light": 60,
//     "fanPower": 80,
//     "scentInfo": {
//       "name": "scent name",
//       "img": "scent img",
//       "cartridges": [
//         {
//           "scent": "lavender",
//           "fan": 70
//         },
//         {
//           "scent": "peppermint",
//           "fan": 50
//         },
//         {
//           "scent": "lemon",
//           "fan": 30
//         },
//         {
//           "scent": "sandalwood",
//           "fan": 20
//         }
//       ]
//     }
//   }
// ]
//


export default handleActions ({
  [LOAD_RESERVATION] (reservationState, {payload}) {
    console.log ("LOAD_RESERVATION: ", payload);

    const reservationState = initialState.get ('reservation').set ('loading', true)

    return reservationState.set ('reservation', reservationState)
  },
  [LOAD_RESERVATION_SUCCESS] (reservationState, {payload}) {
    console.log ("LOAD_RESERVATION_SUCCESS: ", payload);

    const reservationState = initialState.get ('reservation').set ('list', Immutable.fronJS (payload.reservation))
    
    return reservationState.set ('reservation', reservationState)
  },
  [LOAD_COLLECTION_FAILURE] (reservationSatate, {payload}) {
    console.log ("LOAD_COLLECTION_FAILURE: ", payload.response)

    const reservationState = initialState.get ('reservation').set ('error', payload)

    return reservationState.set ('reservation', reservationState)
  }
},
initialState
);
