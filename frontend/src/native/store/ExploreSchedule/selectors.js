/**
 * Explore/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectExplore = state => state.get('ExploreSchedule', initialState);

const makeSelectThisDay = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('thisDaySchedules'),
  );

const makeSelectLoadingThisDay = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingThisDay'),
  );

const makeSelectTomorrow = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('tomorrowSchedules'),
  );

const makeSelectLoadingTomorrow = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingTomorrow'),
  );

const makeSelectList = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('listSchedules'),
  );

const makeSelectListData = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('listData'),
  );

const makeSelectListPaged = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('listPaged'),
  );

const makeSelectLoadingList = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingList'),
  );

const makeSelectLoadingMoreList = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingMoreList'),
  );

const makeSelectDateFrom = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('dateFrom'),
  );

const makeSelectDateTo = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('dateTo'),
  );

const makeSelectWeek = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('week'),
  );

const makeSelectDialogDate = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('dialogDate'),
  );

const makeSelectIsUseFilter = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('isUseFilter'),
  );

const makeSelectUserId = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('userId'),
  );

const makeSelectDetailDate = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('detailDate'),
  );

const makeSelectSchedule = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('schedule'),
  );

const makeSelectDetailLoading = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('detailLoading'),
  );

export {
  selectExplore,
  makeSelectThisDay,
  makeSelectLoadingThisDay,
  makeSelectTomorrow,
  makeSelectLoadingTomorrow,
  makeSelectList,
  makeSelectListData,
  makeSelectListPaged,
  makeSelectLoadingList,
  makeSelectLoadingMoreList,
  makeSelectDateFrom,
  makeSelectDateTo,
  makeSelectWeek,
  makeSelectDialogDate,
  makeSelectIsUseFilter,
  makeSelectUserId,
  makeSelectDetailDate,
  makeSelectSchedule,
  makeSelectDetailLoading,
};
