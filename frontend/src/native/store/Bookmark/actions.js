/**
 * Bookmark/actions.js
 */
import {
  LOAD_BOOKMARKS,
  LOAD_MORE_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  SET_BOOKMARKS,
  SET_MARKED,
  SET_LOADING,
} from './constants';

/**
 * Load bookmarks
 *
 * @return {object}
 */
export function loadBookmarks() {
  return {
    type: LOAD_BOOKMARKS,
  };
}

/**
 * Load more bookmarks
 *
 * @return {object}
 */
export function loadMoreBookmarks() {
  return {
    type: LOAD_MORE_BOOKMARKS,
  };
}

/**
 * Add bookmark
 *
 * @param {number} recipe
 * @return {object}
 */
export function addBookmark(recipe) {
  return {
    type: ADD_BOOKMARK,
    recipe,
  };
}

/**
 * Remove bookmark
 *
 * @param {number} recipeId
 * @return {object}
 */
export function removeBookmark(recipeId) {
  return {
    type: REMOVE_BOOKMARK,
    recipeId,
  };
}

/**
 * Set bookmarks
 *
 * @param {array} bookmarks
 * @return {object}
 */
export function setBookmarks(bookmarks) {
  return {
    type: SET_BOOKMARKS,
    bookmarks,
  };
}

/**
 * Set marked
 *
 * @param {bool} status
 * @return {object}
 */
export function setMarked(status) {
  return {
    type: SET_MARKED,
    status,
  };
}

/**
 * Set loading
 *
 * @param {bool} status
 * @return {object}
 */
export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  };
}
