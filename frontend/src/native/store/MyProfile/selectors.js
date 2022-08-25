/**
 * MyProfile/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMyProfile = state => state.get('MyProfile', initialState);

const makeSelectLoading = () =>
  createSelector(
    selectMyProfile,
    myProfileState => myProfileState.get('loading'),
  );

const makeSelectProfile = () =>
  createSelector(
    selectMyProfile,
    myProfileState => myProfileState.get('profile'),
  );

const makeSelectProfileAccount = () =>
  createSelector(
    selectMyProfile,
    myProfileState => myProfileState.get('profileAccount'),
  );

export { makeSelectLoading, makeSelectProfile, makeSelectProfileAccount };
