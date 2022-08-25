/**
 * store/Search/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearch = state => state.get('Search', initialState);

const makeSelectKeyword = () =>
  createSelector(
    selectSearch,
    searchState => searchState.get('keyword'),
  );

const makeSelectRecipes = () =>
  createSelector(
    selectSearch,
    searchState => searchState.get('recipes'),
  );

const makeSelectBooks = () =>
  createSelector(
    selectSearch,
    searchState => searchState.get('books'),
  );

const makeSelectAccounts = () =>
  createSelector(
    selectSearch,
    searchState => searchState.get('accounts'),
  );

const makeSelectRecipeLoading = () =>
  createSelector(
    selectSearch,
    searchState => searchState.get('recipeLoading'),
  );

const makeSelectBookLoading = () =>
  createSelector(
    selectSearch,
    searchState => searchState.get('bookLoading'),
  );

const makeSelectAccountLoading = () =>
  createSelector(
    selectSearch,
    searchState => searchState.get('accountLoading'),
  );

const makeSelectFilterStatus = () =>
  createSelector(
    selectSearch,
    searchState => searchState.get('filterStatus'),
  );

export {
  selectSearch,
  makeSelectKeyword,
  makeSelectRecipes,
  makeSelectBooks,
  makeSelectAccounts,
  makeSelectRecipeLoading,
  makeSelectBookLoading,
  makeSelectAccountLoading,
  makeSelectFilterStatus,
};
