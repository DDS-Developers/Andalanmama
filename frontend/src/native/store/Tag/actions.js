/**
 * store/Tag/actions.js
 */
import { LOAD_TAGS, SET_TAGS, SET_LOADING } from './constants';

/**
 * Load tags
 *
 * @return {object}
 */
export function loadTags(silent = false) {
  return {
    type: LOAD_TAGS,
    silent,
  };
}

/**
 * Set tags
 *
 * @param {array} tags
 * @return {object}
 */
export function setTags(tags) {
  return {
    type: SET_TAGS,
    tags,
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
