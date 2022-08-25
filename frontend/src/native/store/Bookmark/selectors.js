/**
 * Bookmark/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBookmark = state => state.get('Bookmark', initialState);

const makeSelectRecipe = () =>
  createSelector(
    selectBookmark,
    BookmarkState => BookmarkState.get('recipe'),
  );

const makeSelectRecipeId = () =>
  createSelector(
    selectBookmark,
    BookmarkState => BookmarkState.get('recipeId'),
  );

const makeSelectBookmarks = () =>
  createSelector(
    selectBookmark,
    BookmarkState => BookmarkState.get('bookmarks'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectBookmark,
    BookmarkState => BookmarkState.get('loading'),
  );

const makeSelectMarked = () =>
  createSelector(
    selectBookmark,
    BookmarkState => BookmarkState.get('marked'),
  );

export {
  selectBookmark,
  makeSelectRecipe,
  makeSelectRecipeId,
  makeSelectBookmarks,
  makeSelectLoading,
  makeSelectMarked,
};
