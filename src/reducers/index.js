import { combineReducers } from "redux-immutable";
import user from "./user";
import recipe from "./recipe";
import device from "./device";
import reservation from "./reservation";

const appReducer = combineReducers({
  user,
  recipe,
  device,
  reservation
});

const rootReducer = (state, action) => {
  if (action.type === 'USER/LOGOUT') {
    state = undefined
  }

  return appReducer (state, action)
};

export default rootReducer;
