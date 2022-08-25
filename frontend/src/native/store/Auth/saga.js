/**
 * Auth/saga.js
 */
import { takeLatest, put, delay, select, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import { Http } from '../../services/http';
import authService from '../../services/api/auth';
import authHelpers from '../../helpers/Auth';
import * as NavigationService from '../../helpers/NavigationService';
import Debugger from '../../helpers/Debugger';

// import { setLoading, showAlert, responseError, dialogDebugging } from '../App/actions';
import { setLoading, showAlert, responseError } from '../App/actions';
import { resetData, checkInputErrors } from '../Form/actions';
import { makeSelectFormData, makeSelectInputErrorCount } from '../Form/selectors';

import {
  LOAD_AUTH,
  RESET_AUTH,
  DO_LOGIN,
  DO_LOGIN_GOOGLE,
  DO_LOGIN_FACEBOOK,
  DO_LOGOUT,
  DO_REGISTER,
  DO_FORGOT_PASSWORD,
  DO_RESET_PASSWORD,
  DO_VERIFY,
  DO_CHANGE_PASSWORD,
  LOGIN_TYPE_FACEBOOK,
  LOGIN_TYPE_GOOGLE,
} from './constants';
import { setAuth, setRedirect } from './actions';
import { makeSelectRedirect, makeSelectLoginType } from './selectors';

const AUTH_DATA = 'AUTH_DATA';

GoogleSignin.configure({
  response_type: 'code',
  webClientId: '791853939343-dc05eo7si704d7sip13fohgitrvjm275.apps.googleusercontent.com',
  offlineAccess: true,
  forceConsentPrompt: true,
});

/**
 * Init load auth
 */
export function* initLoadAuth() {
  yield put(setLoading(true));
  try {
    yield delay(100);
    const auth = yield call(AsyncStorage.getItem, AUTH_DATA);
    if (auth) {
      yield put(setAuth(JSON.parse(auth)));
    }
  } catch (err) {
    yield put(responseError(err, 'Error get authentication data', 'System Error'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init do login
 */
export function* initDoLogin() {
  yield put(checkInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount > 0) {
    yield put(showAlert('Data not completed.', 'Errors'));
  } else {
    yield put(setLoading(true));
    const formData = yield select(makeSelectFormData());
    const redirect = yield select(makeSelectRedirect());

    try {
      const response = yield call(authService.login, {
        email: formData.get('email'),
        password: formData.get('password'),
      });
      yield call(AsyncStorage.setItem, AUTH_DATA, JSON.stringify(response.data));
      yield call(authHelpers.setUserData, response.data);
      yield put(setAuth(response.data));
      yield call(Http.setupToken);
      yield put(resetData());
      if (redirect) {
        yield call(NavigationService.redirect, redirect);
      } else {
        yield call(NavigationService.navigate, 'MyAccount');
      }
      yield put(setRedirect(''));
    } catch (err) {
      yield put(responseError(err, 'Anda belum terdaftar'));
    } finally {
      yield put(setLoading(false));
    }
  }
}

/**
 * Init do login google
 */
export function* initDoLoginGoogle() {
  const redirect = yield select(makeSelectRedirect());

  try {
    yield call(GoogleSignin.hasPlayServices);
    const userInfo = yield call(GoogleSignin.signIn);
    yield put(setLoading(true));
    const response = yield call(authService.socialAuthenticate, {
      type: 'google',
      email: userInfo.user.email,
      name: userInfo.user.name,
    });
    Debugger('success login google');
    Debugger(response);
    yield call(AsyncStorage.setItem, AUTH_DATA, JSON.stringify(response.data));
    yield call(authHelpers.setUserData, response.data);
    yield put(setAuth(response.data));
    yield call(Http.setupToken);
    yield put(resetData());
    yield put(setLoading(false));

    if (redirect) {
        yield call(NavigationService.redirect, redirect);
    } else {
      yield call(NavigationService.navigate, 'MyAccount');
    }
    yield put(setRedirect(''));
  } catch (error) {
    Debugger('Error google login');
    Debugger(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      Debugger('SIGN_IN_CANCELLED');
      // yield put(showAlert('SIGN_IN_CANCELLED', 'Errors'));
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Debugger('IN_PROGRESS');
      yield put(showAlert('IN_PROGRESS', 'Errors'));
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Debugger('PLAY_SERVICES_NOT_AVAILABLE');
      yield put(showAlert('PLAY_SERVICES_NOT_AVAILABLE', 'Errors'));
      // play services not available or outdated
    } else {
      // yield put(showAlert(error, 'Errors'));
      // yield put(dialogDebugging(error));
      yield put(responseError(error, error));
    }
  }
}

/**
 * Init do login facebook
 */
export function* initDoLoginFacebook() {
  const redirect = yield select(makeSelectRedirect());

  try {
    const result = yield call(LoginManager.logInWithPermissions, ['public_profile', 'email']);
    if (result.isCancelled) {
      Debugger('Login cancelled');
    } else {
      const userInfo = yield call(AccessToken.getCurrentAccessToken);
      yield put(setLoading(true));
      const response = yield call(authService.socialAuthenticate, {
        code: userInfo.accessToken.toString(),
        type: 'facebook',
      });
      yield call(AsyncStorage.setItem, AUTH_DATA, JSON.stringify(response.data));
      yield call(authHelpers.setUserData, response.data);
      yield put(setAuth(response.data));
      yield call(Http.setupToken);
      yield put(resetData());
      yield put(setLoading(false));
      if (redirect) {
        yield call(NavigationService.redirect, redirect);
      } else {
        yield call(NavigationService.navigate, 'MyAccount');
      }
      yield put(setRedirect(''));
    }
  } catch (error) {
    // yield put(dialogDebugging(error));
    yield put(responseError(error, error));
  }
}

/**
 * Init do logout
 */
export function* initDoLogout() {
  const loginType = yield select(makeSelectLoginType());
  yield put(setLoading(true));
  try {
    // console.log(loginType);
    if (loginType === LOGIN_TYPE_FACEBOOK) {
      // console.log('logout_facebook');
      yield call(LoginManager.logOut);
    } else if (loginType === LOGIN_TYPE_GOOGLE) {
      // console.log('logout_google');
      yield call(GoogleSignin.revokeAccess);
      yield call(GoogleSignin.signOut);
    }

    yield call(authHelpers.logout);
    yield call(AsyncStorage.removeItem, AUTH_DATA);
    yield call(Http.resetToken);
    // yield put(showAlert('System work correctly', 'System is Good'));
  } catch (err) {
    yield put(responseError(err, 'Logout error'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init Reset auth
 */
export function* initResetAuth() {
  yield call(authHelpers.logout);
  yield call(Http.resetToken);
  yield call(NavigationService.navigate, 'Login');
}

/**
 * Init do register
 */
export function* initDoRegister() {
  yield put(checkInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount > 1) {
    yield put(showAlert('Data not completed.', 'Errors'));
  } else {
    yield put(setLoading(true));
    const formData = yield select(makeSelectFormData());
    const redirect = yield select(makeSelectRedirect());

    try {
      const response = yield call(authService.register, {
        fullname: formData.get('fullname'),
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        cf_password: formData.get('passwordConfirmation'),
      });

      yield call(authHelpers.setUserData, response.data);
      yield put(setAuth(response.data));
      // yield put(AsyncStorage.setItem(AUTH_DATA), response.data);
      yield call(AsyncStorage.setItem, AUTH_DATA, JSON.stringify(response.data));
      yield call(Http.setupToken);
      yield put(
        showAlert('Registrasi berhasil.', 'Berhasil', {
          label: 'Continue',
          target: redirect || 'Explore',
        }),
      );
      yield put(resetData());
      yield put(setRedirect(''));
    } catch (err) {
      try {
        const errors = err.response?.data?.errors || [];
        const resMessage = [];

        for (let item of errors) {
          resMessage.push(item.message);
        }

        yield put(showAlert(resMessage.join('\n'), 'Errors'));
      } catch (err) {
        yield put(responseError(err, 'Failed register.'));
      }
    } finally {
      yield put(setLoading(false));
    }
  }
}

/**
 * Init do forgot password
 */
export function* initDoForgotPassword() {
  yield put(checkInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount > 0) {
    yield put(showAlert('Data not completed.', 'Errors'));
  } else {
    yield put(setLoading(true));
    const formData = yield select(makeSelectFormData());
    try {
      yield call(authService.forgotPassword, {
        email: formData.get('email'),
      });
      yield delay(100);
      yield put(
        showAlert('Berhasil klik lanjutkan', 'Berhasil', {
          label: 'Continue',
          target: 'ResetPassword',
        }),
      );
    } catch (err) {
      yield put(responseError(err, 'Proses gagal, silahkan coba sekali lagi'));
    } finally {
      yield put(resetData());
      yield put(setLoading(false));
    }
  }
}

/**
 * Init do reset password
 */
export function* initDoResetPassword() {
  yield put(checkInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount > 0) {
    yield put(showAlert('Data not completed.', 'Errors'));
  } else {
    yield put(setLoading(true));
    const formData = yield select(makeSelectFormData());

    try {
      yield call(authService.resetPassword, {
        reset_code: formData.get('code'),
        password: formData.get('password'),
        cf_password: formData.get('passwordConfirmation'),
      });
      yield delay(100);
      yield put(
        showAlert('Password berhasil diubah.', 'Berhasil', {
          label: 'Masuk',
          target: 'Login',
        }),
      );
    } catch (err) {
      yield put(responseError(err, 'Proses gagal, silahkan coba sekali lagi'));
    } finally {
      yield put(resetData());
      yield put(setLoading(false));
    }
  }
}

/**
 * Init do change password
 */
export function* initDoChangePassword() {
  yield put(checkInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount > 0) {
    yield put(showAlert('Data not completed.', 'Errors'));
  } else {
    yield put(setLoading(true));
    const formData = yield select(makeSelectFormData());

    try {
      yield call(authService.changePassword, {
        old_password: formData.get('currentPassword'),
        new_password: formData.get('password'),
        cf_password: formData.get('passwordConfirmation'),
      });
      yield delay(100);
      yield put(
        showAlert('Password berhasil diubah.', 'Berhasil', {
          label: 'Masuk',
          target: 'Login',
        }),
      );
    } catch (err) {
      yield put(responseError(err, 'Proses gagal, silahkan coba sekali lagi'));
    } finally {
      yield put(resetData());
      yield put(setLoading(false));
    }
  }
}

/**
 * Init do verify
 */
export function* initDoVerify() {
  yield put(checkInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount > 0) {
    yield put(showAlert('Data not completed.', 'Errors'));
  } else {
    yield put(setLoading(true));
    const formData = yield select(makeSelectFormData());

    try {
      yield call(authService.verify, {
        code: formData.get('code'),
      });
      yield delay(100);
      yield put(
        showAlert('Akun berhasil diaktifkan.', 'Berhasil', {
          label: 'Masuk',
          target: 'Login',
        }),
      );
    } catch (err) {
      yield put(responseError(err, 'Failed register.'));
    } finally {
      yield put(resetData());
      yield put(setLoading(false));
    }
  }
}

export default [
  takeLatest(LOAD_AUTH, initLoadAuth),
  takeLatest(RESET_AUTH, initResetAuth),
  takeLatest(DO_LOGIN, initDoLogin),
  takeLatest(DO_LOGIN_GOOGLE, initDoLoginGoogle),
  takeLatest(DO_LOGIN_FACEBOOK, initDoLoginFacebook),
  takeLatest(DO_REGISTER, initDoRegister),
  takeLatest(DO_LOGOUT, initDoLogout),
  takeLatest(DO_FORGOT_PASSWORD, initDoForgotPassword),
  takeLatest(DO_RESET_PASSWORD, initDoResetPassword),
  takeLatest(DO_CHANGE_PASSWORD, initDoChangePassword),
  takeLatest(DO_VERIFY, initDoVerify),
];
