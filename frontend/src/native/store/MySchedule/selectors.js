/**
 * MyShedule/selectors.js
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMySchedule = state => state.get('MySchedule', initialState);

const makeSelectId = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('id'),
  );

const makeSelectUserId = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('user_id'),
  );

const makeSelectDate = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('date'),
  );

const makeSelectSchedules = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('allSchedule'),
  );

const makeSelectSchedule = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('schedule'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('loading'),
  );

const makeSelectCheckDateLoading = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('checkDateLoading'),
  );

const makeSelectHaveSchedule = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('haveSchedule'),
  );

export {
  selectMySchedule,
  makeSelectSchedules,
  makeSelectLoading,
  makeSelectId,
  makeSelectUserId,
  makeSelectDate,
  makeSelectSchedule,
  makeSelectCheckDateLoading,
  makeSelectHaveSchedule,
};
