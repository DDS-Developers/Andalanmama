/**
 * RecipeBook/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRecipeBook = state => state.get('RecipeBook', initialState);

const makeSelectId = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('id'),
  );

const makeSelectRecipeId = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('recipeId'),
  );

const makeSelectFormData = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('formData'),
  );

const makeSelectRecipeBook = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('recipeBook'),
  );

const makeSelectFilterStatus = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('filterStatus'),
  );

const makeSelectFilterLabel = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('filterLabel'),
  );

const makeSelectTitle = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('title'),
  );

const makeSelectStatus = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('status'),
  );

const makeSelectRecipes = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('recipes'),
  );

const makeSelectRecipeIds = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('recipeIds'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('loading'),
  );

const makeSelectSaveType = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('saveType'),
  );

const makeSelectDataChanged = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('dataChanged'),
  );

const makeSelectTitleError = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('titleError'),
  );

const makeSelectRecipeError = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('recipeError'),
  );

const makeSelectErrorCount = () =>
  createSelector(
    selectRecipeBook,
    recipeBookState => recipeBookState.get('errorCount'),
  );

export {
  selectRecipeBook,
  makeSelectId,
  makeSelectRecipeId,
  makeSelectFormData,
  makeSelectRecipeBook,
  makeSelectFilterStatus,
  makeSelectFilterLabel,
  makeSelectTitle,
  makeSelectStatus,
  makeSelectRecipes,
  makeSelectRecipeIds,
  makeSelectLoading,
  makeSelectSaveType,
  makeSelectDataChanged,
  makeSelectTitleError,
  makeSelectRecipeError,
  makeSelectErrorCount,
};
