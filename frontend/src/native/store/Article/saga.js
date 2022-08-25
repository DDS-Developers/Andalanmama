/**
 * Article/saga.js
 */
import { takeLatest, put, call } from 'redux-saga/effects';
import { responseError } from '../App/actions';
import articleServices from '../../services/api/article';
import { LOAD_ARTICLE_HIGHLIGHT, LOAD_ARTICLE_LATEST } from './constants';
import {
  setArticleHighlight,
  setLoadingHighlight,
  setArticleLatest,
  setLoadingLatest,
} from './actions';

/**
 * Init load Article Highlight
 */
export function* initLoadArticleHighlight() {
  yield put(setLoadingHighlight(true));
  try {
    const response = yield call(articleServices.getArticleHighlight);
    yield put(setArticleHighlight(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get highlight artile'));
  } finally {
    yield put(setLoadingHighlight(false));
  }
}

/**
 * Init load Article Latest
 */
export function* initLoadArticleLatest(data) {
  yield put(setLoadingLatest(true));
  try {
    const response = yield call(articleServices.getArticleLatest, data.page);
    yield put(setArticleLatest(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get latest article'));
  } finally {
    yield put(setLoadingLatest(false));
  }
}

export default [
  takeLatest(LOAD_ARTICLE_HIGHLIGHT, initLoadArticleHighlight),
  takeLatest(LOAD_ARTICLE_LATEST, initLoadArticleLatest),
];
