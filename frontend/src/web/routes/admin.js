import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Navigation from '../pages/Admin/Navigation';
import Lazy from './loadable';

const Routes = ({ match }) => (
  <React.Fragment>
    <Navigation match={match} />

    <div className="container">
      <Route path={`${match.url}/`} exact component={Lazy(() => import('../pages/Admin/Board'))} />
      <Route path={`${match.url}/login`} component={Lazy(() => import('../pages/Admin/Login'))} />
      <Route path={`${match.url}/user`} component={Lazy(() => import('../pages/Admin/User'))} />
      <Route path={`${match.url}/recipe`} component={Lazy(() => import('../pages/Admin/Recipe'))} />
      <Route path={`${match.url}/blog`} component={Lazy(() => import('../pages/Admin/Blog'))} />
    </div>
  </React.Fragment>
);

Routes.propTypes = {
  match: PropTypes.object,
};

export default Routes;
