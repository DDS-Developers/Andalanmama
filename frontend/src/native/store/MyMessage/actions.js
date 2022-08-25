/**
 * MyMessage/actions.js
 */
import {
  LOAD_MESSAGES,
  LOAD_MORE_MESSAGES,
  DO_DELETE_MESSAGE,
  SET_MESSAGE,
  SET_MESSAGES,
  ADD_MESSAGE,
  ADD_MESSAGES,
  REMOVE_MESSAGE,
  SET_LOADING,
  CLEAR_LIST,
  SET_TOTAL,
  SET_PAGED,
} from './constants';

/**
 * Load messages
 *
 * @return {object}
 */
export function loadMessages() {
  return {
    type: LOAD_MESSAGES,
  };
}

/**
 * Load more messages
 *
 * @param {number} page
 * @return {object}
 */
export function loadMoreMessages(page) {
  return {
    type: LOAD_MORE_MESSAGES,
    page,
  };
}

/**
 * Do delete message
 *
 * @param {number} messageId
 * @return {object}
 */
export function doDeleteMessage(messageId) {
  return {
    type: DO_DELETE_MESSAGE,
    messageId,
  };
}

/**
 * Set message
 *
 * @param {object} message
 * @return {object}
 */
export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    message,
  };
}

/**
 * Set messages
 *
 * @param {array} messages
 * @return {object}
 */
export function setMessages(messages) {
  return {
    type: SET_MESSAGES,
    messages,
  };
}

/**
 * Add message
 *
 * @param {object} message
 * @return {object}
 */
export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message,
  };
}

/**
 * Add messages
 *
 * @param {array} messages
 * @return {object}
 */
export function addMessages(messages) {
  return {
    type: ADD_MESSAGES,
    messages,
  };
}

/**
 * Remove message
 *
 * @param {number} id
 * @return {object}
 */
export function removeMessage(id) {
  return {
    type: REMOVE_MESSAGE,
    id,
  };
}

/**
 * Set total
 *
 * @param  {number} total
 * @return {object}
 */
export function setTotal(total) {
  return {
    type: SET_TOTAL,
    total,
  };
}

/**
 * Set paged
 *
 * @param  {number} paged
 * @return {object}
 */
export function setPaged(paged) {
  return {
    type: SET_PAGED,
    paged,
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
 * Clear list
 *
 * @return {object}
 */
export function clearList() {
  return {
    type: CLEAR_LIST,
  };
}
