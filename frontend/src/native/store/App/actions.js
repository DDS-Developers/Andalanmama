/**
 * store/App/actions.js
 */
import {
  SET_WELCOME_SCREEN,
  SET_LOADING,
  RESPONSE_ERROR,
  SHOW_ALERT,
  HIDE_ALERT,
  DIALOG_DEBUGGING,
  SET_SCROLLVIEW_REF,
} from './constants';

/**
 * Set welcome screen
 *
 * @param  {boolean} status Welcome screen status
 *
 * @return {object}
 */
export function setWelcomeScreen(status) {
  return {
    type: SET_WELCOME_SCREEN,
    status,
  };
}

/**
 * Set loading
 *
 * @param  {boolean} status Loading status
 *
 * @return {object}
 */
export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  };
}

/**
 * Show alert
 *
 * @param  {string} message
 * @param  {string} title
 * @param  {object} actionContinue
 * @param  {object} actionCancel
 *
 * @return {object}
 */
export function showAlert(message, title = '', actionContinue = null, actionCancel = null) {
  return {
    type: SHOW_ALERT,
    message,
    title,
    actionContinue,
    actionCancel,
  };
}

/**
 * Response error
 *
 * @param  {object} error
 * @param  {string} message
 * @param  {string} title
 *
 * @return {object}
 */
export function responseError(error, message, title = '') {
  return {
    type: RESPONSE_ERROR,
    error,
    message,
    title,
  };
}

/**
 * Hide alert
 *
 * @return {object}
 */
export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

/**
 * Dialog debugging
 *
 * @return {string} message
 * @return {object}
 */
export function dialogDebugging(message) {
  return {
    type: DIALOG_DEBUGGING,
    message,
  };
}

/**
 * Set scrollview ref
 *
 * @return {string} message
 * @return {object}
 */
export function setScrollViewRef(ref) {
  return {
    type: SET_SCROLLVIEW_REF,
    ref,
  };
}
