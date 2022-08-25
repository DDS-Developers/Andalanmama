import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ArticlePage from '../index';

storiesOf('Article Page', module).add('ArticlePage', () => (
  <Router>
    <ArticlePage />
  </Router>
));
