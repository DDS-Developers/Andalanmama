/**
 * RecipeBook/saga.js
 */
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { responseError } from '../App/actions';
import recipeServices from '../../services/api/recipe';
import tagServices from '../../services/api/tag';
import modelHelpers from '../../helpers/Model';
import { setLoading as setListLoading, setItems } from '../List/actions';
import { LOAD_CATEGORIES, LOAD_RESULT, LOAD_POPULAR_CATEGORIES } from './constants';

import { setCategories, setLoading, setPopularCategories } from './actions';
import { makeSelectSelectedCategories } from './selectors';
// import Debugger from '../../helpers/Debugger';

/**
 * Init load categories
 */
export function* initLoadCategories() {
  try {
    const response = yield call(tagServices.all);
    yield put(setCategories(modelHelpers.getResponseData(response)));
  } catch (err) {
    // Debugger(err);
  }
}

/**
 * Init load popular categories
 */
export function* initLoadPopularCategories() {
  yield put(setLoading(true));
  try {
    const response = yield call(tagServices.popular);
    yield put(setPopularCategories(modelHelpers.getResponseData(response)));
  } catch (err) {
    // Debugger(err);
    yield put(responseError(err, 'Error get popular categories data'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init load result
 */
export function* initLoadResult() {
  yield put(setListLoading(true));
  try {
    const selected = yield select(makeSelectSelectedCategories());
    const categories = yield call(getCategories, selected);
    const response = yield call(recipeServices.filter, categories);
    yield put(setItems(modelHelpers.getResponseList(response)));
  } catch (err) {
    yield put(responseError(err, 'Error get recipes'));
  } finally {
    yield put(setListLoading(false));
  }
}

export default [
  takeLatest(LOAD_CATEGORIES, initLoadCategories),
  takeLatest(LOAD_POPULAR_CATEGORIES, initLoadPopularCategories),
  takeLatest(LOAD_RESULT, initLoadResult),
];

export function getCategories(data) {
  const categories = [];
  data.forEach(item => {
    categories.push(item.get('id'));
  });
  return categories;
}
