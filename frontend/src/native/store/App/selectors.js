/**
 * store/App/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApp = state => state.get('App', initialState);

const makeSelectWelcomeScreen = () =>
  createSelector(
    selectApp,
    appState => appState.get('welcomeScreen'),
  );

const makeSelectLoading = () =>
  createSelector(
    selectApp,
    appState => appState.get('loading'),
  );

const makeSelectAlert = () =>
  createSelector(
    selectApp,
    appState => appState.get('alert'),
  );

const makeSelectAlertVisible = () =>
  createSelector(
    selectApp,
    appState => appState.getIn(['alert', 'visible']),
  );

const makeSelectDebugContent = () =>
  createSelector(
    selectApp,
    appState => appState.get('debugContent'),
  );

const makeSelectScrollViewRef = () =>
  createSelector(
    selectApp,
    appState => appState.get('scrollViewRef'),
  );

export {
  selectApp,
  makeSelectWelcomeScreen,
  makeSelectLoading,
  makeSelectAlert,
  makeSelectAlertVisible,
  makeSelectDebugContent,
  makeSelectScrollViewRef,
};
