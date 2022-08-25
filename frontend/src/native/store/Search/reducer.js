/**
 * store/Search/reducer.js
 */
import { fromJS } from 'immutable';
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
  FILTER_STATUS_ALL,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  keyword: '',
  filterStatus: FILTER_STATUS_ALL,
  recipes: [],
  books: [],
  accounts: [],
  recipeLoading: false,
  bookLoading: false,
  accountLoading: false,
});

function myExploreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_KEYWORD:
      return state.set('keyword', action.keyword);
    case LOAD_RECIPES:
      return state.set('recipes', fromJS([]));
    case LOAD_BOOKS:
      return state.set('books', fromJS([]));
    case LOAD_ACCOUNTS:
      return state.set('accounts', fromJS([]));
    case SET_RECIPES:
      return state.set('recipes', fromJS(action.data));
    case SET_BOOKS:
      return state.set('books', fromJS(action.data));
    case SET_ACCOUNTS:
      return state.set('accounts', fromJS(action.data));
    case SET_RECIPE_LOADING:
      return state.set('recipeLoading', action.status);
    case SET_BOOK_LOADING:
      return state.set('bookLoading', action.status);
    case SET_ACCOUNT_LOADING:
      return state.set('accountLoading', action.status);
    case SET_FILTER_STATUS:
      return state.set('filterStatus', action.status);
    case RESET_DATA:
      return initialState;
    default:
      return state;
  }
}

export default myExploreReducer;
