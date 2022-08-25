/**
 * store/Tag/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTag = state => state.get('Tag', initialState);

const makeSelectLoading = () =>
  createSelector(
    selectTag,
    TagState => TagState.get('loading'),
  );

const makeSelectSilent = () =>
  createSelector(
    selectTag,
    TagState => TagState.get('silent'),
  );

const makeSelectTags = () =>
  createSelector(
    selectTag,
    TagState => TagState.get('tags'),
  );

export { selectTag, makeSelectLoading, makeSelectSilent, makeSelectTags };
