/**
 * MyProfile/actions.js
 */
import {
  LOAD_PROFILE,
  SET_LOADING,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILE,
  SET_PROFILE,
  LOAD_PROFILE_ACCOUNT,
  SET_PROFILE_ACCOUNT,
  UPDATE_POINT,
  ADD_SHARE_POINT,
} from './constants';

/**
 * Load Profile
 *
 * @return {object}
 */
export function loadProfile() {
  return {
    type: LOAD_PROFILE,
  };
}

/**
 * Load Profile Account
 *
 * @return {object}
 */
export function loadProfileAccount() {
  return {
    type: LOAD_PROFILE_ACCOUNT,
  };
}

/**
 * get Profile
 *
 * @return {object}
 */
export function getProfile() {
  return {
    type: GET_PROFILE,
  };
}

/**
 * Set profile
 *
 * @param {object} data
 * @return {object}
 */
export function setProfile(data) {
  return {
    type: SET_PROFILE,
    data,
  };
}

/**
 * Set profile
 *
 * @param {object} data
 * @return {object}
 */
export function setProfileAccount(data) {
  return {
    type: SET_PROFILE_ACCOUNT,
    data,
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

/**
 * Clear Profile Data
 *
 * @return {object}
 */
export function clearProfile() {
  return {
    type: CLEAR_PROFILE,
  };
}

/**
 * Update Profile
 *
 * @param {object} formData
 * @return {object}
 */
export function updateProfile(id, formData) {
  return {
    type: UPDATE_PROFILE,
    formData,
  };
}

/**
 * Update points
 *
 * @param {number} data
 * @return {object}
 */
export function updatePoints(data) {
  return {
    type: UPDATE_POINT,
    data,
  };
}

/**
 * Add share points
 *
 * @return {object}
 */
export function addSharePoint() {
  return {
    type: ADD_SHARE_POINT,
  };
}
