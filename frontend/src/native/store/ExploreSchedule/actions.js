/**
 * EXPLORE/actions.js
 */
import {
  LOAD_THIS_DAY,
  SET_THIS_DAY,
  SET_LOADING_THIS_DAY,
  LOAD_TOMORROW,
  SET_TOMORROW,
  SET_LOADING_TOMORROW,
  LOAD_LIST,
  LOAD_MORE_LIST,
  SET_LIST,
  ADD_LIST,
  SET_LIST_PAGED,
  SET_LOADING_LIST,
  SET_LOADING_MORE_LIST,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_WEEK,
  SET_DIALOG_DATE,
  SET_USE_FILTER,
  RESET_DATA,
  RESET_FILTER,
  LOAD_SCHEDULE,
  CLEAR_SCHEDULE,
  SET_DETAIL_LOADING,
  SET_SCHEDULE,
} from './constants';

/**
 * Load this day schedules
 *
 * @return {object}
 */
export function loadThisDay() {
  return {
    type: LOAD_THIS_DAY,
  };
}

/**
 * Set this day schedules
 *
 * @param {object} data
 * @return {object}
 */
export function setThisDay(data) {
  return {
    type: SET_THIS_DAY,
    data,
  };
}

/**
 * Set loading for this day schedules
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingThisDay(status) {
  return {
    type: SET_LOADING_THIS_DAY,
    status,
  };
}

/**
 * Load tomorrow schedules
 *
 * @return {object}
 */
export function loadTomorrow() {
  return {
    type: LOAD_TOMORROW,
  };
}

/**
 * Set tomorrow schedules
 *
 * @param {object} data
 * @return {object}
 */
export function setTomorrow(data) {
  return {
    type: SET_TOMORROW,
    data,
  };
}

/**
 * Set loading tomorrow schedules
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingTomorrow(status) {
  return {
    type: SET_LOADING_TOMORROW,
    status,
  };
}

/**
 * Load list schedules
 *
 * @return {object}
 */
export function loadList() {
  return {
    type: LOAD_LIST,
  };
}

/**
 * Load more list schedules
 *
 * @return {object}
 */
export function loadMoreList() {
  return {
    type: LOAD_MORE_LIST,
  };
}

/**
 * Set list paged
 *
 * @param {number} paged
 * @return {object}
 */
export function setListPaged(paged) {
  return {
    type: SET_LIST_PAGED,
    paged,
  };
}

/**
 * Set list schedules
 *
 * @param {object} data
 * @return {object}
 */
export function setList(data) {
  return {
    type: SET_LIST,
    data,
  };
}

/**
 * Add list schedules
 *
 * @param {object} data
 * @return {object}
 */
export function addList(data) {
  return {
    type: ADD_LIST,
    data,
  };
}

/**
 * Set loading list schedules
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingList(status) {
  return {
    type: SET_LOADING_LIST,
    status,
  };
}

/**
 * Set loading more list schedules
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingMoreList(status) {
  return {
    type: SET_LOADING_MORE_LIST,
    status,
  };
}

/**
 * Set date from
 *
 * @param  {string} date
 *
 * @return {object}
 */
export function setDateFrom(date) {
  return {
    type: SET_DATE_FROM,
    date,
  };
}

/**
 * Set date to
 *
 * @param  {string} date
 *
 * @return {object}
 */
export function setDateTo(date) {
  return {
    type: SET_DATE_TO,
    date,
  };
}

/**
 * Set week
 *
 * @param  {string} week
 *
 * @return {object}
 */
export function setWeek(week) {
  return {
    type: SET_WEEK,
    week,
  };
}

/**
 * Set use filter
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setUseFilter(status) {
  return {
    type: SET_USE_FILTER,
    status,
  };
}

/**
 * Set dialog date
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setDialogDate(status) {
  return {
    type: SET_DIALOG_DATE,
    status,
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

/**
 * Reset filter
 *
 * @return {object}
 */
export function resetFilter() {
  return {
    type: RESET_FILTER,
  };
}

/**
 * Set schedule
 *
 * @param  {number} id
 *
 * @return {object}
 */
export function setSchedule(data) {
  return {
    type: SET_SCHEDULE,
    data,
  };
}

/**
 * Load schedule
 *
 * @param  {number} id
 *
 * @return {object}
 */
export function loadSchedule(userId, date) {
  return {
    type: LOAD_SCHEDULE,
    userId,
    date,
  };
}

/**
 * Clear schedule
 *
 * @return {object}
 */
export function clearSchedule() {
  return {
    type: CLEAR_SCHEDULE,
  };
}

/**
 * Set detail loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setDetailLoading(status) {
  return {
    type: SET_DETAIL_LOADING,
    status,
  };
}
