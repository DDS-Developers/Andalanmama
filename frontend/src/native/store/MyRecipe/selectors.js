/**
 * MyRecipe/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMyRecipe = state => state.get('MyRecipe', initialState);

const makeSelectId = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('id'),
  );

const makeSelectRecipe = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('recipe'),
  );

const makeSelectFilterStatus = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('filterStatus'),
  );

const makeSelectFilterLabel = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('filterLabel'),
  );

const makeSelectFormData = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('formData'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('loading'),
  );

const makeSelectSaveType = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('saveType'),
  );

export {
  selectMyRecipe,
  makeSelectId,
  makeSelectRecipe,
  makeSelectFilterStatus,
  makeSelectFormData,
  makeSelectLoading,
  makeSelectSaveType,
  makeSelectFilterLabel,
};
