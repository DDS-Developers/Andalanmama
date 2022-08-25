/**
 * RecipeBook/saga.js
 */
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { responseError } from '../App/actions';
import exploreServices from '../../services/api/exploreSchedules';
import {
  LOAD_THIS_DAY,
  LOAD_TOMORROW,
  LOAD_LIST,
  LOAD_MORE_LIST,
  LOAD_SCHEDULE,
} from './constants';

import {
  setThisDay,
  setLoadingThisDay,
  setTomorrow,
  setLoadingTomorrow,
  setList,
  setLoadingList,
  setLoadingMoreList,
  addList,
  setDetailLoading,
  setSchedule,
} from './actions';
import {
  makeSelectDateFrom,
  // makeSelectDateTo,
  makeSelectWeek,
  makeSelectListPaged,
  makeSelectUserId,
  makeSelectDetailDate,
  makeSelectIsUseFilter,
} from './selectors';

/**
 * Init load this day
 */
export function* initLoadThisDay() {
  yield put(setLoadingThisDay(true));
  try {
    const response = yield call(exploreServices.getSchedulesToday);
    yield put(setThisDay(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get today schedules'));
  } finally {
    yield put(setLoadingThisDay(false));
  }
}

/**
 * Init load Tomorrow schedules
 */
export function* initLoadTomorrow() {
  yield put(setLoadingTomorrow(true));
  try {
    const response = yield call(exploreServices.getSchedulesTomorrow);
    yield put(setTomorrow(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get tomorrow schedules'));
  } finally {
    yield put(setLoadingTomorrow(false));
  }
}

/**
 * Init load list
 */
export function* initLoadList() {
  yield put(setLoadingList(true));
  const isUseFilter = yield select(makeSelectIsUseFilter());
  try {
    if (isUseFilter) {
      const dateFrom = yield select(makeSelectDateFrom());
      // const dateTo = yield select(makeSelectDateTo());
      const dateTo = null;
      const week = yield select(makeSelectWeek());
      const filterData = yield call(getFilterData, dateFrom, dateTo, week, 1);
      const response = yield call(exploreServices.getFilterSchedules, filterData);
      yield put(setList(response.data));
    } else {
      const response = yield call(exploreServices.getSchedules);
      yield put(setList(response.data));
    }
  } catch (err) {
    yield put(responseError(err, 'Error get schedules'));
  } finally {
    yield put(setLoadingList(false));
  }
}

/**
 * Init load more list
 */
export function* initLoadMoreList() {
  yield put(setLoadingMoreList(true));
  const isUseFilter = yield select(makeSelectIsUseFilter());
  try {
    if (isUseFilter) {
      const dateFrom = yield select(makeSelectDateFrom());
      // const dateTo = yield select(makeSelectDateTo());
      const dateTo = null;
      const week = yield select(makeSelectWeek());
      const paged = yield select(makeSelectListPaged());
      const filterData = yield call(getFilterData, dateFrom, dateTo, week, paged);
      const response = yield call(exploreServices.getSchedules, filterData, paged);
      yield put(addList(response.data));
    } else {
      const paged = yield select(makeSelectListPaged());
      const response = yield call(exploreServices.getSchedules, paged);
      yield put(addList(response.data));
    }
  } catch (err) {
    yield put(responseError(err, 'Error get more schedules'));
  } finally {
    yield put(setLoadingMoreList(false));
  }
}

/**
 * Init load schedule
 */
export function* initLoadSchedule() {
  yield put(setDetailLoading(true));
  const userId = yield select(makeSelectUserId());
  const date = yield select(makeSelectDetailDate());
  try {
    const response = yield call(exploreServices.getDetailSchedule, { userId, date });
    yield put(setSchedule(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get schedule'));
  } finally {
    yield put(setDetailLoading(false));
  }
}

export default [
  takeLatest(LOAD_THIS_DAY, initLoadThisDay),
  takeLatest(LOAD_TOMORROW, initLoadTomorrow),
  takeLatest(LOAD_LIST, initLoadList),
  takeLatest(LOAD_MORE_LIST, initLoadMoreList),
  takeLatest(LOAD_SCHEDULE, initLoadSchedule),
];

export function getFilterData(dateFrom, dateTo, week, paged) {
  const data = {
    page: paged,
  };
  if (week && week !== '') {
    data.date = week;
  } else {
    // eslint-disable-next-line no-lonely-if
    if (!dateTo && dateFrom && dateFrom !== '') {
      data.date = dateFrom;
    } else {
      if (dateFrom && dateFrom !== '') {
        data.date_from = dateFrom;
      }
      if (dateTo && dateTo !== '') {
        data.date_to = dateTo;
      }
    }
  }
  return data;
}
