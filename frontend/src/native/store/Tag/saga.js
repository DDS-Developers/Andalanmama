/**
 * store/Tag/saga.js
 */
import { takeLatest, put, select, call } from 'redux-saga/effects';
import tagService from '../../services/api/tag';
import { LOAD_TAGS } from './constants';
import { setLoading as setAppLoading, responseError } from '../App/actions';
import { makeSelectSilent } from './selectors';
import { setLoading, setTags } from './actions';

/**
 * Init load tags
 */
export function* initLoadTags() {
  const silent = yield select(makeSelectSilent());
  if (silent) {
    yield put(setLoading(true));
    yield put(setAppLoading(true));
  }
  try {
    const response = yield call(tagService.all);
    yield put(setTags(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get tags'));
  } finally {
    if (silent) {
      yield put(setLoading(true));
      yield put(setAppLoading(true));
    }
  }
}

export default [takeLatest(LOAD_TAGS, initLoadTags)];
