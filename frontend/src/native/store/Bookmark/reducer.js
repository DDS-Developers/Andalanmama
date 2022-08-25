/**
 * Bookmark/reducer.js
 */
import { fromJS } from 'immutable';
import { REMOVE_BOOKMARK, ADD_BOOKMARK, SET_MARKED, SET_LOADING, SET_BOOKMARKS } from './constants';

// The initial state of the App
export const initialState = fromJS({
  recipe: null,
  recipeId: 0,
  bookmarks: [],
  loading: false,
  marked: false,
});

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_BOOKMARK:
      return state.set('recipeId', action.recipeId);
    case ADD_BOOKMARK:
      return state.set('recipe', action.recipe);
    case SET_BOOKMARKS:
      return state.set('bookmarks', fromJS(action.bookmarks));
    case SET_MARKED:
      return state.set('marked', action.status);
    case SET_LOADING:
      return state.set('loading', action.status);
    default:
      return state;
  }
}

export default bookmarkReducer;
