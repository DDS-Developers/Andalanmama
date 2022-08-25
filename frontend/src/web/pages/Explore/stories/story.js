import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import HomeList from '../index';

storiesOf('HomeList', module).add('HomeList', () => (
  <Router>
    <HomeList />
  </Router>
));
