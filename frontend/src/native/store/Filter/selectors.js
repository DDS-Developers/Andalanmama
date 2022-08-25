/**
 * Filter/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFilter = state => state.get('Filter', initialState);

const makeSelectCategories = () =>
  createSelector(
    selectFilter,
    filterState => filterState.get('categories'),
  );

const makeSelectPopularCategories = () =>
  createSelector(
    selectFilter,
    filterState => filterState.get('popularCategories'),
  );

const makeSelectSelectedCategories = () =>
  createSelector(
    selectFilter,
    filterState => filterState.get('selectedCategories'),
  );

const makeSelectRecipes = () =>
  createSelector(
    selectFilter,
    filterState => filterState.get('recipes'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectFilter,
    filterState => filterState.get('loading'),
  );

const makeSelectFilterDialog = () =>
  createSelector(
    selectFilter,
    filterState => filterState.get('filterDialog'),
  );

const makeSelectIsUseFilter = () =>
  createSelector(
    selectFilter,
    filterState => filterState.get('isUseFilter'),
  );

export {
  selectFilter,
  makeSelectCategories,
  makeSelectPopularCategories,
  makeSelectSelectedCategories,
  makeSelectRecipes,
  makeSelectLoading,
  makeSelectFilterDialog,
  makeSelectIsUseFilter,
};
