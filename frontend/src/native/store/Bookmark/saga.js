/**
 * Bookmark/saga.js
 */
import { takeLatest, put, call, select } from 'redux-saga/effects';

import bookmarkService from '../../services/api/bookmark';
import { responseError } from '../App/actions';
import {
  setLoading as setListLoading,
  setItems,
  removeItem,
  addItem,
  addItems,
} from '../BookmarkList/actions';
import { makeSelectPaged } from '../BookmarkList/selectors';
import { updatePoints } from '../MyProfile/actions';

import { LOAD_BOOKMARKS, LOAD_MORE_BOOKMARKS, ADD_BOOKMARK, REMOVE_BOOKMARK } from './constants';
import { setLoading as setBookmarkLoading, setMarked } from './actions';
import { makeSelectRecipeId, makeSelectRecipe } from './selectors';

/**
 * Init load bookmarks
 */
export function* initLoadBookmarks() {
  yield put(setListLoading(true));
  try {
    const response = yield call(bookmarkService.list);
    yield put(setItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get bookmarks'));
  } finally {
    yield put(setListLoading(false));
  }
}

/**
 * Init load more bookmarks
 */
export function* initLoadMoreBookmarks() {
  const page = yield select(makeSelectPaged());
  try {
    const response = yield call(bookmarkService.list, page);
    yield put(addItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get bookmarks'));
  }
}

/**
 * Init add bookmark
 */
export function* initAddBookmark() {
  yield put(setBookmarkLoading(true));
  try {
    const recipe = yield select(makeSelectRecipe());
    const response = yield call(bookmarkService.add, recipe.get('id'));
    yield put(updatePoints(response.data));
    yield put(addItem(recipe));
    yield put(setMarked(true));
    // yield put(showAlert('Success add bookmark', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menandai resep'));
  } finally {
    yield put(setBookmarkLoading(false));
  }
}

/**
 * Init remove bookmark
 */
export function* initRemoveBookmark() {
  yield put(setBookmarkLoading(true));
  try {
    const recipeId = yield select(makeSelectRecipeId());
    yield call(bookmarkService.remove, recipeId);
    yield put(removeItem(recipeId));
    yield put(setMarked(false));
    // yield put(showAlert('Success remove bookmark', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menandai resep'));
  } finally {
    yield put(setBookmarkLoading(false));
  }
}

export default [
  takeLatest(LOAD_BOOKMARKS, initLoadBookmarks),
  takeLatest(LOAD_MORE_BOOKMARKS, initLoadMoreBookmarks),
  takeLatest(ADD_BOOKMARK, initAddBookmark),
  takeLatest(REMOVE_BOOKMARK, initRemoveBookmark),
];
