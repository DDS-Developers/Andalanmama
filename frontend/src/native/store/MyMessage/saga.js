/**
 * MyRecipe/saga.js
 */
import { takeLatest, put, select, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import myMessageService from '../../services/api/myMessage';
import * as NavigationService from '../../helpers/NavigationService';
import {
  LOAD_MESSAGES,
  LOAD_MORE_MESSAGES,
  DO_DELETE_MESSAGE,
  REMOVED_MESSAGES,
} from './constants';
import { setLoading as setAppLoading, showAlert, responseError } from '../App/actions';
import { makeSelectMessageId, makeSelectPaged } from './selectors';
import { setLoading, removeMessage, setMessages, addMessages } from './actions';
// import Debugger from '../../helpers/Debugger';

/**
 * Init load messages
 */
export function* initLoadMessages() {
  yield put(setLoading(true));
  try {
    const response = yield call(myMessageService.list);
    const filtered = yield call(filterMessages, response.data.data);
    yield put(setMessages(filtered));
  } catch (err) {
    yield put(responseError(err, 'Error get messages'));
  } finally {
    yield put(setLoading(false));
  }
}

/**
 * Init load more messages
 */
export function* initLoadMoreMessages() {
  const page = yield select(makeSelectPaged());
  try {
    const response = yield call(myMessageService.list, page);
    const filtered = yield call(filterMessages, response.data.data);
    yield put(addMessages(filtered));
  } catch (err) {
    yield put(responseError(err, 'Error get more messages'));
  }
}

/**
 * Init delete message
 */
export function* initDeleteMessage() {
  yield put(setAppLoading(true));
  try {
    const id = yield select(makeSelectMessageId());
    yield call(doDeleteMessage, id);
    yield put(removeMessage(id));
    yield put(showAlert('Success delete message', 'Berhasil'));
    yield call(NavigationService.navigate, 'MyMessage');
  } catch (err) {
    yield put(responseError(err, 'Gagal menghapus pesan'));
  } finally {
    yield put(setAppLoading(false));
  }
}

/**
 * Helpers
 */
export async function doDeleteMessage(id) {
  let removedMessages = await AsyncStorage.getItem(REMOVED_MESSAGES);
  if (!removedMessages) {
    removedMessages = [];
  } else {
    removedMessages = await JSON.parse(removedMessages);
  }

  await removedMessages.push(id);
  await AsyncStorage.setItem(REMOVED_MESSAGES, JSON.stringify(removedMessages));
}

export async function filterMessages(messages) {
  let removedMessages = await AsyncStorage.getItem(REMOVED_MESSAGES);
  if (!removedMessages) {
    return messages;
  }
  removedMessages = await JSON.parse(removedMessages);
  const newMessages = await clearRemovedMessages(messages, removedMessages);
  return newMessages;
}

export function clearRemovedMessages(messages, removedMessages) {
  const cleared = [];
  for (let i = 0; i < messages.length; i += 1) {
    const { id } = messages[i];
    if (removedMessages.indexOf(id) === -1) {
      cleared.push(messages[i]);
    }
  }
  return cleared;
}

export default [
  takeLatest(LOAD_MESSAGES, initLoadMessages),
  takeLatest(LOAD_MORE_MESSAGES, initLoadMoreMessages),
  takeLatest(DO_DELETE_MESSAGE, initDeleteMessage),
];
