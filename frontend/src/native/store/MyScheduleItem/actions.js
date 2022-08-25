/**
 * MyScheduleItem/actions.js
 */
import {
  CREATE_SCHEDULE,
  UPDATE_SCHEDULE,
  UPDATE_SCHEDULE_TITLE,
  UPDATE_SCHEDULE_STATUS,
  SET_SCHEDULE,
  CHANGE_TITLE,
  CHANGE_DATE,
  CHANGE_TIME,
  CHANGE_SHIFT,
  CHANGE_RECIPE_MAIN,
  SET_RECIPE_OTHERS,
  ADD_RECIPE_OTHER,
  REMOVE_RECIPE_OTHER,
  CHECK_ALL_INPUT_ERRORS,
  CHECK_INPUT_ERROR,
  SET_DATA_CHANGED,
  SET_LOADING,
  SET_LOADING_TITLE,
  SET_LOADING_STATUS,
  RESET_DATA,
  RESET_SCHEDULE,
} from './constants';

/**
 * Create schedule
 *
 * @param {object} formData
 * @param {string} saveType
 * @return {object}
 */
export function createSchedule(formData) {
  return {
    type: CREATE_SCHEDULE,
    formData,
  };
}

/**
 * Update schedule
 *
 * @param {number} id
 * @param {object} formData
 * @return {object}
 */
export function updateSchedule(id) {
  return {
    type: UPDATE_SCHEDULE,
    id,
  };
}

/**
 * Update schedule title
 *
 * @param {string} date
 * @param {string} title
 * @return {object}
 */
export function updateScheduleTitle(date, title) {
  return {
    type: UPDATE_SCHEDULE_TITLE,
    date,
    title,
  };
}

/**
 * Update schedule status
 *
 * @param {string} date
 * @param {number} status
 * @return {object}
 */
export function updateScheduleStatus(date, status) {
  return {
    type: UPDATE_SCHEDULE_STATUS,
    date,
    status,
  };
}

/**
 * Set schedule
 *
 * @param {object} data
 * @return {object}
 */
export function setSchedule(data) {
  return {
    type: SET_SCHEDULE,
    data,
  };
}

/**
 * Change title
 *
 * @param  {string} title
 *
 * @return {object}
 */
export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title,
  };
}

/**
 * Change date
 *
 * @param  {string} date
 *
 * @return {object}
 */
export function changeDate(date) {
  return {
    type: CHANGE_DATE,
    date,
  };
}

/**
 * Change time
 *
 * @param  {string} time
 *
 * @return {object}
 */
export function changeTime(time) {
  return {
    type: CHANGE_TIME,
    time,
  };
}

/**
 * Change shift
 *
 * @param  {string} shift
 *
 * @return {object}
 */
export function changeShift(shift) {
  return {
    type: CHANGE_SHIFT,
    shift,
  };
}

/**
 * Change recipe main
 *
 * @param  {object} recipe
 *
 * @return {object}
 */
export function changeRecipeMain(recipe) {
  return {
    type: CHANGE_RECIPE_MAIN,
    recipe,
  };
}

/**
 * Set recipe Others
 *
 * @param  {array} recipes
 *
 * @return {object}
 */
export function setRecipeOthers(recipes) {
  return {
    type: SET_RECIPE_OTHERS,
    recipes,
  };
}

/**
 * Add recipe other
 *
 * @param  {object} recipe
 *
 * @return {object}
 */
export function addRecipeOther(recipe) {
  return {
    type: ADD_RECIPE_OTHER,
    recipe,
  };
}

/**
 * Remove recipe other
 *
 * @param  {number} recipeId
 *
 * @return {object}
 */
export function removeRecipeOther(recipeId) {
  return {
    type: REMOVE_RECIPE_OTHER,
    recipeId,
  };
}

/**
 * Set data changed
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setDataChanged(status) {
  return {
    type: SET_DATA_CHANGED,
    status,
  };
}

/**
 * Set loading
 *
 * @param  {boolean} status
 * @return {object}
 */
export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  };
}

/**
 * Set loading title
 *
 * @param  {boolean} status
 * @return {object}
 */
export function setLoadingTitle(status) {
  return {
    type: SET_LOADING_TITLE,
    status,
  };
}

/**
 * Set loading status
 *
 * @param  {boolean} status
 * @return {object}
 */
export function setLoadingStatus(status) {
  return {
    type: SET_LOADING_STATUS,
    status,
  };
}

/**
 * Reset Data
 *
 * @return {object}
 */
export function resetData() {
  return {
    type: RESET_DATA,
  };
}

/**
 * Reset schedule
 *
 * @return {object}
 */
export function resetSchedule() {
  return {
    type: RESET_SCHEDULE,
  };
}

/**
 * Check input error
 *
 * @param {string} fieldName
 * @return {object}
 */
export function checkInputError(fieldName) {
  return {
    type: CHECK_INPUT_ERROR,
    fieldName,
  };
}

/**
 * Check all input errors
 *
 * @return {object}
 */
export function checkAllInputErrors() {
  return {
    type: CHECK_ALL_INPUT_ERRORS,
  };
}
