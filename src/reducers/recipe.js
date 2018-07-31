import { handleActions } from "redux-actions";
import Immutable from "immutable";

import {
  LOAD_COLLECTION,
  LOAD_COLLECTION_SUCCESS,
  LOAD_COLLECTION_FAILURE,
  ADD_RECIPE,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
} from '../actions/recipe'

const initialState = Immutable.fromJS({
  collection: {
    loading: false,
    error: null,
    list: null
  },
});

// recipe list example (from api doc)
// "recipes": [
//    {
//      "recipe_id": "recipe id",
//      "name": "recipe name",
//      "description": "good recipe",
//      "ingredients": [
//        {
//          "scent": "lemon",
//          "ratio": 0.4,
//          "valueRate": 80
//        },
//        {
//          "scent": "lavender",
//          "ratio": 0.3,
//          "valueRate": 60
//        },
//        {
//          "scent": "peppermint",
//          "ratio": 0.2,
//          "valueRate": 40
//        },
//        {
//          "scent": "citronella",
//          "ratio": 0.1,
//          "valueRate": 20
//        }
//      ],
//      "img_url": "http://asdf.asdf.com/sf.png",
//      "like": 0,
//      "like_user": [],
//      "reg_date": "2018-01-04T14:08:29.520207+09:00"
//    }
//  ],
//


export default handleActions({
  [LOAD_COLLECTION] (recipeState, {payload}) {
    console.log("LOAD_COLLECTION: ", payload);

    const collectionState = initialState.get('collection')
      .set('loading', true)
     
    return recipeState.set('collection', collectionState)
  },
  [LOAD_COLLECTION_SUCCESS] (recipeState, {payload}) {
    const collectionState = initialState.get('collection')
      .set('list', Immutable.fromJS(payload.recipes))
    console.log("LOAD_COLLECTION_SUCCESS");

    return recipeState.set('collection', collectionState)
  },
  [LOAD_COLLECTION_FAILURE] (recipeState, {payload}) {
    console.log("LOAD_COLLECTION_FAILURE: ", payload.response)

    const collectionState = initialState.get('collection')
      .set('error', payload)
      
    return recipeState.set('collection', collectionState)
  },
  [ADD_RECIPE] (recipeState, {payload}) {
    const collectionState = recipeState.get ('collection').set ('loading', true);

    return recipeState.set ('collection', collectionState);
  },
  [ADD_RECIPE_SUCCESS] (recipeState, {payload}) {
    console.log ("ADD_RECIPE_SUCCESS payload: ", payload);
    const collectionList = recipeState.getIn (['collection', 'list']);
    collectionList.push (payload);

    return recipeState.setIn (['collection', 'list'], collectionList);
  },
  [ADD_RECIPE_FAILURE] (recipeState, {payload}) {
    console.log ("ADD_RECIPE_FAILURE payload: ", payload.response);
    const collectionState = recipeState.get ('collection').set ('error', payload);

    return recipeState.set ('collection', collectionState);
  }
},
initialState
);

