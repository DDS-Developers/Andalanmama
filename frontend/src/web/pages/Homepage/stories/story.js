import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { HomepageContent } from '../index';

import storage from '../../../../db';

const { articles, recipes } = storage;

storiesOf('Homepage', module).add('Homepage', () => (
  <Router>
    <HomepageContent articles={articles.slice(0, 3)} recipes={recipes} />
  </Router>
));
