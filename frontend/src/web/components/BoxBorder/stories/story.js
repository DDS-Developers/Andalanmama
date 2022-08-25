import React from 'react';
import { storiesOf } from '@storybook/react';

import BoxBorder from '../index';

storiesOf('BoxBorder', module).add('Set border', () => (
  <BoxBorder
    boxShadow="0 0 10px 0 rgb(0,0,0,.1)"
    border="4px solid green"
    margin="40px"
    padding="30px"
  >
    Example Set Margin
  </BoxBorder>
));
