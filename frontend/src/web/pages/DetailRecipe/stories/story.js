import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import DetailRecipe from '../index';

storiesOf('Detail Recipe', module).add('DetailRecipe', () => (
  <Router>
    <DetailRecipe match={{ params: { id: 1 } }} />
  </Router>
));
