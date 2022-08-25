import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { Http } from '../services/http';

import configureStore from '../store';

// eslint-disable-next-line import/no-unresolved
import './scss/style.scss';

Http.init();

// eslint-disable-next-line no-underscore-dangle
const { store } = configureStore(window.__INITIAL_STATE__);

const render = AppRouter => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

render(Router);
if (module.hot) module.hot.accept('./routes', () => render(Router));
