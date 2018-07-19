import { combineReducers } from "redux-immutable";
import user from "./user";
import recipe from "./recipe";
import device from "./device";
import reservation from "./reservation";

export default combineReducers({
  user,
  recipe,
  device,
  reservation
});
