import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Pane from '../../Pane';
import Title from '../../Title';
import Footer from '../index';

storiesOf('Footer', module)
  .add('Footer', () => (
    <Router>
      <Footer />
    </Router>
  ))
  .add('Test Back to top', () => (
    <Router>
      <Pane>
        <Title size={400}>This is the TOP</Title>
      </Pane>
      <Pane paddingTop="2000px">
        <Footer />
      </Pane>
    </Router>
  ));
