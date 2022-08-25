/**
 * Form/reducer.js
 */
import { fromJS } from 'immutable';
import validate from '../../helpers/FormValidate';
import validatePassword from '../../helpers/FormValidatePassword';
import {
  SET_FORM_DATA,
  CHANGE_FORM_DATA,
  SET_FORM_FIELDS,
  SET_INPUT_ERRORS,
  CHECK_INPUT_ERROR,
  CHECK_INPUT_ERRORS,
  CHANGE_INPUT_ERROR,
  SET_INPUT_ERROR_COUNT,
  SET_VALIDATION_SETTINGS,
  RESET_DATA,
  RESET_FORM_DATA,
  CLEAR_INPUT_ERRORS,
  SET_FORM_MESSAGE,
} from './constants';
// import Debugger from '../../helpers/Debugger';

// The initial state of the App
export const initialState = fromJS({
  formData: {},
  formMessage: false,
  formFields: [],
  inputErrors: {},
  inputErrorCount: 0,
  validationSettings: null,
});

function formReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_DATA:
      return state.set('formData', fromJS(action.data));
    case CHANGE_FORM_DATA: {
      const { name, value } = action;
      const newState = state.setIn(['formData', name], value);
      let isError = false;
      if (name === 'passwordConfirmation') {
        const password = state.getIn(['formData', 'password']);
        isError = validatingPasswordError(newState, name, password);
      } else {
        isError = validatingError(newState, name);
      }
      return newState
        .setIn(['inputErrors', name], isError)
        .set('formMessage', isError)
        .set('inputErrorCount', 0);
    }
    case SET_FORM_FIELDS: {
      let newState = state;
      const fields = fromJS(action.fields);
      fields.forEach(fieldName => {
        newState = newState
          .setIn(['formData', fieldName], '')
          .setIn(['inputErrors', fieldName], false);
      });
      return newState.set('formFields', fields);
    }
    case SET_FORM_MESSAGE:
      return state.set('formMessage', action.message);
    case SET_INPUT_ERRORS:
      return state.set('inputErrors', fromJS(action.errors));
    case CHANGE_INPUT_ERROR:
      return state.setIn(['inputErrors', action.name], action.error);
    case CHECK_INPUT_ERROR: {
      const { name } = action;
      const isError = validatingError(state, name);
      return state.setIn(['inputErrors', name], isError);
    }
    case CHECK_INPUT_ERRORS: {
      const fields = state.get('formFields');
      let newstate = state;

      fields.forEach(fieldName => {
        let isError = false;
        if (fieldName === 'passwordConfirmation') {
          const password = state.getIn(['formData', 'password']);
          isError = validatingPasswordError(newstate, fieldName, password);
        } else {
          isError = validatingError(newstate, fieldName);
        }
        newstate = newstate.setIn(['inputErrors', fieldName], isError);
      });
      newstate = checkErrorCounts(newstate);
      return newstate;
    }
    case SET_INPUT_ERROR_COUNT:
      return state.set('inputErrorCount', action.count);
    case SET_VALIDATION_SETTINGS:
      return state.set('validationSettings', action.settings);
    case RESET_FORM_DATA:
      return state.set('formData', fromJS({}));
    case CLEAR_INPUT_ERRORS:
      return state.set('inputErrors', fromJS({}));
    case RESET_DATA:
      return initialState;
    default:
      return state;
  }
}

export function validatingError(state, name) {
  const config = state.get('validationSettings');
  const value = state.getIn(['formData', name]);
  const error = validate(name, value, config);
  let isError = false;
  if (error !== '' && error !== null && error !== undefined) {
    isError = error;
  }
  return isError;
}

export function validatingPasswordError(state, name, password) {
  const config = state.get('validationSettings');
  const value = state.getIn(['formData', name]);
  const error = validatePassword(name, password, value, config);
  let isError = false;
  if (error !== '' && error !== null && error !== undefined) {
    isError = error;
  }
  return isError;
}

export function checkErrorCounts(state) {
  let count = 0;
  const fields = state.get('formFields');
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

export default formReducer;
