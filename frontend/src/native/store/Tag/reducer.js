/**
 * store/Tag/reducer.js
 */
import { fromJS } from 'immutable';
import { LOAD_TAGS, SET_TAGS, SET_LOADING } from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  silent: false,
  tags: [],
});

function myRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TAGS:
      return state.set('tags', fromJS([])).set('silent', action.silent);
    case SET_TAGS:
      return state.set('tags', fromJS(action.tags));
    case SET_LOADING:
      return state.set('loading', action.status);
    default:
      return state;
  }
}

export default myRecipeReducer;
