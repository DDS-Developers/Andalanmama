/**
 * MyRecipe/actions.js
 */
import {
  LOAD_RECIPES,
  LOAD_MORE_RECIPES,
  LOAD_RECIPE,
  SET_RECIPE,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  CHANGE_FILTER_STATUS,
  CHANGE_FILTER_LABEL,
  SET_LOADING,
  RESET_RECIPE,
} from './constants';

/**
 * Load recipes
 *
 * @return {object}
 */
export function loadRecipes() {
  return {
    type: LOAD_RECIPES,
  };
}

/**
 * Load more recipes
 *
 * @return {object}
 */
export function loadMoreRecipes() {
  return {
    type: LOAD_MORE_RECIPES,
  };
}

/**
 * Load recipe
 *
 * @param {number} id
 * @return {object}
 */
export function loadRecipe(id) {
  return {
    type: LOAD_RECIPE,
    id,
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
 * Create recipe
 *
 * @param {object} formData
 * @param {string} saveType
 * @return {object}
 */
export function createRecipe(formData, saveType = 'normal') {
  return {
    type: CREATE_RECIPE,
    formData,
    saveType,
  };
}

/**
 * Update recipe
 *
 * @param {number} id
 * @param {object} formData
 * @param {string} saveType
 * @return {object}
 */
export function updateRecipe(id, formData, saveType = 'normal') {
  return {
    type: UPDATE_RECIPE,
    id,
    formData,
    saveType,
  };
}

/**
 * Set items
 *
 * @param number id
 * @return {object}
 */
export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    id,
  };
}

/**
 * Change filter status
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function changeFilterStatus(status) {
  return {
    type: CHANGE_FILTER_STATUS,
    status,
  };
}

/**
 * Change filter label
 *
 * @param  {string} label
 *
 * @return {object}
 */
export function changeFilterLabel(label) {
  return {
    type: CHANGE_FILTER_LABEL,
    label,
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
 * Reset recipe
 *
 * @return {object}
 */
export function resetRecipe() {
  return {
    type: RESET_RECIPE,
  };
}
