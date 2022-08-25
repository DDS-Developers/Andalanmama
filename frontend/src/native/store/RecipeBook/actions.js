/**
 * RecipeBook/actions.js
 */
import {
  LOAD_RECIPE_BOOKS,
  LOAD_MORE_RECIPE_BOOKS,
  LOAD_RECIPE_BOOK,
  SET_RECIPE_BOOK,
  CREATE_RECIPE_BOOK,
  UPDATE_RECIPE_BOOK,
  DELETE_RECIPE_BOOK,
  CHANGE_FILTER_STATUS,
  CHANGE_FILTER_LABEL,
  RESET_DATA,
  SET_LOADING,
  CHANGE_TITLE,
  CHANGE_STATUS,
  SET_RECIPES,
  ADD_RECIPE,
  REMOVE_RECIPE,
  SET_DATA_CHANGED,
  CHECK_INPUT_ERROR,
  CHECK_ALL_INPUT_ERRORS,
  DELETE_RECIPE,
} from './constants';

/**
 * Load recipe books
 *
 * @return {object}
 */
export function loadRecipeBooks() {
  return {
    type: LOAD_RECIPE_BOOKS,
  };
}

/**
 * Load more recipe books
 *
 * @return {object}
 */
export function loadMoreRecipeBooks() {
  return {
    type: LOAD_MORE_RECIPE_BOOKS,
  };
}

/**
 * Load recipe book
 *
 * @param {number} id
 * @return {object}
 */
export function loadRecipeBook(id) {
  return {
    type: LOAD_RECIPE_BOOK,
    id,
  };
}

/**
 * Set recipe book
 *
 * @param {object} data
 * @return {object}
 */
export function setRecipeBook(data) {
  return {
    type: SET_RECIPE_BOOK,
    data,
  };
}

/**
 * Create recipe book
 *
 * @param {object} formData
 * @param {string} saveType
 * @return {object}
 */
export function createRecipeBook(saveType = 'normal') {
  return {
    type: CREATE_RECIPE_BOOK,
    saveType,
  };
}

/**
 * Update recipe book
 *
 * @param {number} id
 * @param {object} formData
 * @param {string} saveType
 * @return {object}
 */
export function updateRecipeBook(id, saveType = 'normal') {
  return {
    type: UPDATE_RECIPE_BOOK,
    id,
    saveType,
  };
}

/**
 * Delete recipe book
 *
 * @param number id
 * @return {object}
 */
export function deleteRecipeBook(id) {
  return {
    type: DELETE_RECIPE_BOOK,
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
 * Change title
 *
 * @param  {string} title
 *
 * @return {object}
 */
export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title,
  };
}

/**
 * Change status
 *
 * @param  {bool} status
 *
 * @return {object}
 */
export function changeStatus(status) {
  return {
    type: CHANGE_STATUS,
    status,
  };
}

/**
 * Set recipes
 *
 * @param  {array} recipes
 *
 * @return {object}
 */
export function setRecipes(recipes) {
  return {
    type: SET_RECIPES,
    recipes,
  };
}

/**
 * Add recipes
 *
 * @param  {object} recipe
 *
 * @return {object}
 */
export function addRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    recipe,
  };
}

/**
 * Remove recipe
 *
 * @param  {number} recipeId
 *
 * @return {object}
 */
export function removeRecipe(recipeId) {
  return {
    type: REMOVE_RECIPE,
    recipeId,
  };
}

/**
 * Delete recipe
 *
 * @param  {number} recipeId
 * @param  {number} recipeBookId
 *
 * @return {object}
 */
export function deleteRecipe(recipeId, recipeBookId) {
  return {
    type: DELETE_RECIPE,
    recipeId,
    recipeBookId,
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
 * Check all input errors
 *
 * @return {object}
 */
export function checkAllInputErrors() {
  return {
    type: CHECK_ALL_INPUT_ERRORS,
  };
}
