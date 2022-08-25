/**
 * MyScheduleItem/saga.js
 */
import { takeLatest, put, select, call } from 'redux-saga/effects';
import myScheduleService from '../../services/api/mySchedule';
import { showAlert, responseError } from '../App/actions';
import {
  CREATE_SCHEDULE,
  UPDATE_SCHEDULE,
  UPDATE_SCHEDULE_TITLE,
  UPDATE_SCHEDULE_STATUS,
} from './constants';
import {
  addScheduleItem,
  updateScheduleItem,
  updateScheduleTitle,
  updateScheduleStatus,
} from '../MySchedule/actions';
import {
  setLoading as setManageLoading,
  checkAllInputErrors,
  setLoadingTitle,
  setLoadingStatus,
} from './actions';
import {
  makeSelectId,
  makeSelectTitle,
  makeSelectDate,
  makeSelectTime,
  makeSelectShift,
  makeSelectStatus,
  // makeSelectRecipeMain,
  makeSelectRecipeOthers,
  makeSelectInputErrorCount,
} from './selectors';

/**
 * Init create schedule
 */
export function* initCreateSchedule() {
  yield put(checkAllInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount < 1) {
    yield put(setManageLoading(true));

    try {
      const date = yield select(makeSelectDate());
      const time = yield select(makeSelectTime());
      const shift = yield select(makeSelectShift());
      // const recipeMain = yield select(makeSelectRecipeMain());
      const recipeOthers = yield select(makeSelectRecipeOthers());
      const formData = yield call(getFormData, {
        date,
        time,
        shift,
        // recipeMain,
        recipeOthers,
      });

      const response = yield call(myScheduleService.create, formData);
      yield put(addScheduleItem(response.data));
      yield put(
        showAlert('Jadwal masak berhasil dibuat cek jadwal masak sekarang', 'Berhasil', {
          label: 'Jadwal Saya',
          target: 'MySchedule',
        }),
      );
    } catch (err) {
      yield put(responseError(err, 'Error create schedule'));
    } finally {
      yield put(setManageLoading(false));
    }
  }
}

/**
 * Init update schedule
 */
export function* initUpdateSchedule() {
  yield put(checkAllInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount < 1) {
    yield put(setManageLoading(true));

    try {
      const id = yield select(makeSelectId());
      // const title = yield select(makeSelectTitle());
      // const date = yield select(makeSelectDate());
      const time = yield select(makeSelectTime());
      const shift = yield select(makeSelectShift());
      // const recipeMain = yield select(makeSelectRecipeMain());
      const recipeOthers = yield select(makeSelectRecipeOthers());
      const formData = yield call(getFormData, {
        // date,
        time,
        shift,
        // recipeMain,
        recipeOthers,
      });
      // yield call(myScheduleService.update, id, formData);
      const response = yield call(myScheduleService.update, id, formData);
      yield put(updateScheduleItem(response.data));
      yield put(
        showAlert('Jadwal masak berhasil disimpan cek jadwal masak sekarang', 'Berhasil', {
          label: 'Jadwal Saya',
          target: 'MySchedule',
        }),
      );
    } catch (err) {
      // console.log(err);
      yield put(responseError(err, 'Error update schedule'));
    } finally {
      yield put(setManageLoading(false));
    }
  }
}

/**
 * Init update schedule title
 */
export function* initUpdateScheduleTitle() {
  yield put(setLoadingTitle(true));

  try {
    const date = yield select(makeSelectDate());
    const title = yield select(makeSelectTitle());
    yield call(myScheduleService.updateTitle, {
      title,
      status_date: date,
    });
    yield put(updateScheduleTitle(date, title));
    yield put(
      showAlert('Judul jadwal masak berhasil diubah.', 'Berhasil', {
        label: 'Jadwal Saya',
        target: 'MySchedule',
      }),
    );
  } catch (err) {
    yield put(responseError(err, 'Error update title schedule'));
  } finally {
    yield put(setLoadingTitle(false));
  }
}

/**
 * Init update schedule status
 */
export function* initUpdateScheduleStatus() {
  yield put(setLoadingStatus(true));

  try {
    const date = yield select(makeSelectDate());
    const status = yield select(makeSelectStatus());
    yield call(myScheduleService.updateStatus, {
      status,
      status_date: date,
    });
    yield put(updateScheduleStatus(date, status));
    yield put(
      showAlert('Status jadwal masak berhasil diubah.', 'Berhasil', {
        label: 'Jadwal Saya',
        target: 'MySchedule',
      }),
    );
  } catch (err) {
    yield put(responseError(err, 'Error update title schedule'));
  } finally {
    yield put(setLoadingStatus(false));
  }
}

function getFormData(data) {
  const { recipeOthers } = data;
  const formData = {};
  const recipes = [];
  if (recipeOthers && recipeOthers.count() > 0) {
    recipeOthers.forEach(item => {
      recipes.push(item.get('id'));
    });
  }
  formData.schedule_date = data.date;
  formData.schedule_time = data.time;
  formData.shift = data.shift;
  // formData.main_recipe = data.recipeMain ? data.recipeMain.get('id') : 0;
  formData.alt_recipe = recipes;

  return formData;
}

export default [
  takeLatest(CREATE_SCHEDULE, initCreateSchedule),
  takeLatest(UPDATE_SCHEDULE, initUpdateSchedule),
  takeLatest(UPDATE_SCHEDULE_TITLE, initUpdateScheduleTitle),
  takeLatest(UPDATE_SCHEDULE_STATUS, initUpdateScheduleStatus),
];
