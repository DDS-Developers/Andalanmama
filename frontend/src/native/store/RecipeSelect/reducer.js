/**
 * RecipeSelect/reducer.js
 */
import { fromJS } from 'immutable';
import {
  SET_ITEMS,
  SET_ITEM_TYPE,
  SET_PAGED,
  CLEAR_ITEMS,
  SET_LOADING,
  ADD_ITEMS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  items: [],
  paged: 1,
  itemType: 'my_recipe',
  loading: false,
});

function RecipeSelectReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return state.set('items', fromJS(action.items));
    case CLEAR_ITEMS:
      return state.set('items', fromJS([]));
    case ADD_ITEMS: {
      const { items } = action;
      const newItems = state.get('items').concat(fromJS(items));
      return state.set('items', newItems);
    }
    case SET_ITEM_TYPE:
      return state.set('itemType', action.name);
    case SET_PAGED:
      return state.set('paged', action.paged);
    case SET_LOADING:
      return state.set('loading', action.status);
    default:
      return state;
  }
}

export default RecipeSelectReducer;
