/**
 * MyShedule/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMySchedule = state => state.get('MyScheduleItem', initialState);

const makeSelectId = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('id'),
  );

const makeSelectSchedule = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('schedule'),
  );

const makeSelectTitle = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('title'),
  );

const makeSelectStatus = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('status'),
  );

const makeSelectDate = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('date'),
  );

const makeSelectTime = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('time'),
  );

const makeSelectShift = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('shift'),
  );

const makeSelectRecipeMain = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('recipeMain'),
  );

const makeSelectRecipeOthers = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('recipeOthers'),
  );

const makeSelectRecipeOtherIds = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('recipeOtherIds'),
  );

const makeSelectDataChanged = () =>
  createSelector(
    selectMySchedule,
    recipeBookState => recipeBookState.get('dataChanged'),
  );

const makeSelectInputErrors = () =>
  createSelector(
    selectMySchedule,
    recipeBookState => recipeBookState.get('inputErrors'),
  );

const makeSelectInputErrorCount = () =>
  createSelector(
    selectMySchedule,
    recipeBookState => recipeBookState.get('inputErrorCount'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('loading'),
  );

const makeSelectLoadingTitle = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('loadingTitle'),
  );

const makeSelectLoadingStatus = () =>
  createSelector(
    selectMySchedule,
    myScheduleState => myScheduleState.get('loadingStatus'),
  );

export {
  selectMySchedule,
  makeSelectId,
  makeSelectSchedule,
  makeSelectTitle,
  makeSelectStatus,
  makeSelectDate,
  makeSelectTime,
  makeSelectShift,
  makeSelectRecipeMain,
  makeSelectRecipeOthers,
  makeSelectRecipeOtherIds,
  makeSelectInputErrors,
  makeSelectInputErrorCount,
  makeSelectDataChanged,
  makeSelectLoading,
  makeSelectLoadingTitle,
  makeSelectLoadingStatus,
};
