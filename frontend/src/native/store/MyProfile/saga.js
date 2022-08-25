/**
 * Auth/saga.js
 */
import { takeLatest, put, delay, select, call } from 'redux-saga/effects';

import myProfileService from '../../services/api/myProfile';

import { setLoading, showAlert, responseError } from '../App/actions';
import { checkInputErrors, setFormData } from '../Form/actions';
import { makeSelectFormData, makeSelectInputErrorCount } from '../Form/selectors';
// import Debugger from '../../helpers/Debugger';

import {
  UPDATE_PROFILE,
  LOAD_PROFILE,
  GET_PROFILE,
  LOAD_PROFILE_ACCOUNT,
  ADD_SHARE_POINT,
} from './constants';
import {
  setLoading as setProfileLoading,
  setProfile,
  setProfileAccount,
  updatePoints,
} from './actions';

/**
 * Init load profile
 */
export function* initLoadProfile() {
  yield put(setProfileLoading(true));
  try {
    const response = yield call(myProfileService.profile);
    yield delay(100);
    yield put(setFormData(response.data));
  } catch (err) {
    yield put(responseError(err, 'Failed load profile.'));
  } finally {
    yield put(setProfileLoading(false));
  }
}

/**
 * Init load profile account
 */
export function* initLoadProfileAccount() {
  try {
    const response = yield call(myProfileService.profile);
    yield put(setProfileAccount(response.data));
  } catch (err) {
    yield put(responseError(err, 'Failed load profile.'));
  }
}

/**
 * Init Get profile
 */
export function* initGetProfile() {
  try {
    const response = yield call(myProfileService.profile);
    yield delay(100);
    yield put(setProfile(response.data));
  } catch (err) {
    yield put(responseError(err, 'Failed load profile.'));
  }
}

/**
 * Init Get profile
 */
export function* initAddSharePoint() {
  try {
    const response = yield call(myProfileService.addSharePoint);
    yield delay(100);
    yield put(updatePoints(response.data));
  } catch (err) {
    // console.log(err);
  }
}

/**
 * Init update profile
 */
export function* initUpdateProfile() {
  yield put(checkInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount > 0) {
    yield put(showAlert('Data not completed.', 'Errors'));
  } else {
    yield put(setLoading(true));
    const formData = yield select(makeSelectFormData());
    try {
      // yield call(myProfileService.updateProfile, formData.get('id'), formData);
      yield call(myProfileService.updateProfile, formData.get('id'), formData);
      yield delay(100);
      yield put(showAlert('Sukses edit profil.', 'Sukses'));
      
      try {
        const response = yield call(myProfileService.profile);
        yield put(setProfileAccount(response.data));
      } catch (err) {
        yield put(responseError(err, 'Failed load profile.'));
      }

    } catch (err) {
      yield put(responseError(err, 'Proses gagal, silahkan coba sekali lagi'));
    } finally {
      yield put(setLoading(false));
    }
  }
}

export default [
  takeLatest(LOAD_PROFILE, initLoadProfile),
  takeLatest(GET_PROFILE, initGetProfile),
  takeLatest(UPDATE_PROFILE, initUpdateProfile),
  takeLatest(LOAD_PROFILE_ACCOUNT, initLoadProfileAccount),
  takeLatest(ADD_SHARE_POINT, initAddSharePoint),
];
