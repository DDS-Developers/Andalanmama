/**
 * Article/reducer.js
 */
import { fromJS } from 'immutable';
// import Debugger from '../../helpers/Debugger';
import {
  SET_ARTICLE_HIGHLIGHT,
  SET_LOADING_HIGHLIGHT,
  SET_ARTICLE_LATEST,
  SET_LOADING_LATEST,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  highlight: [],
  loadingHighlight: false,
  latest: [],
  loadingLatest: false,
});

function myArticleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLE_HIGHLIGHT:
      return state.set('highlight', fromJS(action.data));
    case SET_LOADING_HIGHLIGHT:
      return state.set('loadingHighlight', action.status);
    case SET_ARTICLE_LATEST:
      return state.set('latest', fromJS(action.data));
    case SET_LOADING_LATEST:
      return state.set('loadingLatest', action.status);
    default:
      return state;
  }
}

// function addPropCount(itemId, propName, count, stateName, state) {
//   let items = state.get(stateName);
//   if (items && items.count() > 0) {
//     const index = items.findKey(item => item.get('id') === itemId);
//     if (index !== undefined) {
//       const item = items.get(index);
//       let newCount = parseInt(item.get(propName), 10);
//       newCount += count;
//       const newItem = item.set(propName, newCount);
//       items = items.set(index, newItem);
//     }
//   }
//   return state.set(stateName, items);
// }

export default myArticleReducer;
