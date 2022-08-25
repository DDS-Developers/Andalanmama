/**
 * App/reducer.js
 */
import { fromJS } from 'immutable';
import {
  SET_AUTH,
  RESET_AUTH,
  SET_REGISTERING,
  DO_LOGOUT,
  SET_REDIRECT,
  SET_LOGIN_TYPE,
  DO_LOGIN,
  DO_LOGIN_FACEBOOK,
  DO_LOGIN_GOOGLE,
  LOGIN_TYPE_EMAIL,
  LOGIN_TYPE_FACEBOOK,
  LOGIN_TYPE_GOOGLE,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loggedIn: false,
  registering: false,
  authData: null,
  redirect: '',
  loginType: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return state.set('loggedIn', true).set('authData', fromJS(action.authData));
    case DO_LOGIN:
      return state.set('loginType', LOGIN_TYPE_EMAIL);
    case DO_LOGIN_FACEBOOK:
      return state.set('loginType', LOGIN_TYPE_FACEBOOK);
    case DO_LOGIN_GOOGLE:
      return state.set('loginType', LOGIN_TYPE_GOOGLE);
    case DO_LOGOUT:
      return state.set('loggedIn', false).set('authData', null);
    case RESET_AUTH:
      return state.set('loggedIn', false).set('authData', null);
    case SET_REGISTERING:
      return state.set('registering', action.status);
    case SET_REDIRECT:
      return state.set('redirect', action.redirect);
    case SET_LOGIN_TYPE:
      return state.set('loginType', action.loginType);
    default:
      return state;
  }
}

export default appReducer;
