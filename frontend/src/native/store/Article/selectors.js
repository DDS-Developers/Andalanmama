/**
 * Article/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectArticle = state => state.get('Article', initialState);

const makeSelectArticleHighlight = () =>
  createSelector(
    selectArticle,
    ArticleState => ArticleState.get('highlight'),
  );

const makeSelectLoadingHighlight = () =>
  createSelector(
    selectArticle,
    ArticleState => ArticleState.get('loadingHighlight'),
  );

const makeSelectArticleLatest = () =>
  createSelector(
    selectArticle,
    ArticleState => ArticleState.get('latest'),
  );

const makeSelectLoadingLatest = () =>
  createSelector(
    selectArticle,
    ArticleState => ArticleState.get('loadingLatest'),
  );

export {
  selectArticle,
  makeSelectArticleHighlight,
  makeSelectLoadingHighlight,
  makeSelectArticleLatest,
  makeSelectLoadingLatest,
};
