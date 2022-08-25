/**
 * MyRecipe/saga.js
 */
import { takeLatest, put, select, call } from 'redux-saga/effects';
import myRecipeService from '../../services/api/recipe';
import * as NavigationService from '../../helpers/NavigationService';
import {
  LOAD_RECIPES,
  LOAD_MORE_RECIPES,
  LOAD_RECIPE,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from './constants';
import { setLoading as setAppLoading, showAlert, responseError } from '../App/actions';
import {
  setLoading,
  setItems,
  removeItem,
  addItem,
  updateItem,
  addItems,
} from '../MyRecipeList/actions';
import { makeSelectPaged } from '../MyRecipeList/selectors';
import {
  makeSelectId,
  makeSelectSaveType,
  makeSelectFormData,
  makeSelectFilterStatus,
} from './selectors';
import { setRecipe, setLoading as setManageLoading } from './actions';
import Debugger from '../../helpers/Debugger';

/**
 * Init load recipes
 */
export function* initLoadRecipes() {
  yield put(setLoading(true));
  const status = yield select(makeSelectFilterStatus());
  try {
    const response = yield call(myRecipeService.myRecipe, status);
    yield put(setItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipes'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init load more recipes
 */
export function* initLoadMoreRecipes() {
  const status = yield select(makeSelectFilterStatus());
  const page = yield select(makeSelectPaged());
  try {
    const response = yield call(myRecipeService.myRecipe, status, page);
    yield put(addItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipes'));
  }
}

/**
 * Init load recipe
 */
export function* initLoadRecipe() {
  yield put(setManageLoading(true));
  try {
    const id = yield select(makeSelectId());
    const response = yield call(myRecipeService.myRecipeCreateGet, id);
    Debugger(response);
    yield put(setRecipe(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipe'));
  } finally {
    yield put(setManageLoading(false));
  }
}

/**
 * Init create recipe
 */
export function* initCreateRecipe() {
  yield put(setManageLoading(true));

  try {
    const saveType = yield select(makeSelectSaveType());
    const formData = yield select(makeSelectFormData());
    const apiData = fixApiData(formData);
    const response = yield call(myRecipeService.myRecipeCreate, apiData);
    yield put(addItem(response.data));
    if (saveType === 'normal') {
      yield call(NavigationService.navigate, 'MyRecipe');
      yield put(showAlert('Success create recipe', 'Berhasil'));
    } else if (saveType === 'publish') {
      yield put(
        showAlert('Resep menunggu approval untuk dipublikasikan, cek status resep', 'Berhasil', {
          label: 'Resep Saya',
          target: 'MyRecipe',
        }),
      );
    }
  } catch (err) {
    yield put(responseError(err, 'Error create recipe'));
  } finally {
    yield put(setManageLoading(false));
  }
}

/**
 * Init update recipe
 */
export function* initUpdateRecipe() {
  yield put(setManageLoading(true));
  try {
    const saveType = yield select(makeSelectSaveType());
    const id = yield select(makeSelectId());
    const formData = yield select(makeSelectFormData());
    const apiData = fixApiData(formData);
    const response = yield call(myRecipeService.myRecipeUpdate, id, apiData);
    yield put(setRecipe(response.data));
    yield put(updateItem(id, response.data));

    if (saveType === 'normal') {
      yield call(NavigationService.navigate, 'MyRecipe');
      yield put(showAlert('Success update recipe', 'Berhasil'));
    } else if (saveType === 'publish') {
      yield put(
        showAlert('Resep menunggu approval untuk dipublikasikan, cek status resep', 'Berhasil', {
          label: 'Resep Saya',
          target: 'MyRecipe',
        }),
      );
    }
  } catch (err) {
    yield put(responseError(err, 'Error update recipe'));
  } finally {
    yield put(setManageLoading(false));
  }
}

/**
 * Init delete recipe
 */
export function* initDeleteRecipe() {
  yield put(setAppLoading(true));
  try {
    const id = yield select(makeSelectId());
    yield call(myRecipeService.myRecipeRemove, id);
    yield put(removeItem(id));
    yield put(showAlert('Success delete recipe', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menghapus resep'));
  } finally {
    yield put(setAppLoading(false));
  }
}

export default [
  takeLatest(LOAD_RECIPES, initLoadRecipes),
  takeLatest(LOAD_MORE_RECIPES, initLoadMoreRecipes),
  takeLatest(LOAD_RECIPE, initLoadRecipe),
  takeLatest(CREATE_RECIPE, initCreateRecipe),
  takeLatest(UPDATE_RECIPE, initUpdateRecipe),
  takeLatest(DELETE_RECIPE, initDeleteRecipe),
];

function fixApiData(data) {
  return data;
}
