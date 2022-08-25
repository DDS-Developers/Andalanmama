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

const makeSelectFormData = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('formData'),
  );

const makeSelectTags = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.getIn(['formData', 'tags']),
  );

const makeSelectIngredients = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.getIn(['formData', 'ingredients']),
  );

const makeSelectSteps = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.getIn(['formData', 'steps']),
  );

const makeSelectIngredientsOrder = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.getIn('ingredientsOrder'),
  );

const makeSelectStepsOrder = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.getIn('stepsOrder'),
  );

const makeSelectInputErrors = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('inputErrors'),
  );

const makeSelectInputErrorCount = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('inputErrorCount'),
  );

export {
  selectMyRecipe,
  makeSelectId,
  makeSelectRecipe,
  makeSelectFilterStatus,
  makeSelectFormData,
  makeSelectInputErrors,
  makeSelectInputErrorCount,
  makeSelectTags,
  makeSelectSteps,
  makeSelectIngredients,
  makeSelectStepsOrder,
  makeSelectIngredientsOrder,
};
