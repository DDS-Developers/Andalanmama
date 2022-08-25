/**
 * Recipe/saga.js
 */
import { takeLatest, put, select, call } from 'redux-saga/effects';
import { showAlert, responseError } from '../App/actions';
import recipeService from '../../services/api/recipe';
import commentService from '../../services/api/comment';
import { addItemPropCount } from '../Explore/actions';

import { updatePoints } from '../MyProfile/actions';
import { LOAD_RECIPE, ADD_LIKE, REMOVE_LIKE, DELETE_COMMENT, UPDATE_COMMENT } from './constants';
import {
  makeSelectId,
  makeSelectRestricted,
  makeSelectRecipe,
  makeSelectLikeCount,
  makeSelectCommentId,
} from './selectors';
import {
  setRecipe,
  setLoading as setDetailLoading,
  setLiked,
  setLikeCount,
  setRecipeComments,
  removeRecipeComment,
  setUpdateComment,
} from './actions';

import { clearEditData, checkAllInputErrors } from '../Comments/actions';
import { makeSelectBodyComment, makeSelectInputErrorCount } from '../Comments/selectors';

/**
 * Init load recipe
 */
export function* initLoadRecipe() {
  const id = yield select(makeSelectId());
  const restricted = yield select(makeSelectRestricted());
  yield put(setDetailLoading(true));
  try {
    const response = yield call(
      restricted ? recipeService.myRecipeCreateGet : recipeService.detail,
      id,
    );
    yield put(setRecipe(response.data));
    yield put(setLiked(response.data.liked));
    yield put(setLikeCount(response.data.like_count));
    yield put(setRecipeComments(response.data.commentlist));
  } catch (err) {
    yield put(responseError(err, 'Error get recipe'));
  } finally {
    yield put(setDetailLoading(false));
  }
}

/**
 * Init add like
 */
export function* initAddlike() {
  try {
    const recipe = yield select(makeSelectRecipe());
    let count = yield select(makeSelectLikeCount());
    const response = yield call(recipeService.like, recipe.get('id'));
    yield put(updatePoints(response.data));
    yield put(setLikeCount((count += 1)));
    yield put(setLiked(true));
    yield put(addItemPropCount(recipe.get('id'), 'like_count', 1));
    // yield put(showAlert('Success add like', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menambah like'));
  }
}

/**
 * Init remove like
 */
export function* initRemovelike() {
  try {
    const recipe = yield select(makeSelectRecipe());
    let count = yield select(makeSelectLikeCount());
    yield call(recipeService.unlike, recipe.get('id'));
    yield put(setLikeCount((count -= 1)));
    yield put(setLiked(false));
    yield put(addItemPropCount(recipe.get('id'), 'like_count', -1));
    // yield put(showAlert('Success remove like', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menghapus like'));
  }
}

/**
 * Init delete comment
 */
export function* initDeleteComment() {
  yield put(setDetailLoading(true));
  try {
    const recipe = yield select(makeSelectRecipe());
    const id = yield select(makeSelectCommentId());
    yield call(commentService.delete, id);
    yield put(removeRecipeComment(id));
    yield put(addItemPropCount(recipe.get('id'), 'comment_count', -1));
    yield put(showAlert('Success delete comment', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menghapus komentar'));
  } finally {
    yield put(setDetailLoading(false));
  }
}

/**
 * Init update comment
 */
export function* initUpdateComment() {
  yield put(checkAllInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount > 0) {
    yield put(showAlert('Data not completed.', 'Errors'));
  } else {
    yield put(setDetailLoading(true));
    const id = yield select(makeSelectCommentId());
    const bodyComment = yield select(makeSelectBodyComment());

    try {
      const response = yield call(commentService.update, id, {
        body: bodyComment,
      });
      yield put(setUpdateComment(response.data));
      yield put(clearEditData());
      yield put(showAlert('Success Update comment', 'Berhasil'));
    } catch (err) {
      yield put(responseError(err, 'Gagal merubah komentar'));
    } finally {
      yield put(setDetailLoading(false));
    }
  }
}

export default [
  takeLatest(LOAD_RECIPE, initLoadRecipe),
  takeLatest(ADD_LIKE, initAddlike),
  takeLatest(REMOVE_LIKE, initRemovelike),
  takeLatest(DELETE_COMMENT, initDeleteComment),
  takeLatest(UPDATE_COMMENT, initUpdateComment),
];
