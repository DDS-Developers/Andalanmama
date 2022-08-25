/* eslint-disable import/no-unresolved */
/*
 * helpers/NavigationService.js
 */
import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function redirect(params) {
  let routeName = '';
  let routeParams = {};
  if (typeof params === 'string') {
    routeName = params;
  } else if (typeof params === 'object') {
    routeName = params.name;
    routeParams = params.params;
  }
  navigate(routeName, routeParams);
}

function goBack() {
  navigator.dispatch(NavigationActions.back());
}

// add other navigation functions that you need and export them

export default {
  navigate,
  redirect,
  goBack,
  setTopLevelNavigator,
};
