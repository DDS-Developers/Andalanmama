import React from 'react';
import { storiesOf } from '@storybook/react';

import Pane from '../index';

storiesOf('Pane', module).add('Basic Example', () => (
  <Pane display="flex" flexWrap="wrap" height="300px">
    <Pane width="33.3333333%" backgroundColor="red">
      Pane 1
    </Pane>
    <Pane width="33.3333333%" backgroundColor="blue">
      Pane 2
    </Pane>
    <Pane width="33.3333333%" backgroundColor="orange">
      Pane 3
    </Pane>
  </Pane>
));
