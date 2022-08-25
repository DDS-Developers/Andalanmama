/**
 * Recipe/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectComments = state => state.get('Comments', initialState);

const makeSelectId = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('id'),
  );

const makeSelectCommentId = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('commentId'),
  );

const makeSelectLoadingComments = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('loadingComments'),
  );

const makeSelectComments = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('comments'),
  );

const makeSelectCommentsData = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('commentsData'),
  );

const makeSelectPage = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('currentPage'),
  );

const makeSelectBodyComment = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('bodyComment'),
  );

const makeSelectDataChanged = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('dataChanged'),
  );

const makeSelectInputErrors = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('inputErrors'),
  );

const makeSelectInputErrorCount = () =>
  createSelector(
    selectComments,
    commentsState => commentsState.get('inputErrorCount'),
  );

export {
  makeSelectId,
  makeSelectComments,
  makeSelectLoadingComments,
  makeSelectPage,
  makeSelectCommentId,
  makeSelectCommentsData,
  makeSelectInputErrors,
  makeSelectInputErrorCount,
  makeSelectBodyComment,
  makeSelectDataChanged,
};
