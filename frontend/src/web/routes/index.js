import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Lazy from './loadable';
import PageView from './pageview';
import NotFoundPage from '../pages/NotFound';
import Modal from '../components/Modal';

export const router = [
  { path: '/', component: Lazy(() => import('../pages/Homepage')), exact: true },
  { path: '/recipe/detail/:id', component: Lazy(() => import('../pages/DetailRecipe')) },
  { path: '/recipe/explore', component: Lazy(() => import('../pages/Explore')), exact: true },
  { path: '/recipe', component: Lazy(() => import('../pages/Recipe')), exact: true },
  { path: '/article/detail/:id', component: Lazy(() => import('../pages/DetailArticle')) },
  { path: '/article', component: Lazy(() => import('../pages/Articlepage')), exact: true },
  { path: '/category/:id', component: Lazy(() => import('../pages/Category')) },
  { path: '/search', component: Lazy(() => import('../pages/Search')) },
  { path: '/privacy', component: Lazy(() => import('../pages/Privacy')) },
  { path: '/terms', component: Lazy(() => import('../pages/Terms')) },
];

const Routes = () => {
  const [ctaDownload, setCtaDownload] = useState(false);

  const isAndroid = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    return userAgent.indexOf('android') > -1;
  };

  return (
    <>
      <Switch>
        {router.map(route => (
          <Route key={route.path} {...route} component={PageView(route.component)} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
      {isAndroid() && ctaDownload ? (
        <Modal
          onClose={() => {
            setCtaDownload(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Routes;
