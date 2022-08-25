import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../index';

storiesOf('Text', module)
  .add('Text 100', () => <Text size={100}>Text 100</Text>)
  .add('Text 200', () => <Text size={200}>Text 200</Text>)
  .add('Text 300', () => <Text size={300}>Text 300</Text>)
  .add('Text 500', () => <Text size={500}>Text 500</Text>)
  .add('Text 600', () => <Text size={600}>Text 600</Text>)
  .add('Text 700', () => <Text size={700}>Text 700</Text>)
  .add('Set Tag', () => <Text tagName="span">Set Tag</Text>)
  .add('Set Color', () => <Text color="red">Set Color</Text>)
  .add('Set Color Primary', () => <Text color="primary">Set Color Primary</Text>)
  .add('Set Margin', () => (
    <Text size={400} marginBottom="80px">
      Set Margin
    </Text>
  ));
