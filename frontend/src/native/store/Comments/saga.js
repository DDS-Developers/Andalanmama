/**
 * Recipe/saga.js
 */
import { takeLatest, put, select, delay, call } from 'redux-saga/effects';
import { setLoading as setAppLoading, showAlert, responseError } from '../App/actions';
import commentService from '../../services/api/comment';

import { addItemPropCount } from '../Explore/actions';
import { addRecipeComment, removeRecipeComment } from '../Recipe/actions';
import { updatePoints } from '../MyProfile/actions';
import {
  LOAD_COMMENTS,
  LOAD_NEXT_PAGE,
  LOAD_PREVIOUS_PAGE,
  DELETE_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
} from './constants';
import {
  makeSelectId,
  makeSelectPage,
  makeSelectCommentId,
  makeSelectBodyComment,
  makeSelectInputErrorCount,
} from './selectors';
import {
  setComments,
  setLoadingComments,
  removeComment,
  clearEditData,
  addComment,
  setUpdateComment,
  checkAllInputErrors,
} from './actions';
// import Debugger from '../../helpers/Debugger';

/**
 * Init load recipe
 */
export function* initLoadComments() {
  const id = yield select(makeSelectId());
  yield put(setLoadingComments(true));
  try {
    yield delay(100);
    const response = yield call(commentService.getComment, id);
    yield put(setComments(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipe'));
  } finally {
    yield put(setLoadingComments(false));
  }
}

/**
 * Init load next page
 */
export function* initLoadNextPage() {
  const id = yield select(makeSelectId());
  const paged = yield select(makeSelectPage());
  const nextPaged = paged + 1;
  yield put(setLoadingComments(true));
  try {
    yield delay(100);
    const response = yield call(commentService.getComment, id, nextPaged);
    yield put(setComments(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipe'));
  } finally {
    yield put(setLoadingComments(false));
  }
}

/**
 * Init load previous page
 */
export function* initLoadPreviousPage() {
  const id = yield select(makeSelectId());
  const paged = yield select(makeSelectPage());
  const prevPaged = paged - 1;
  yield put(setLoadingComments(true));
  try {
    yield delay(100);
    const response = yield call(commentService.getComment, id, prevPaged);
    yield put(setComments(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipe'));
  } finally {
    yield put(setLoadingComments(false));
  }
}

/**
 * Init delete message
 */
export function* initDeleteComment() {
  yield put(setAppLoading(true));
  try {
    const id = yield select(makeSelectCommentId());
    const recipeId = yield select(makeSelectId());
    yield call(commentService.delete, id);
    yield put(removeComment(id));
    yield put(removeRecipeComment(id));
    yield put(addItemPropCount(recipeId, 'comment_count', -1));
    yield put(showAlert('Success delete comment', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menghapus komentar'));
  } finally {
    yield put(setAppLoading(false));
  }
}

/**
 * Init create comment
 */
export function* initCreateComment() {
  yield put(checkAllInputErrors());
  const errorsCount = yield select(makeSelectInputErrorCount());
  if (errorsCount > 0) {
    yield put(showAlert('Data not completed.', 'Errors'));
  } else {
    yield put(setAppLoading(true));
    const id = yield select(makeSelectId());
    const bodyComment = yield select(makeSelectBodyComment());
    try {
      const response = yield call(commentService.create, id, {
        body: bodyComment,
      });
      yield put(addComment(response.data));
      yield put(addRecipeComment(response.data));
      yield put(updatePoints(response.data));
      yield put(addItemPropCount(id, 'comment_count', 1));
      yield put(clearEditData());
      yield put(showAlert('Success create comment', 'Berhasil'));
    } catch (err) {
      yield put(responseError(err, 'Gagal membuat komentar'));
    } finally {
      yield put(setAppLoading(false));
    }
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
    yield put(setAppLoading(true));
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
      yield put(setAppLoading(false));
    }
  }
}

export default [
  takeLatest(LOAD_COMMENTS, initLoadComments),
  takeLatest(LOAD_NEXT_PAGE, initLoadNextPage),
  takeLatest(LOAD_PREVIOUS_PAGE, initLoadPreviousPage),
  takeLatest(DELETE_COMMENT, initDeleteComment),
  takeLatest(CREATE_COMMENT, initCreateComment),
  takeLatest(UPDATE_COMMENT, initUpdateComment),
];
