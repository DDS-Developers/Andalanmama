/**
 * Community/saga.js
 */
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { responseError } from '../App/actions';
import communityServices from '../../services/api/community';
import {
  LOAD_COMMUNITY_HIGHLIGHT,
  LOAD_COMMUNITY_THREAD,
  LOAD_COMMUNITY_DETAIL,
  ADD_COMMUNITY_REPLY,
} from './constants';
import {
  setCommunityHighlight,
  setLoadingHighlight,
  setCommunityThread,
  setLoadingThread,
  setCommunityDetail,
  setLoadingDetail,
  setLoadingReply,
} from './actions';
import { makeSelectId, makeSelectReply } from './selectors';

/**
 * Init load Community Highlight
 */
export function* initLoadCommunityHighlight() {
  yield put(setLoadingHighlight(true));
  try {
    const response = yield call(communityServices.getCommunityHighlight);
    yield put(setCommunityHighlight(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get highlight community'));
  } finally {
    yield put(setLoadingHighlight(false));
  }
}

/**
 * Init load Community Thread
 */
export function* initLoadCommunityThread() {
  yield put(setLoadingThread(true));
  try {
    const response = yield call(communityServices.getCommunityThread);
    yield put(setCommunityThread(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get thread community'));
  } finally {
    yield put(setLoadingThread(false));
  }
}

/**
 * Init load community Detail
 */
export function* initLoadCommunityDetail() {
  const id = yield select(makeSelectId());
  yield put(setLoadingDetail(true));
  try {
    const response = yield call(communityServices.getCommunityDetail, id);
    yield put(setCommunityDetail(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get detail community'));
  } finally {
    yield put(setLoadingDetail(false));
  }
}

/**
 * Init add community reply
 */
export function* initAddCommunityReply() {
  yield put(setLoadingReply(true));
  try {
    const reply = yield select(makeSelectReply());
    yield call(communityServices.addCommunityReply, reply);
  } catch (err) {
    yield put(responseError(err, 'Error reply community'));
  } finally {
    yield put(setLoadingReply(false));
  }
}

export default [
  takeLatest(LOAD_COMMUNITY_HIGHLIGHT, initLoadCommunityHighlight),
  takeLatest(LOAD_COMMUNITY_THREAD, initLoadCommunityThread),
  takeLatest(LOAD_COMMUNITY_DETAIL, initLoadCommunityDetail),
  takeLatest(ADD_COMMUNITY_REPLY, initAddCommunityReply),
];
