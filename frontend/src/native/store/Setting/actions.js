/**
 * store/Setting/actions.js
 */
import {
  SET_LOADING,
  LOAD_SETTINGS,
  SET_SETTINGS,
  CHANGE_SETTING_NEWSLATTER,
  CHANGE_SETTING_NOTIFICATION,
  CHANGE_FORM_DATA,
  UPDATE_SETTINGS,
  CHANGE_SETTING,
} from './constants';

export function loadSettings() {
  return {
    type: LOAD_SETTINGS,
  };
}

export function setSettings(data) {
  return {
    type: SET_SETTINGS,
    data,
  };
}

export function updateSettings() {
  return {
    type: UPDATE_SETTINGS,
  };
}

/**
 * Change setting notification
 *
 * @param  {boolean} status
 * @return {object}
 */
export function changeSettingNotification(status) {
  return {
    type: CHANGE_SETTING_NOTIFICATION,
    status,
  };
}

/**
 * Change newsletter
 *
 * @param  {boolean} status
 * @return {object}
 */
export function changeSettingNewsletter(status) {
  return {
    type: CHANGE_SETTING_NEWSLATTER,
    status,
  };
}

/**
 * Change form data
 *
 * @param  {string} name
 * @param  {mixed} value
 * @return {object}
 */
export function changeFormData(name, value) {
  return {
    type: CHANGE_FORM_DATA,
    name,
    value,
  };
}

/**
 * Change setting
 *
 * @param  {string} name
 * @param  {mixed} value
 * @return {object}
 */
export function changeSetting(name, value) {
  return {
    type: CHANGE_SETTING,
    name,
    value,
  };
}

/**
 * Set loading
 *
 * @param  {boolean} status
 * @return {object}
 */
export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  };
}
