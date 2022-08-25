/**
 * store/Search/actions.js
 */
import {
  LOAD_RECIPES,
  LOAD_BOOKS,
  LOAD_ACCOUNTS,
  SET_KEYWORD,
  SET_RECIPES,
  SET_BOOKS,
  SET_ACCOUNTS,
  SET_RECIPE_LOADING,
  SET_BOOK_LOADING,
  SET_ACCOUNT_LOADING,
  SET_FILTER_STATUS,
  RESET_DATA,
} from './constants';

/**
 * Set keyword
 *
 * @param {string} keyword
 *
 * @return {object}
 */
export function setKeyword(keyword) {
  return {
    type: SET_KEYWORD,
    keyword,
  };
}

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
 * Load recipe books
 *
 * @return {object}
 */
export function loadBooks() {
  return {
    type: LOAD_BOOKS,
  };
}

/**
 * Load accounts
 *
 * @return {object}
 */
export function loadAccounts() {
  return {
    type: LOAD_ACCOUNTS,
  };
}

/**
 * Set recipes
 *
 * @param {object} data
 * @return {object}
 */
export function setRecipes(data) {
  return {
    type: SET_RECIPES,
    data,
  };
}

/**
 * Set recipe books
 *
 * @param {object} data
 * @return {object}
 */
export function setBooks(data) {
  return {
    type: SET_BOOKS,
    data,
  };
}

/**
 * Set recipe accounts
 *
 * @param {object} data
 * @return {object}
 */
export function setAccounts(data) {
  return {
    type: SET_ACCOUNTS,
    data,
  };
}

/**
 * Set recipe loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setRecipeLoading(status) {
  return {
    type: SET_RECIPE_LOADING,
    status,
  };
}

/**
 * Set recipe book loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setBookLoading(status) {
  return {
    type: SET_BOOK_LOADING,
    status,
  };
}

/**
 * Set account loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setAccountLoading(status) {
  return {
    type: SET_ACCOUNT_LOADING,
    status,
  };
}

/**
 * Set filter status
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setFilterStatus(status) {
  return {
    type: SET_FILTER_STATUS,
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
