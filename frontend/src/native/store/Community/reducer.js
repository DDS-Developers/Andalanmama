/**
 * Community/reducer.js
 */
import { fromJS } from 'immutable';
// import Debugger from '../../helpers/Debugger';
import {
  SET_COMMUNITY_HIGHLIGHT,
  SET_LOADING_HIGHLIGHT,
  SET_COMMUNITY_THREAD,
  SET_LOADING_THREAD,
  SET_COMMUNITY_DETAIL,
  SET_LOADING_DETAIL,
  LOAD_COMMUNITY_DETAIL,
  SET_LOADING_REPLY,
  ADD_COMMUNITY_REPLY,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  id: 0,
  highlight: [],
  loadingHighlight: false,
  thread: [],
  loadingThread: false,
  detail: null,
  loadingDetail: false,
  loadingReply: false,
  reply: null,
});

function myCommunityReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMUNITY_HIGHLIGHT:
      return state.set('highlight', fromJS(action.data));
    case SET_LOADING_HIGHLIGHT:
      return state.set('loadingHighlight', action.status);
    case SET_COMMUNITY_THREAD:
      return state.set('thread', fromJS(action.data));
    case SET_LOADING_THREAD:
      return state.set('loadingThread', action.status);
    case SET_COMMUNITY_DETAIL:
      return state.set('detail', fromJS(action.data));
    case SET_LOADING_DETAIL:
      return state.set('loadingDetail', action.status);
    case LOAD_COMMUNITY_DETAIL:
      return state.set('detail', null).set('id', action.id);
    case SET_LOADING_REPLY:
      return state.set('loadingReply', action.status);
    case ADD_COMMUNITY_REPLY:
      return state.set('reply', action.reply);
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

export default myCommunityReducer;
