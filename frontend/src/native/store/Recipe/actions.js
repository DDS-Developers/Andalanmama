/**
 * Recipe/actions.js
 */
import {
  LOAD_RECIPE,
  SET_RECIPE,
  SET_LOADING,
  ADD_LIKE,
  REMOVE_LIKE,
  SET_LIKED,
  SET_LIKE_COUNT,
  SET_RECIPE_COMMENTS,
  ADD_RECIPE_COMMENT,
  REMOVE_RECIPE_COMMENT,
  DELETE_COMMENT,
  RESET_DATA,
  UPDATE_COMMENT,
  SET_UPDATE_COMMENT,
  SHOW_VIDEO_MODAL,
} from './constants';

/**
 * Load recipe
 *
 * @param {number} id
 * @param {bool} restricted
 * @return {object}
 */
export function loadRecipe(id, restricted = false) {
  return {
    type: LOAD_RECIPE,
    id,
    restricted,
  };
}

/**
 * Set recipe
 *
 * @param {object} data
 * @return {object}
 */
export function setRecipe(data) {
  return {
    type: SET_RECIPE,
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
 * Add like
 *
 * @param {number} recipeId
 * @return {object}
 */
export function addLike(recipeId) {
  return {
    type: ADD_LIKE,
    recipeId,
  };
}

/**
 * Remove like
 *
 * @param {number} recipeId
 * @return {object}
 */
export function removeLike(recipeId) {
  return {
    type: REMOVE_LIKE,
    recipeId,
  };
}

/**
 * Set liked
 *
 * @param {bool} status
 * @return {object}
 */
export function setLiked(status) {
  return {
    type: SET_LIKED,
    status,
  };
}

/**
 * Set liked cont
 *
 * @param {number} count
 * @return {object}
 */
export function setLikeCount(count) {
  return {
    type: SET_LIKE_COUNT,
    count,
  };
}

/**
 * Set Recipe Comments
 *
 * @param {object} data
 * @return {object}
 */
export function setRecipeComments(data) {
  return {
    type: SET_RECIPE_COMMENTS,
    data,
  };
}

/**
 * Add Recipe Comment
 *
 * @param {object} data
 * @return {object}
 */
export function addRecipeComment(data) {
  return {
    type: ADD_RECIPE_COMMENT,
    data,
  };
}

/**
 * Remove recipe comment
 *
 * @param {number} id
 * @return {object}
 */
export function removeRecipeComment(id) {
  return {
    type: REMOVE_RECIPE_COMMENT,
    id,
  };
}

/**
 * Delete recipe Comment
 *
 * @param {number} id
 * @return {object}
 */
export function deleteRecipeComment(id) {
  return {
    type: DELETE_COMMENT,
    id,
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
 * Reset Data
 *
 * @return {object}
 */
export function resetData() {
  return {
    type: RESET_DATA,
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
 * Show video modal
 *
 * @param {bool} status
 * @return {object}
 */
export function showVideoModal(status) {
  return {
    type: SHOW_VIDEO_MODAL,
    status,
  };
}
