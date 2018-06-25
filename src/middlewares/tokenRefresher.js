import {
  refreshToken,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  LOGIN_SUCCESS,
  SET_TOKEN
} from '../actions/user';

const tokenRefresher = store => {
  let timeoutId = null;

  function cancelRefreshToken() {
    if(timeoutId)
      clearTimeout(timeoutId);
    timeoutId = null;
  }

  function reserveRefreshToken(delay) {
    if(timeoutId)
      clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {

      let token = store.getState().getIn([
        'user', 'auth', 'token', 'refresh_token']);
      store.dispatch(refreshToken(token));
      timeoutId = null;
    }, delay);
  }

  return next => action => {
    switch(action.type) {
      case REFRESH_TOKEN_SUCCESS:
      case LOGIN_SUCCESS:
      case SET_TOKEN:
        break;
      case REFRESH_TOKEN_FAILURE:
        reserveRefreshToken(5 * 1000);
      default: {
        return next(action);
      }
    }

    const expTimeKey = ['user', 'auth', 'token', 'exp_time'];
    
    let prevExpTime = store.getState().getIn(expTimeKey);
    let result = next(action);
    let expTime = store.getState().getIn(expTimeKey);

    if (!expTime) {
      cancelRefreshToken();
    }

    if (expTime != prevExpTime && expTime) {
      let timestamp = (new Date(expTime)).getTime();
      let now = Date.now();
      let diff = timestamp - now;
      let delay = Math.max(timestamp - now - 10 * 60 * 1000, 0);

      reserveRefreshToken(delay);
    }

    return result;

  }
}
export default tokenRefresher;
