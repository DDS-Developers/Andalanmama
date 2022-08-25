/**
 * Form/actions.js
 */
import {
  SET_FORM_DATA,
  CHANGE_FORM_DATA,
  SET_FORM_FIELDS,
  SET_FORM_MESSAGE,
  SET_INPUT_ERRORS,
  CHANGE_INPUT_ERROR,
  CHECK_INPUT_ERROR,
  CHECK_INPUT_ERRORS,
  SET_INPUT_ERROR_COUNT,
  SET_VALIDATION_SETTINGS,
  RESET_DATA,
  RESET_FORM_DATA,
  CLEAR_INPUT_ERRORS,
} from './constants';

/**
 * Set form data
 *
 * @param {object} data
 * @return {object}
 */
export function setFormData(data) {
  return {
    type: SET_FORM_DATA,
    data,
  };
}

/**
 * Change form data
 *
 * @param {string} name
 * @param {string} value
 * @return {object}
 */
export function changeFormData(name, value) {
  return {
    type: CHANGE_FORM_DATA,
    name,
    value,
  };
}

/**
 * Set form fields
 *
 * @param {array} fields
 * @return {object}
 */
export function setFormFields(fields) {
  return {
    type: SET_FORM_FIELDS,
    fields,
  };
}

/**
 * Set form message
 *
 * @param {string} message
 * @return {object}
 */
export function setFormMessage(message) {
  return {
    type: SET_FORM_MESSAGE,
    message,
  };
}

/**
 * Set input errors
 *
 * @param {object} errors
 * @return {object}
 */
export function setInputErrors(errors) {
  return {
    type: SET_INPUT_ERRORS,
    errors,
  };
}

/**
 * Change input error
 *
 * @param {string} name
 * @param {string|bool} error
 * @return {object}
 */
export function changeInputError(name, error) {
  return {
    type: CHANGE_INPUT_ERROR,
    name,
    error,
  };
}

/**
 * Check input error
 *
 * @param {string} name
 * @return {object}
 */
export function checkInputError(name) {
  return {
    type: CHECK_INPUT_ERROR,
    name,
  };
}

/**
 * Check input errors
 *
 * @return {object}
 */
export function checkInputErrors() {
  return {
    type: CHECK_INPUT_ERRORS,
  };
}

/**
 * Set input error count
 *
 * @param {number} count
 * @return {object}
 */
export function setInputErrorCount(count) {
  return {
    type: SET_INPUT_ERROR_COUNT,
    count,
  };
}

/**
 * Set validation settings
 *
 * @param {object} settings
 * @return {object}
 */
export function setValidationSettings(settings) {
  return {
    type: SET_VALIDATION_SETTINGS,
    settings,
  };
}

/**
 * Reset form data
 *
 * @return {object}
 */
export function resetFormData() {
  return {
    type: RESET_FORM_DATA,
  };
}

/**
 * Clear input errors
 *
 * @return {object}
 */
export function clearInputErrors() {
  return {
    type: CLEAR_INPUT_ERRORS,
  };
}

/**
 * Reset data
 *
 * @return {object}
 */
export function resetData() {
  return {
    type: RESET_DATA,
  };
}
