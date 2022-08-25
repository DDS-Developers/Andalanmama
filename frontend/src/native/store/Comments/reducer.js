/**
 * Recipe/reducer.js
 */
import { fromJS } from 'immutable';
import ListHelper from '../../helpers/List';
import validate from '../../helpers/FormValidate';
import {
  LOAD_COMMENTS,
  SET_COMMENTS,
  SET_LOADING_COMMENTS,
  DELETE_COMMENT,
  REMOVE_COMMENT,
  SET_BODY_COMMENT,
  CHANGE_BODY_COMMENT,
  SET_DATA_CHANGED,
  SET_UPDATE_COMMENT,
  CHECK_INPUT_ERROR,
  CHECK_ALL_INPUT_ERRORS,
  CLEAR_EDIT_DATA,
  UPDATE_COMMENT,
  ADD_COMMENT,
  RESET_DATA,
} from './constants';

import { validationConfig } from './validation';

const fields = ['bodyComment'];

// The initial state of the App
export const initialState = fromJS({
  id: 0,
  loadingComments: false,
  comments: {},
  commentsData: [],
  currentPage: 0,
  commentId: 0,
  bodyComment: '',
  inputErrors: {
    bodyComment: false,
  },
  inputErrorCount: 0,
  dataChanged: false,
});

function myRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return state.set('comments', null).set('id', action.id);

    case SET_COMMENTS: {
      return state
        .set('comments', fromJS(action.data))
        .set('commentsData', fromJS(action.data.data))
        .set('currentPage', fromJS(action.data.current_page));
    }

    case DELETE_COMMENT:
      return state.set('commentId', action.id);

    case REMOVE_COMMENT: {
      const { id } = action;
      let commentsData = state.get('commentsData');
      commentsData = ListHelper.removeItemById(id, commentsData);
      return state.set('commentsData', commentsData);
    }

    case SET_LOADING_COMMENTS:
      return state.set('loadingComments', action.status);

    case SET_BODY_COMMENT:
      return state.set('bodyComment', action.body);

    case CHANGE_BODY_COMMENT:
      return changeData(state, 'bodyComment', action.body);

    case SET_DATA_CHANGED:
      return state.set('dataChanged', action.status);

    case UPDATE_COMMENT:
      return state.set('commentId', action.id);

    case ADD_COMMENT: {
      const { data } = action;
      data.deletable = 'yes';
      let commentData = null;
      const commentsData = state.get('commentsData');
      commentData = commentsData.unshift(fromJS(data));
      return state.set('commentsData', commentData);
    }

    case SET_UPDATE_COMMENT: {
      let { data } = action;
      data.deletable = 'yes';
      data = fromJS(data);
      let commentsData = state.get('commentsData');
      const itemIsExists = ListHelper.getItemById(data.get('id'), commentsData);
      if (typeof itemIsExists !== 'undefined') {
        commentsData = ListHelper.updateItem(commentsData, data);
      } else {
        commentsData = commentsData.push(data);
      }
      return state.set('commentsData', commentsData);
    }

    case CHECK_INPUT_ERROR: {
      const { fieldName } = action;
      const isError = validatingError(state, fieldName);
      return state.setIn(['inputErrors', fieldName], isError);
    }

    case CHECK_ALL_INPUT_ERRORS: {
      let newstate = state;

      fields.forEach(fieldName => {
        const isError = validatingError(newstate, fieldName);
        newstate = newstate.setIn(['inputErrors', fieldName], isError);
      });
      newstate = checkErrorCounts(newstate);
      return newstate;
    }
    case CLEAR_EDIT_DATA: {
      return state.set('bodyComment', '');
    }
    case RESET_DATA: {
      return initialState;
    }
    default:
      return state;
  }
}

export function changeData(state, name, value) {
  const newState = state.set(name, value);
  let isError = false;
  isError = validatingError(newState, name);
  return newState.setIn(['inputErrors', name], isError).set('dataChanged', true);
}

export function validatingError(state, name) {
  const value = state.get(name);
  const error = validate(name, value, validationConfig);
  let isError = false;
  if (error !== '' && error !== null && error !== undefined) {
    isError = error;
  }
  return isError;
}

export function checkErrorCounts(state) {
  let count = 0;
  for (let i = 0; i < fields.length; i += 1) {
    const errorName = fields[i];
    const isError = state.getIn(['inputErrors', errorName]);
    if (isError !== false && isError !== '' && isError !== null) {
      count += 1;
    }
  }
  fields.forEach(fieldName => {
    const isError = state.getIn(['inputErrors', fieldName]);
    if (isError !== false && isError !== '' && isError !== null) {
      count += 1;
    }
  });
  return state.set('inputErrorCount', count);
}

export default myRecipeReducer;
