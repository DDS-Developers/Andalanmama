import React from 'react';
import { storiesOf } from '@storybook/react';

import Meta from '../index';

storiesOf('Meta', module)
  .add('Meta', () => <Meta icon="check" label="Success" />)
  .add('Set Color', () => <Meta icon="check" label="Success" color="red" />);
