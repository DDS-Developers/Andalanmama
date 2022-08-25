/**
 * store/Search/saga.js
 */
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { responseError } from '../App/actions';
import recipeServices from '../../services/api/recipe';
import collectionServices from '../../services/api/collection';
import userServices from '../../services/api/user';
import modelHelpers from '../../helpers/Model';
import { LOAD_RECIPES, LOAD_BOOKS, LOAD_ACCOUNTS } from './constants';
import { makeSelectKeyword } from './selectors';

import {
  setRecipes,
  setBooks,
  setAccounts,
  setRecipeLoading,
  setBookLoading,
  setAccountLoading,
} from './actions';

/**
 * Init load recipes
 */
export function* initLoadRecipes() {
  yield put(setRecipeLoading(true));
  const keyword = yield select(makeSelectKeyword());
  try {
    const response = yield call(recipeServices.search, keyword);
    yield put(setRecipes(modelHelpers.getResponseList(response)));
  } catch (err) {
    yield put(responseError(err, 'Error get recipes'));
  } finally {
    yield put(setRecipeLoading(false));
  }
}

/**
 * Init load books
 */
export function* initLoadBooks() {
  yield put(setBookLoading(true));
  const keyword = yield select(makeSelectKeyword());
  try {
    const response = yield call(collectionServices.search, keyword);
    yield put(setBooks(modelHelpers.getResponseList(response)));
  } catch (err) {
    yield put(responseError(err, 'Error get recipe books'));
  } finally {
    yield put(setBookLoading(false));
  }
}

/**
 * Init load accounts
 */
export function* initLoadAccounts() {
  yield put(setAccountLoading(true));
  const keyword = yield select(makeSelectKeyword());
  try {
    const response = yield call(userServices.search, keyword);
    yield put(setAccounts(modelHelpers.getResponseList(response)));
  } catch (err) {
    yield put(responseError(err, 'Error get accounts'));
  } finally {
    yield put(setAccountLoading(false));
  }
}

export default [
  takeLatest(LOAD_RECIPES, initLoadRecipes),
  takeLatest(LOAD_BOOKS, initLoadBooks),
  takeLatest(LOAD_ACCOUNTS, initLoadAccounts),
];
