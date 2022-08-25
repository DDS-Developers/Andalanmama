import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ExploreRecipe from '../index';

storiesOf('Explore Recipe', module).add('ExploreRecipe', () => (
  <Router>
    <ExploreRecipe />
  </Router>
));
