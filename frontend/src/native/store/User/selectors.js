/**
 * User/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUser = state => state.get('User', initialState);

const makeSelectId = () =>
  createSelector(
    selectUser,
    userState => userState.get('id'),
  );

const makeSelectUser = () =>
  createSelector(
    selectUser,
    userState => userState.get('user'),
  );

const makeSelectLoadingUser = () =>
  createSelector(
    selectUser,
    userState => userState.get('loadingUser'),
  );

const makeSelectRecipeBook = () =>
  createSelector(
    selectUser,
    userState => userState.get('recipeBook'),
  );

const makeSelectLoadingRecipeBook = () =>
  createSelector(
    selectUser,
    userState => userState.get('loadingRecipeBook'),
  );

const makeSelectRecipes = () =>
  createSelector(
    selectUser,
    userState => userState.get('recipes'),
  );

const makeSelectLoadingRecipes = () =>
  createSelector(
    selectUser,
    userState => userState.get('loadingRecipes'),
  );

export {
  selectUser,
  makeSelectId,
  makeSelectUser,
  makeSelectLoadingUser,
  makeSelectLoadingRecipeBook,
  makeSelectRecipeBook,
  makeSelectRecipes,
  makeSelectLoadingRecipes,
};
