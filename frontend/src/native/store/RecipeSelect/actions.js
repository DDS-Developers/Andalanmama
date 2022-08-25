/**
 * RecipeSelect/actions.js
 */
import {
  LOAD_MY_RECIPES,
  LOAD_BOOKMARKS,
  LOAD_MORE_MY_RECIPES,
  LOAD_MORE_BOOKMARKS,
  SET_ITEMS,
  ADD_ITEMS,
  SET_ITEM_TYPE,
  SET_PAGED,
  CLEAR_ITEMS,
  SET_LOADING,
} from './constants';

/**
 * Load my recipes
 *
 * @return {object}
 */
export function loadMyRecipes() {
  return {
    type: LOAD_MY_RECIPES,
  };
}

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
 * Load more my recipes
 *
 * @return {object}
 */
export function loadMoreMyRecipes() {
  return {
    type: LOAD_MORE_MY_RECIPES,
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
 * Set items
 *
 * @param {array} items
 * @return {object}
 */
export function setItems(items) {
  return {
    type: SET_ITEMS,
    items,
  };
}

/**
 * Add items
 *
 * @param {array} items
 * @return {object}
 */
export function addItems(items) {
  return {
    type: ADD_ITEMS,
    items,
  };
}

/**
 * Set item type
 *
 * @param  {string} name
 *
 * @return {object}
 */
export function setItemType(name) {
  return {
    type: SET_ITEM_TYPE,
    name,
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
 * @param  {bool} status
 * @return {object}
 */
export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  };
}

/**
 * Clear items
 *
 * @return {object}
 */
export function clearItems() {
  return {
    type: CLEAR_ITEMS,
  };
}
