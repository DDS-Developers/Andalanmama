import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

export const router = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Homepage')),
  },
  { path: '/admin', component: lazy(() => import('../pages/Admin/Board')) },
];

const Routes = () => (
  <Switch>
    {router.map(route => {
      const { path, component, ...other } = route;
      return <Route key={path} path={path} component={WaitingComponent(component)} {...other} />;
    })}
  </Switch>
);

const WaitingComponent = Component => props => (
  <Suspense fallback={<div>Loading ...</div>}>
    <Component {...props} />
  </Suspense>
);

export default Routes;
