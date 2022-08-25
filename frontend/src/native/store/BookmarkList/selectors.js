/**
 * BookmarkList/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectList = state => state.get('BookmarkList', initialState);

const makeSelectItems = () =>
  createSelector(
    selectList,
    listState => listState.get('items'),
  );

const makeSelectSelected = () =>
  createSelector(
    selectList,
    listState => listState.get('selected'),
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

const makeSelectSelectedId = () =>
  createSelector(
    selectList,
    listState => listState.get('selectedId'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectList,
    listState => listState.get('loading'),
  );

export {
  selectList,
  makeSelectItems,
  makeSelectSelected,
  makeSelectTotal,
  makeSelectPaged,
  makeSelectSelectedId,
  makeSelectLoading,
};
