/**
 * User/reducer.js
 */
import { fromJS } from 'immutable';
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

// The initial state of the App
export const initialState = fromJS({
  id: 0,
  user: null,
  loadingUser: false,
  recipeBook: null,
  loadingRecipeBook: false,
  recipes: null,
  loadingRecipes: false,
});

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_PROFILE:
      return state.set('user', null).set('id', action.id);
    case SET_USER_PROFILE:
      return state.set('user', fromJS(action.data));
    case SET_USER_PROFILE_LOADING:
      return state.set('loadingUser', action.status);
    case LOAD_USER_RECIPE_BOOK:
      return state.set('recipeBook', null).set('id', action.id);
    case SET_USER_RECIPE_BOOK:
      return state.set('recipeBook', fromJS(action.data));
    case SET_USER_RECIPE_BOOK_LOADING:
      return state.set('loadingRecipeBook', action.status);
    case LOAD_USER_RECIPES:
      return state.set('recipes', null).set('id', action.id);
    case SET_USER_RECIPES:
      return state.set('recipes', fromJS(action.data));
    case SET_USER_RECIPES_LOADING:
      return state.set('loadingRecipes', action.status);
    case RESET_DATA:
      return initialState;
    default:
      return state;
  }
}

export default UserReducer;
