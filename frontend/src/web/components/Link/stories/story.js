import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Link from '../index';

storiesOf('Link', module)
  .add('Link a', () => <Link href="/link">Link a</Link>)
  .add('Link route', () => (
    <Router>
      <Link to="/link">Link route</Link>
    </Router>
  ))
  .add('Set Text Style', () => (
    <Link href="/link" textProps={{ size: 700 }}>
      Set Text Style
    </Link>
  ))
  .add('Set Icon', () => (
    <Link href="/link" icon="face" iconProps={{ size: 30, marginRight: '20px' }}>
      Set Icon
    </Link>
  ));
