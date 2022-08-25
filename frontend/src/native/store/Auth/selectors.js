/**
 * Auth/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.get('Auth', initialState);

const makeSelectLoggedIn = () =>
  createSelector(
    selectAuth,
    authState => authState.get('loggedIn'),
  );

const makeSelectAuthData = () =>
  createSelector(
    selectAuth,
    authState => authState.get('authData'),
  );

const makeSelectRegistering = () =>
  createSelector(
    selectAuth,
    authState => authState.get('registering'),
  );

const makeSelectRedirect = () =>
  createSelector(
    selectAuth,
    authState => authState.get('redirect'),
  );

const makeSelectLoginType = () =>
  createSelector(
    selectAuth,
    authState => authState.get('loginType'),
  );

export {
  selectAuth,
  makeSelectLoggedIn,
  makeSelectAuthData,
  makeSelectRegistering,
  makeSelectRedirect,
  makeSelectLoginType,
};
