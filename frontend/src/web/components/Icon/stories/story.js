import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../index';

storiesOf('Icon', module)
  .add('Set icon face', () => <Icon>face</Icon>)
  .add('Set color', () => <Icon color="red">face</Icon>)
  .add('Set size', () => <Icon size="80">face</Icon>)
  .add('Set margin', () => <Icon marginLeft="40px">face</Icon>);
