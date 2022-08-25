/**
 * Comments/actions.js
 */
import {
  LOAD_COMMENTS,
  SET_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT,
  REMOVE_COMMENT,
  SET_LOADING_COMMENTS,
  LOAD_NEXT_PAGE,
  LOAD_PREVIOUS_PAGE,
  SET_BODY_COMMENT,
  CHANGE_BODY_COMMENT,
  CHECK_INPUT_ERROR,
  CHECK_ALL_INPUT_ERRORS,
  SET_DATA_CHANGED,
  CLEAR_EDIT_DATA,
  ADD_COMMENT,
  RESET_DATA,
  UPDATE_COMMENT,
  SET_UPDATE_COMMENT,
} from './constants';

/**
 * Load Comments
 *
 * @param {number} id
 * @return {object}
 */
export function loadComments(id) {
  return {
    type: LOAD_COMMENTS,
    id,
  };
}

/**
 * Load next page
 *
 * @return {object}
 */
export function loadNextPage() {
  return {
    type: LOAD_NEXT_PAGE,
  };
}

/**
 * Load next page
 *
 * @return {object}
 */
export function loadPreviousPage() {
  return {
    type: LOAD_PREVIOUS_PAGE,
  };
}

/**
 * Set Recipe Comments
 *
 * @param {object} data
 * @return {object}
 */
export function setComments(data) {
  return {
    type: SET_COMMENTS,
    data,
  };
}

/**
 * Create Comment
 *
 * @return {object}
 */
export function createComment() {
  return {
    type: CREATE_COMMENT,
  };
}

/**
 * Update Comment
 *
 * @param {number} id
 * @return {object}
 */
export function updateComment(id) {
  return {
    type: UPDATE_COMMENT,
    id,
  };
}

/**
 * Delete Comment
 *
 * @param {number} id
 * @return {object}
 */
export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id,
  };
}

/**
 * Set loading comments
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingComments(status) {
  return {
    type: SET_LOADING_COMMENTS,
    status,
  };
}

/**
 * Remove comment
 *
 * @param {number} id
 * @return {object}
 */
export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  };
}

/**
 * Set body comment
 *
 * @param  {string} body
 *
 * @return {object}
 */
export function setBodyComment(body) {
  return {
    type: SET_BODY_COMMENT,
    body,
  };
}

/**
 * Set body comment
 *
 * @param  {string} body
 *
 * @return {object}
 */
export function changeBodyComment(body) {
  return {
    type: CHANGE_BODY_COMMENT,
    body,
  };
}

/**
 * Set data changed
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setDataChanged(status) {
  return {
    type: SET_DATA_CHANGED,
    status,
  };
}

/**
 * Reset Data
 *
 * @return {object}
 */
export function clearEditData() {
  return {
    type: CLEAR_EDIT_DATA,
  };
}

/**
 * Check input error
 *
 * @param {string} fieldName
 * @return {object}
 */
export function checkInputError(fieldName) {
  return {
    type: CHECK_INPUT_ERROR,
    fieldName,
  };
}

/**
 * Add Comment
 *
 * @param {string} data
 * @return {object}
 */
export function addComment(data) {
  return {
    type: ADD_COMMENT,
    data,
  };
}

/**
 * Set Update Comment
 *
 * @param {string} data
 * @return {object}
 */
export function setUpdateComment(data) {
  return {
    type: SET_UPDATE_COMMENT,
    data,
  };
}

/**
 * Check all input errors
 *
 * @return {object}
 */
export function checkAllInputErrors() {
  return {
    type: CHECK_ALL_INPUT_ERRORS,
  };
}

/**
 * Reset Data
 *
 * @return {object}
 */
export function resetData() {
  return {
    type: RESET_DATA,
  };
}
