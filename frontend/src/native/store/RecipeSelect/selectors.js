/**
 * MyRecipe/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRecipe = state => state.get('RecipeSelect', initialState);

const makeSelectItems = () =>
  createSelector(
    selectRecipe,
    recipeState => recipeState.get('items'),
  );

const makeSelectItemType = () =>
  createSelector(
    selectRecipe,
    recipeState => recipeState.get('itemType'),
  );

const makeSelectPaged = () =>
  createSelector(
    selectRecipe,
    recipeState => recipeState.get('paged'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectRecipe,
    recipeState => recipeState.get('loading'),
  );

export { selectRecipe, makeSelectItems, makeSelectPaged, makeSelectItemType, makeSelectLoading };
