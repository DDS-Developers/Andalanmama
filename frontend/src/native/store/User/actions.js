/**
 * User/actions.js
 */
import {
  LOAD_USER_PROFILE,
  SET_USER_PROFILE,
  SET_USER_PROFILE_LOADING,
  LOAD_USER_RECIPE_BOOK,
  SET_USER_RECIPE_BOOK,
  SET_USER_RECIPE_BOOK_LOADING,
  LOAD_USER_RECIPES,
  SET_USER_RECIPES,
  SET_USER_RECIPES_LOADING,
  RESET_DATA,
} from './constants';

/**
 * Load User Profile
 *
 * @param {number} id
 * @return {object}
 */
export function loadUserProfile(id) {
  return {
    type: LOAD_USER_PROFILE,
    id,
  };
}

/**
 * Set User Profile
 *
 * @param {object} data
 * @return {object}
 */
export function setUserProfile(data) {
  return {
    type: SET_USER_PROFILE,
    data,
  };
}

/**
 * Set User Profile loading
 *
 * @param  {boolean} status
 * @return {object}
 */
export function setUserProfileLoading(status) {
  return {
    type: SET_USER_PROFILE_LOADING,
    status,
  };
}

/**
 * Load User Recipe Book
 *
 * @param {number} id
 * @return {object}
 */
export function loadUserRecipeBook(id) {
  return {
    type: LOAD_USER_RECIPE_BOOK,
    id,
  };
}

/**
 * Set User Recipe Book
 *
 * @param {object} data
 * @return {object}
 */
export function setUserRecipeBook(data) {
  return {
    type: SET_USER_RECIPE_BOOK,
    data,
  };
}

/**
 * Set User Recipe Book loading
 *
 * @param  {boolean} status
 * @return {object}
 */
export function setUserRecipeBookLoading(status) {
  return {
    type: SET_USER_RECIPE_BOOK_LOADING,
    status,
  };
}

/**
 * Load User Recipes
 *
 * @param {number} id
 * @return {object}
 */
export function loadUserRecipes(id) {
  return {
    type: LOAD_USER_RECIPES,
    id,
  };
}

/**
 * Set User Recipes
 *
 * @param {object} data
 * @return {object}
 */
export function setUserRecipes(data) {
  return {
    type: SET_USER_RECIPES,
    data,
  };
}

/**
 * Set User Recipes loading
 *
 * @param  {boolean} status
 * @return {object}
 */
export function setUserRecipesLoading(status) {
  return {
    type: SET_USER_RECIPES_LOADING,
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
