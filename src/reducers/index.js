import { combineReducers } from "redux-immutable";
import user from "./user";
import recipe from "./recipe";
import device from "./device";

export default combineReducers({
  user,
  recipe,
  device
});
