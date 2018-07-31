import { createAction } from "redux-actions"
import {
  createApiAction,
  createAuthorizedApiAction
} from './api'

export const LOAD_COLLECTION = "RECIPE/LOAD_COLLECTION";
export const LOAD_COLLECTION_SUCCESS = "RECIPE/LOAD_COLLECTION_SUCCESS";
export const LOAD_COLLECTION_FAILURE = "RECIPE/LOAD_COLLECTION_FAILURE";

export const loadCollection = ({
  order='like',   // sorting order (reg_date or like)
  scents='all', // available scents. 'all' or Array
  mine=false
}) =>  async (dispatch, getState) => {
  if (scents != 'all') {
    scents = scents.join(',')
  }

  const apiCall = createAuthorizedApiAction({
    method: 'GET',
    path: 'recipes',
    params: {
      order,
      scents,
      mine,
      liked: 'false',
    },
    types: [LOAD_COLLECTION, LOAD_COLLECTION_SUCCESS, LOAD_COLLECTION_FAILURE]
  });

  await dispatch(apiCall)
}

  
export const ADD_RECIPE = "RECIPE/ADD_RECIPE";
export const ADD_RECIPE_SUCCESS = "RECIPE/ADD_RECIPE_SUCCES";
export const ADD_RECIPE_FAILURE = "RECIPE/ADD_RECIPE_FAILURE";

export const addRecipe = (ingredients, name, description, img_url, recipe_log_id) => async (dispatch, getState) => {

  console.log ("ADD_RECIPE actions :", ingredients, name, description, img_url, recipe_log_id);
  
  const apiCall = createAuthorizedApiAction ({
    path: 'recipes',
    params: {
      ingredients,
      name,
      description,
      img_url,
      //recipe_log_id,
    },
    types: [ADD_RECIPE, ADD_RECIPE_SUCCESS, ADD_RECIPE_FAILURE]
  });

  await dispatch (apiCall)
}
