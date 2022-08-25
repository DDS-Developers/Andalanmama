/**
 * Recipe/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMyRecipe = state => state.get('Recipe', initialState);

const makeSelectId = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('id'),
  );

const makeSelectCommentId = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('commentId'),
  );

const makeSelectRecipe = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('recipe'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('loading'),
  );

const makeSelectRestricted = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('restricted'),
  );

const makeSelectLiked = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('liked'),
  );

const makeSelectLikeCount = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('likeCount'),
  );

const makeSelectRecipeComments = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('recipeDetailComments'),
  );

const makeSelectVideoModal = () =>
  createSelector(
    selectMyRecipe,
    myRecipeState => myRecipeState.get('videoModal'),
  );

export {
  selectMyRecipe,
  makeSelectId,
  makeSelectRecipe,
  makeSelectLoading,
  makeSelectRestricted,
  makeSelectLiked,
  makeSelectLikeCount,
  makeSelectRecipeComments,
  makeSelectCommentId,
  makeSelectVideoModal,
};
