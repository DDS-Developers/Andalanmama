/**
 * mySchedule/saga.js
 */
import { takeLatest, put, select, call } from 'redux-saga/effects';
import { setLoading as setAppLoading, showAlert, responseError } from '../App/actions';
import myScheduleService from '../../services/api/mySchedule';
import {
  setLoading,
  setSchedules,
  removeDeletedSchedule,
  copySchedule,
  setCheckDateLoading,
  setHaveSchedule,
} from './actions';
import { makeSelectId, makeSelectDate, makeSelectUserId, makeSelectSchedule } from './selectors';
import {
  LOAD_SCHEDULES,
  DELETE_SCHEDULE,
  ADD_TO_MY_SCHEDULES,
  CHECK_SCHEDULE_DATE,
} from './constants';

/**
 * Init load schedules
 */
export function* initLoadMySchedules() {
  yield put(setLoading(true));
  try {
    const response = yield call(myScheduleService.mySchedule);
    yield put(setSchedules(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get schedule'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init delete schedule
 */
export function* initDeleteSchedule() {
  yield put(setAppLoading(true));
  try {
    const id = yield select(makeSelectId());
    const date = yield select(makeSelectDate());
    yield call(myScheduleService.delete, id);
    yield put(removeDeletedSchedule(id, date));
    yield put(showAlert('Berhasil menghapus jadwal', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menghapus jadwal'));
  } finally {
    yield put(setAppLoading(false));
  }
}

/**
 * Init add to my schedules
 */
export function* initAddToMySchedules() {
  yield put(setAppLoading(true));
  try {
    const userId = yield select(makeSelectUserId());
    const date = yield select(makeSelectDate());
    const schedule = yield select(makeSelectSchedule());
    yield call(myScheduleService.addToMySchedules, date, userId);
    yield put(copySchedule(date, schedule));

    const msg = 'Berhasil Menambahkan ke Jadwal masak, cek jadwal masak bunda';
    yield put(
      showAlert(msg, 'Berhasil', {
        label: 'Ok',
        target: 'MySchedule',
      }),
    );
  } catch (err) {
    // console.log(err);
    const msg = 'Jadwal Masak bunda sudah Terisi di tanggal yang tertera, Hapus salah satu';
    yield put(
      showAlert(msg, 'Gagal Menambahkan', {
        label: 'Ok',
        target: 'ExploreSchedule',
      }),
    );
  } finally {
    yield put(setAppLoading(false));
  }
}

/**
 * Init check schedule date
 */
export function* initCheckScheduleDate() {
  yield put(setCheckDateLoading(true));
  try {
    const date = yield select(makeSelectDate());
    const response = yield call(myScheduleService.checkScheduleDate, date);
    yield put(setHaveSchedule(!response.data));
  } catch (err) {
    // console.log(err);
  } finally {
    yield put(setCheckDateLoading(false));
  }
}

export default [
  takeLatest(LOAD_SCHEDULES, initLoadMySchedules),
  takeLatest(DELETE_SCHEDULE, initDeleteSchedule),
  takeLatest(ADD_TO_MY_SCHEDULES, initAddToMySchedules),
  takeLatest(CHECK_SCHEDULE_DATE, initCheckScheduleDate),
];
