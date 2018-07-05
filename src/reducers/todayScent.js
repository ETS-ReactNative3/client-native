import { handleActions } from "redux-actions";
import Immutable from 'immutable';

import {
  LOAD_SCENTLIST,
  LOAD_SCENTLIST_SUCCESS,
  LOAD_SCENTLIST_FAILURE
} from '../actions/todayScent'

const initialState = Immutable.fromJS({
  scentList: {
    loading: false,
    error: null,
    list: null
  }
})

// export default handleActions({
//   [LOAD_SCENTLIST] (scentState, {payload}) {
//     console.log("Load scent list: ",payload);

//     const listState = initial.get('scentList').set('loading',true);

//     return scentState.set('scentList', listState)
//   },
//   [LOAD_COLLECTION_SUCCESS] (scentState, {payload}) {
//     console.log("Scent success")

//     // const listState = initial.get('scentList').set('list', scent)
//   }
// })