import { takeLatest, put, select, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { LOAD_SETTINGS, UPDATE_SETTINGS, SETTING_NAME } from './constants';
import { responseError, showAlert } from '../App/actions';
import { setLoading, setSettings } from './actions';
import { makeSelectFormData } from './selectors';

// import { resetData } from '../Form/actions';

export function* initLoadSettings() {
  yield put(setLoading(true));
  try {
    const setting = yield call(AsyncStorage.getItem, SETTING_NAME);
    if (setting) {
      yield put(setSettings(JSON.parse(setting)));
    }
  } catch (err) {
    yield put(responseError(err, 'Error get setting'));
  } finally {
    yield put(setLoading(false));
  }
}

export function* initUpdateSetting() {
  yield put(setLoading(true));
  const formData = yield select(makeSelectFormData());
  try {
    yield call(AsyncStorage.setItem, SETTING_NAME, JSON.stringify(formData));
    yield put(setSettings(formData));
    yield put(showAlert('Success save setting', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal merubah pengaturan'));
  } finally {
    yield put(setLoading(false));
  }
}

export default [
  takeLatest(LOAD_SETTINGS, initLoadSettings),
  takeLatest(UPDATE_SETTINGS, initUpdateSetting),
];
