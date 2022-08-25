/**
 * MySchedue/actions.js
 */
import {
  LOAD_SCHEDULES,
  SET_SCHEDULES,
  COPY_SCHEDULE,
  SET_LOADING,
  CLEAR_SCHEDULES,
  DELETE_SCHEDULE,
  REMOVE_DELETE_SCHEDULE,
  ADD_SCHEDULE,
  UPDATE_SCHEDULES,
  ADD_TO_MY_SCHEDULES,
  SET_SCHEDULE_TITLE,
  SET_SCHEDULE_STATUS,
  CHECK_SCHEDULE_DATE,
  SET_CHECK_DATE_LOADING,
  SET_HAVE_SCHEDULE,
} from './constants';

/**
 * Load Schedules
 *
 * @return {object}
 */
export function loadMySchedules() {
  return {
    type: LOAD_SCHEDULES,
  };
}

/**
 * Set Schedules
 *
 * @param {array} allSchedule
 * @return {object}
 */
export function setSchedules(allSchedule) {
  return {
    type: SET_SCHEDULES,
    allSchedule,
  };
}

/**
 * Copy Schedule
 *
 * @param {string} date
 * @param {object} data
 * @return {object}
 */
export function copySchedule(date, data) {
  return {
    type: COPY_SCHEDULE,
    date,
    data,
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
 * Clear Schedules
 *
 * @return {object}
 */
export function clearSchedules() {
  return {
    type: CLEAR_SCHEDULES,
  };
}

/**
 * Delete Schedule
 *
 * @param {number} id
 * @param {string} date
 * @return {object}
 */
export function deleteSchedule(id, date) {
  return {
    type: DELETE_SCHEDULE,
    id,
    date,
  };
}

/**
 * Remove Deleted Schedule
 *
 * @param {number} scheduleId
 * @param {string} scheduleDate
 * @return {object}
 */
export function removeDeletedSchedule(scheduleId, scheduleDate) {
  return {
    type: REMOVE_DELETE_SCHEDULE,
    scheduleId,
    scheduleDate,
  };
}

/**
 * Add Schedule item
 *
 * @param {object} formData
 * @return {object}
 */
export function addScheduleItem(formData) {
  return {
    type: ADD_SCHEDULE,
    formData,
  };
}

/**
 * Add Schedule item
 *
 * @param {object} formData
 * @return {object}
 */
export function updateScheduleItem(formData) {
  return {
    type: UPDATE_SCHEDULES,
    formData,
  };
}

/**
 * Add Schedule title
 *
 * @param {object} formData
 * @return {object}
 */
export function updateScheduleTitle(date, title) {
  return {
    type: SET_SCHEDULE_TITLE,
    date,
    title,
  };
}

/**
 * Add Schedule status
 *
 * @param {object} formData
 * @return {object}
 */
export function updateScheduleStatus(date, status) {
  return {
    type: SET_SCHEDULE_STATUS,
    date,
    status,
  };
}

/**
 * Add to My Schedules
 *
 * @param {string} date
 * @param {number} userId
 * @return {object}
 */
export function addToMySchedules(date, userId, schedule) {
  return {
    type: ADD_TO_MY_SCHEDULES,
    date,
    userId,
    schedule,
  };
}

/**
 * Check Schedule data
 *
 * @param {string} date
 */
export function checkScheduleDate(date) {
  return {
    type: CHECK_SCHEDULE_DATE,
    date,
  };
}

/**
 * Set check date loading
 *
 * @param {bool} status
 */
export function setCheckDateLoading(status) {
  return {
    type: SET_CHECK_DATE_LOADING,
    status,
  };
}

/**
 * Set have Schedule
 *
 * @param {bool} status
 */
export function setHaveSchedule(status) {
  return {
    type: SET_HAVE_SCHEDULE,
    status,
  };
}
