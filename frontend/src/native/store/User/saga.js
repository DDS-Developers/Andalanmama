/**
 * User/saga.js
 */
import { takeLatest, put, select, call } from 'redux-saga/effects';
import { responseError } from '../App/actions';
import userService from '../../services/api/user';
import { makeSelectId } from './selectors';
import { LOAD_USER_PROFILE, LOAD_USER_RECIPE_BOOK, LOAD_USER_RECIPES } from './constants';
import {
  setUserProfile,
  setUserProfileLoading,
  setUserRecipeBook,
  setUserRecipeBookLoading,
  setUserRecipes,
  setUserRecipesLoading,
} from './actions';

/**
 * Init load user
 */
export function* initLoadUser() {
  const id = yield select(makeSelectId());
  yield put(setUserProfileLoading(true));
  try {
    const response = yield call(userService.userPublicProfile, id);
    yield put(setUserProfile(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get user'));
  } finally {
    yield put(setUserProfileLoading(false));
  }
}

/**
 * Init load Recipe Book
 */
export function* initLoadUserRecipeBook() {
  const id = yield select(makeSelectId());
  yield put(setUserRecipeBookLoading(true));
  try {
    const response = yield call(userService.userPublicRecipeBook, id);
    yield put(setUserRecipeBook(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get user recipe book'));
  } finally {
    yield put(setUserRecipeBookLoading(false));
  }
}

/**
 * Init load user recipes
 */
export function* initLoadUserRecipes() {
  const id = yield select(makeSelectId());
  yield put(setUserRecipesLoading(true));
  try {
    const response = yield call(userService.userPublicRecipes, id);
    yield put(setUserRecipes(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get user recipes'));
  } finally {
    yield put(setUserRecipesLoading(false));
  }
}

export default [
  takeLatest(LOAD_USER_PROFILE, initLoadUser),
  takeLatest(LOAD_USER_RECIPE_BOOK, initLoadUserRecipeBook),
  takeLatest(LOAD_USER_RECIPES, initLoadUserRecipes),
];
