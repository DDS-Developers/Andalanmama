/**
 * COMMUNITY/actions.js
 */
import {
  LOAD_COMMUNITY_HIGHLIGHT,
  SET_COMMUNITY_HIGHLIGHT,
  SET_LOADING_HIGHLIGHT,
  LOAD_COMMUNITY_THREAD,
  SET_COMMUNITY_THREAD,
  SET_LOADING_THREAD,
  LOAD_COMMUNITY_DETAIL,
  SET_COMMUNITY_DETAIL,
  SET_LOADING_DETAIL,
  ADD_COMMUNITY_REPLY,
  SET_LOADING_REPLY,
} from './constants';

/**
 * Load community highlight
 *
 * @return {object}
 */
export function loadCommunityHighlight() {
  return {
    type: LOAD_COMMUNITY_HIGHLIGHT,
  };
}

/**
 * Set community highlight
 *
 * @param {object} data
 * @return {object}
 */
export function setCommunityHighlight(data) {
  return {
    type: SET_COMMUNITY_HIGHLIGHT,
    data,
  };
}

/**
 * Set highlight loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingHighlight(status) {
  return {
    type: SET_LOADING_HIGHLIGHT,
    status,
  };
}

/**
 * Load community Thread
 *
 * @return {object}
 */
export function loadCommunityThread() {
  return {
    type: LOAD_COMMUNITY_THREAD,
  };
}

/**
 * Set community Thread
 *
 * @param {object} data
 * @return {object}
 */
export function setCommunityThread(data) {
  return {
    type: SET_COMMUNITY_THREAD,
    data,
  };
}

/**
 * Set thread loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingThread(status) {
  return {
    type: SET_LOADING_THREAD,
    status,
  };
}

/**
 * Load community Detail
 *
 * @return {object}
 */
export function loadCommunityDetail(id) {
  return {
    type: LOAD_COMMUNITY_DETAIL,
    id,
  };
}

/**
 * Set community Detail
 *
 * @param {object} data
 * @return {object}
 */
export function setCommunityDetail(data) {
  return {
    type: SET_COMMUNITY_DETAIL,
    data,
  };
}

/**
 * Set detail loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingDetail(status) {
  return {
    type: SET_LOADING_DETAIL,
    status,
  };
}

/**
 * Add community reply
 *
 * @param {object} reply
 * @return {object}
 */
export function addCommunityReply(reply) {
  return {
    type: ADD_COMMUNITY_REPLY,
    reply,
  };
}

/**
 * Set reply loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingReply(status) {
  return {
    type: SET_LOADING_REPLY,
    status,
  };
}
