/**
 * Auth/actions.js
 */
// import Debugger from '../../helpers/Debugger';
import {
  DO_LOGIN,
  DO_LOGIN_GOOGLE,
  DO_LOGIN_FACEBOOK,
  DO_REGISTER,
  DO_LOGOUT,
  DO_FORGOT_PASSWORD,
  DO_RESET_PASSWORD,
  DO_CHANGE_PASSWORD,
  DO_VERIFY,
  LOAD_AUTH,
  SET_AUTH,
  RESET_AUTH,
  SET_REGISTERING,
  SET_REDIRECT,
  SET_LOGIN_TYPE,
} from './constants';

/**
 * Do login
 *
 * @return {object}
 */
export function doLogin() {
  return {
    type: DO_LOGIN,
  };
}

/**
 * Do login google
 *
 * @return {object}
 */
export function doLoginGoogle() {
  return {
    type: DO_LOGIN_GOOGLE,
  };
}

/**
 * Do login facebook
 *
 * @return {object}
 */
export function doLoginFacebook() {
  return {
    type: DO_LOGIN_FACEBOOK,
  };
}

/**
 * Do register
 *
 * @return {object}
 */
export function doRegister() {
  return {
    type: DO_REGISTER,
  };
}

/**
 * Do logout
 *
 * @return {object}
 */
export function doLogout() {
  return {
    type: DO_LOGOUT,
  };
}

/**
 * Do forgot password
 *
 * @return {object}
 */
export function doForgotPassword() {
  return {
    type: DO_FORGOT_PASSWORD,
  };
}

/**
 * Do reset password
 *
 * @return {object}
 */
export function doResetPassword() {
  return {
    type: DO_RESET_PASSWORD,
  };
}

/**
 * Do change password
 *
 * @return {object}
 */
export function doChangePassword() {
  return {
    type: DO_CHANGE_PASSWORD,
  };
}

/**
 * Do verify
 *
 * @return {object}
 */
export function doVerify() {
  return {
    type: DO_VERIFY,
  };
}

/**
 * Load auth
 *
 * @return {object}
 */
export function loadAuth() {
  return {
    type: LOAD_AUTH,
  };
}

/**
 * Set auth
 *
 * @param  {object} authData
 *
 * @return {object}
 */
export function setAuth(authData) {
  return {
    type: SET_AUTH,
    authData,
  };
}

/**
 * Reset auth
 *
 * @return {object}
 */
export function resetAuth() {
  return {
    type: RESET_AUTH,
  };
}

/**
 * Set registering
 *
 * @param  {boolean} status
 *
 * @return {object}
 */
export function setRegistering(status) {
  return {
    type: SET_REGISTERING,
    status,
  };
}

/**
 * Set redirect
 *
 * @param  {string} redirect
 *
 * @return {object}
 */
export function setRedirect(redirect) {
  return {
    type: SET_REDIRECT,
    redirect,
  };
}

/**
 * Set login type
 *
 * @param  {string} loginType
 *
 * @return {object}
 */
export function setLoginType(loginType) {
  return {
    type: SET_LOGIN_TYPE,
    loginType,
  };
}
