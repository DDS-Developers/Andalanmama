/**
 * MyRecipe/saga.js
 */
import { takeLatest, put, delay, select } from 'redux-saga/effects';
import {
  LOAD_RECIPES,
  LOAD_RECIPE,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from './constants';
import { setLoading as setAppLoading, showAlert } from '../App/actions';
import { setLoading } from '../List/actions';
import { checkInputErrors } from './actions';
import { makeSelectInputErrorCount } from './selectors';

/**
 * Init load recipes
 */
export function* initLoadRecipes() {
  yield put(setLoading(true));
  try {
    yield delay(4000);
  } catch (err) {
    yield put(showAlert('Error get recipes', 'System Error'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init load recipe
 */
export function* initLoadRecipe() {
  yield put(setAppLoading(true));
  try {
    yield delay(4000);
  } catch (err) {
    yield put(showAlert('Error get recipe', 'System Error'));
  } finally {
    yield put(setAppLoading(false));
  }
}

/**
 * Init create recipe
 */
export function* initCreateRecipe() {
  yield put(checkInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount < 1) {
    yield put(setAppLoading(true));
    try {
      yield delay(4000);
      yield put(showAlert('Success create recipe', 'Berhasil'));
    } catch (err) {
      yield put(showAlert('Error create recipe', 'System Error'));
    } finally {
      yield put(setAppLoading(false));
    }
  }
}

/**
 * Init update recipe
 */
export function* initUpdateRecipe() {
  yield put(checkInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount < 1) {
    yield put(setAppLoading(true));
    try {
      yield delay(4000);
      yield put(showAlert('Success update recipe', 'Berhasil'));
    } catch (err) {
      yield put(showAlert('Error update recipe', 'System Error'));
    } finally {
      yield put(setAppLoading(false));
    }
  }
}

/**
 * Init delete recipe
 */
export function* initDeleteRecipe() {
  yield put(setAppLoading(true));
  try {
    yield delay(4000);
    yield put(showAlert('Success delete recipe', 'Berhasil'));
  } catch (err) {
    yield put(showAlert('Gagal menghapus resep', 'System Error'));
  } finally {
    yield put(setAppLoading(false));
  }
}

export default [
  takeLatest(LOAD_RECIPES, initLoadRecipes),
  takeLatest(LOAD_RECIPE, initLoadRecipe),
  takeLatest(CREATE_RECIPE, initCreateRecipe),
  takeLatest(UPDATE_RECIPE, initUpdateRecipe),
  takeLatest(DELETE_RECIPE, initDeleteRecipe),
];
