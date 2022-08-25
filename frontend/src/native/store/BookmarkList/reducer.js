/**
 * BookmarkList/reducer.js
 */
import { fromJS } from 'immutable';
import ListHelper from '../../helpers/List';
import {
  SET_ITEMS,
  ADD_ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  SET_SELECTED_ID,
  SET_SELECTED,
  SET_LOADING,
  CLEAR_LIST,
  SET_TOTAL,
  SET_PAGED,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  items: [],
  selectedId: 0,
  selected: {},
  loading: false,
  total: 0,
  paged: 1,
});

function listReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return state.set('items', fromJS(action.items));
    case UPDATE_ITEM: {
      let { data } = action;
      const { id } = action;
      data = fromJS(data);
      let items = state.get('items');
      const itemIsExists = ListHelper.getItemById(id, items);
      if (typeof itemIsExists !== 'undefined') {
        items = ListHelper.updateItem(items, data);
      } else {
        items = items.push(data);
      }
      return state.set('items', items);
    }
    case ADD_ITEMS: {
      let { items } = action;
      items = fromJS(items);
      let stateItems = state.get('items');
      stateItems = stateItems.concat(items);
      return state.set('items', stateItems);
    }
    case ADD_ITEM: {
      let { item } = action;
      item = fromJS(item);
      item.set('isNew', true);
      let items = state.get('items');
      items = items.unshift(item);
      return state.set('items', items);
    }
    case REMOVE_ITEM: {
      const { id } = action;
      let items = state.get('items');
      items = ListHelper.removeItemById(id, items);
      return state.set('items', items);
    }
    case SET_SELECTED_ID:
      return state.set('selectedId', action.id);
    case SET_SELECTED:
      return state.set('selected', action.data);
    case SET_TOTAL:
      return state.set('total', action.total);
    case SET_PAGED:
      return state.set('paged', action.paged);
    case SET_LOADING:
      return state.set('loading', action.status);
    case CLEAR_LIST:
      return state.set('items', fromJS([]));
    default:
      return state;
  }
}

export default listReducer;
