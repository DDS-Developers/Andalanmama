/**
 * MyRecipe/saga.js
 */
import { takeLatest, put, call, select } from 'redux-saga/effects';
import recipeService from '../../services/api/recipe';
import bookmarkService from '../../services/api/bookmark';
import {
  LOAD_MY_RECIPES,
  LOAD_BOOKMARKS,
  LOAD_MORE_MY_RECIPES,
  LOAD_MORE_BOOKMARKS,
} from './constants';
import { responseError } from '../App/actions';
import { setItems, addItems, setLoading } from './actions';
import { makeSelectPaged } from './selectors';

/**
 * Init load my recipes
 */
export function* initLoadMyRecipes() {
  yield put(setLoading(true));
  try {
    const response = yield call(recipeService.userRecipes);
    yield put(setItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipes'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init load bookmarks
 */
export function* initLoadBookmarks() {
  yield put(setLoading(true));
  try {
    const response = yield call(bookmarkService.list);
    yield put(setItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipes'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init load more my recipes
 */
export function* initLoadMoreMyRecipes() {
  try {
    const page = yield select(makeSelectPaged());
    const response = yield call(recipeService.userRecipes, page);
    yield put(addItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get my recipes'));
  }
}

/**
 * Init load more bookmarks
 */
export function* initLoadMoreBookmarks() {
  try {
    const page = yield select(makeSelectPaged());
    const response = yield call(bookmarkService.list, page);
    yield put(addItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get bookmarks'));
  }
}

export default [
  takeLatest(LOAD_MY_RECIPES, initLoadMyRecipes),
  takeLatest(LOAD_BOOKMARKS, initLoadBookmarks),
  takeLatest(LOAD_MORE_MY_RECIPES, initLoadMoreMyRecipes),
  takeLatest(LOAD_MORE_BOOKMARKS, initLoadMoreBookmarks),
];
