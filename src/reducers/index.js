import { combineReducers } from "redux-immutable";
import user from "./user";
import recipe from "./recipe";

export default combineReducers({
  user,
  recipe
});
