import { takeLatest, put, select, delay, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

import settingService from '../../services/api/setting';
import { setLoading, responseError, showAlert } from '../App/actions';
import { LOAD_SETTINGS, UPDATE_SETTINGS } from './constants';
import { setSettings } from './actions';
import { makeSelectSettingNewsletter, makeSelectSettingNotification } from './selectors';

// import { resetData } from '../Form/actions';

/**
 * Init load settings
 */
export function* initLoadSettings() {
  yield put(setLoading(true));
  try {
    const response = yield call(settingService.getSettings);
    yield put(setSettings(response.data));
  } catch (err) {
    yield put(responseError(err, 'Failed load settings.'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init update settings
 */
export function* initUpdateSettings() {
  yield put(setLoading(true));
  let token = null;
  const notifSetting = yield select(makeSelectSettingNotification());
  const newsletterSetting = yield select(makeSelectSettingNewsletter());

  if (notifSetting) {
    token = yield call(AsyncStorage.getItem, 'fcmToken');
  }

  try {
    if (newsletterSetting) {
      yield call(subscribeNewsletter);
    } else {
      yield call(unsubscribeNewsletter);
    }

    yield call(settingService.updateSettings, {
      notification: notifSetting ? 1 : 0,
      newsletter: newsletterSetting ? 1 : 0,
      device_token: token,
    });
    yield delay(100);
    yield put(showAlert('Sukses mengubah pengaturan.', 'Sukses'));
  } catch (err) {
    console.log(err);
    yield put(responseError(err, 'Proses gagal, silahkan coba sekali lagi'));
  } finally {
    yield put(setLoading(false));
  }
}

const subscribeNewsletter = () => {
  messaging().subscribeToTopic('general');
};

const unsubscribeNewsletter = () => {
  messaging().unsubscribeFromTopic('general');
};

export default [
  takeLatest(LOAD_SETTINGS, initLoadSettings),
  takeLatest(UPDATE_SETTINGS, initUpdateSettings),
];
