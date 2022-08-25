/**
 * List/reducer.js
 */
import { fromJS } from 'immutable';

import ListHelper from '../../helpers/List';
import {
  LOAD_MESSAGES,
  LOAD_MORE_MESSAGES,
  DO_DELETE_MESSAGE,
  SET_MESSAGE,
  SET_MESSAGES,
  ADD_MESSAGES,
  REMOVE_MESSAGE,
  SET_LOADING,
  CLEAR_LIST,
  SET_TOTAL,
  SET_PAGED,
  ADD_MESSAGE,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  messages: [],
  message: null,
  messageId: 0,
  loading: false,
  total: 0,
  paged: 1,
});

function listReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state.set('messages', fromJS([]));
    case LOAD_MORE_MESSAGES:
      return state.set('paged', action.page);
    case DO_DELETE_MESSAGE:
      return state.set('messageId', action.messageId);
    case SET_MESSAGE: {
      const { message } = action;
      const messageData = fromJS(message);

      const messageDetail = fromJS({
        id: messageData.get('id'),
        title: messageData.get('title'),
        short_content: messageData.get('short_content'),
        content: messageData.get('message'),
        time: messageData.get('created_at'),
      });

      return state.set('message', messageDetail);
    }
    case SET_MESSAGES:
      return state.set('messages', fromJS(action.messages));
    case ADD_MESSAGE: {
      let { message } = action;
      message = fromJS(message);
      let stateMessages = state.get('messages');
      stateMessages = stateMessages.unshift(message);
      return state.set('messages', stateMessages);
    }
    case ADD_MESSAGES: {
      const messages = fromJS(action.messages);
      let stateMessages = state.get('messages');
      stateMessages = stateMessages.concat(messages);
      return state.set('messages', stateMessages);
    }
    case REMOVE_MESSAGE: {
      const { id } = action;
      let messages = state.get('messages');
      messages = ListHelper.removeItemById(id, messages);
      return state.set('messages', messages);
    }
    case SET_TOTAL:
      return state.set('total', action.total);
    case SET_PAGED:
      return state.set('paged', action.paged);
    case SET_LOADING:
      return state.set('loading', action.status);
    case CLEAR_LIST:
      return state.set('messages', fromJS([]));
    default:
      return state;
  }
}

export default listReducer;
