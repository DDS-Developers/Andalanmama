/**
 * store/App/reducer.js
 */
import { fromJS } from 'immutable';
// import Debugger from '../../helpers/Debugger';
import {
  SET_WELCOME_SCREEN,
  SET_LOADING,
  RESPONSE_ERROR,
  SHOW_ALERT,
  HIDE_ALERT,
  DIALOG_DEBUGGING,
  SET_SCROLLVIEW_REF,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  welcomeScreen: false,
  loading: false,
  alert: {
    visible: false,
    message: '',
    title: '',
    actionContinue: null,
    actionCancel: null,
    error: null,
    errorType: '',
  },
  debugContent: [],
  scrollViewRef: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WELCOME_SCREEN:
      return state.set('welcomeScreen', action.status);
    case SET_LOADING:
      return state.set('loading', action.status);
    case SET_SCROLLVIEW_REF:
      return state.set('scrollViewRef', action.ref);
    case SHOW_ALERT:
      return state
        .setIn(['alert', 'visible'], true)
        .setIn(['alert', 'message'], action.message)
        .setIn(['alert', 'title'], action.title)
        .setIn(['alert', 'actionContinue'], action.actionContinue)
        .setIn(['alert', 'actionCancel'], action.actionCancel);
    case HIDE_ALERT:
      return state
        .setIn(['alert', 'visible'], false)
        .setIn(['alert', 'message'], '')
        .setIn(['alert', 'title'], '')
        .setIn(['alert', 'actionContinue'], null)
        .setIn(['alert', 'actionCancel'], null);

    case RESPONSE_ERROR: {
      const { error } = action;
      // const { response, status } = error;
      const { response } = error;
      let { title, message } = action;
      let errorType = 'general';

      if (title === '' && response && typeof response.statusText !== 'undefined') {
        title = response.statusText;
      } else if (title === '') {
        title = 'Mohon Maaf, terjadi kesalahan.';
      }
      if (typeof response !== 'undefined') {
        if (response && [400, 401].includes(response.status)) {
          message = 'Not authenticated';
          errorType = 'auth';
        } else if (response && response.status === 500) {
          message = 'A server error occurred';
          errorType = 'auth';
        } else if (response && response.data) {
          message = response.data.error;
        } else if (typeof response.data.message !== 'undefined') {
          // eslint-disable-next-line prefer-destructuring
          message = response.data.message;
        }
        // else if (!status) {
        //   message = 'Cannot connect to the internet';
        //   errorType = 'auth';
        // }
      } else if (typeof error === 'string') {
        message = error;
      }

      if (!message || message === '') {
        message = 'Sorry request error, please try again.';
      }

      return state
        .setIn(['alert', 'visible'], true)
        .setIn(['alert', 'message'], message)
        .setIn(['alert', 'title'], title)
        .setIn(['alert', 'error'], error)
        .setIn(['alert', 'errorType'], errorType);
    }
    case DIALOG_DEBUGGING: {
      const { message } = action;
      let contents = state.get('debugContent');
      contents = contents.push(message);
      return state.set('debugContent', contents);
    }
    default:
      return state;
  }
}

export default appReducer;
