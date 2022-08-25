/**
 * List/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectList = state => state.get('MyMessage', initialState);

const makeSelectMessages = () =>
  createSelector(
    selectList,
    listState => listState.get('messages'),
  );

const makeSelectMessage = () =>
  createSelector(
    selectList,
    listState => listState.get('message'),
  );

const makeSelectMessageId = () =>
  createSelector(
    selectList,
    listState => listState.get('messageId'),
  );

const makeSelectTotal = () =>
  createSelector(
    selectList,
    listState => listState.get('total'),
  );

const makeSelectPaged = () =>
  createSelector(
    selectList,
    listState => listState.get('paged'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectList,
    listState => listState.get('loading'),
  );

export {
  selectList,
  makeSelectMessages,
  makeSelectMessage,
  makeSelectMessageId,
  makeSelectTotal,
  makeSelectPaged,
  makeSelectLoading,
};
