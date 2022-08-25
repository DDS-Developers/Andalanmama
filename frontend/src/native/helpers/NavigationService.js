/*
 * helpers/NavigationService.js
 */
import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.back();
}

export function redirect(params) {
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
