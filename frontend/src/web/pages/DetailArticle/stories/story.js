import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../../../../store';
import DetailArticle from '../index';

const { store } = configureStore();

storiesOf('Detail Article', module).add('DetailArticle', () => (
  <Provider store={store}>
    <Router>
      <DetailArticle />
    </Router>
  </Provider>
));
