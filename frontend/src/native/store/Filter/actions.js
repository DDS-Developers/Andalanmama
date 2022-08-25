/**
 * Search/actions.js
 */
import {
  LOAD_CATEGORIES,
  SET_CATEGORIES,
  LOAD_POPULAR_CATEGORIES,
  SET_POPULAR_CATEGORIES,
  LOAD_RESULT,
  SET_RESULT,
  SET_LOADING,
  SET_SELECTED_CATEGORIES,
  ADD_SELECTED_CATEGORY,
  REMOVE_SELECTED_CATEGORY,
  RESET_DATA,
  RESET_SELECTED,
  SET_FILTER_DIALOG,
  SET_USE_FILTER,
} from './constants';

/**
 * Load categories
 *
 * @return {object}
 */
export function loadCategories() {
  return {
    type: LOAD_CATEGORIES,
  };
}

/**
 * Set categories
 *
 * @param {object} data
 * @return {object}
 */
export function setCategories(data) {
  return {
    type: SET_CATEGORIES,
    data,
  };
}

/**
 * Load popular categories
 *
 * @return {object}
 */
export function loadPopularCategories() {
  return {
    type: LOAD_POPULAR_CATEGORIES,
  };
}

/**
 * Set popular categories
 *
 * @param {object} data
 * @return {object}
 */
export function setPopularCategories(data) {
  return {
    type: SET_POPULAR_CATEGORIES,
    data,
  };
}

/**
 * Load result
 *
 * @return {object}
 */
export function loadResult() {
  return {
    type: LOAD_RESULT,
  };
}

/**
 * Set result
 *
 * @param {object} data
 * @return {object}
 */
export function setResult(data) {
  return {
    type: SET_RESULT,
    data,
  };
}

/**
 * Set loading
 *
 * @param  {string} status
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
 * Set filter dialog
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setFilterDialog(status) {
  return {
    type: SET_FILTER_DIALOG,
    status,
  };
}

/**
 * Set use filter
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setUseFilter(status) {
  return {
    type: SET_USE_FILTER,
    status,
  };
}

/**
 * Set selected categories
 *
 * @param  {object} categories
 *
 * @return {object}
 */
export function setSelectedCategories(categories) {
  return {
    type: SET_SELECTED_CATEGORIES,
    categories,
  };
}

/**
 * Add selected category
 *
 * @param  {object} category
 *
 * @return {object}
 */
export function addSelectedCategory(category) {
  return {
    type: ADD_SELECTED_CATEGORY,
    category,
  };
}

/**
 * Remove selected category
 *
 * @param  {number} categoryId
 *
 * @return {object}
 */
export function removeSelectedCategory(categoryId) {
  return {
    type: REMOVE_SELECTED_CATEGORY,
    categoryId,
  };
}

/**
 * Reset data
 *
 * @return {object}
 */
export function resetData() {
  return {
    type: RESET_DATA,
  };
}

/**
 * Reset selected
 *
 * @return {object}
 */
export function resetSelected() {
  return {
    type: RESET_SELECTED,
  };
}
