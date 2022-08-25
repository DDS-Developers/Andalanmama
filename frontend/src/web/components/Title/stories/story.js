import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from '../index';

storiesOf('Title', module)
  .add('Title 200', () => <Title size={200}>Title 200</Title>)
  .add('Title 300', () => <Title size={300}>Title 300</Title>)
  .add('Title 400', () => <Title size={400}>Title 400</Title>)
  .add('Title 500', () => <Title size={500}>Title 500</Title>)
  .add('Title 800', () => <Title size={800}>Title 800</Title>)
  .add('Set Tag', () => <Title tagName="h1">Set Tag</Title>)
  .add('Set Color', () => <Title color="red">Set Color</Title>)
  .add('Set Color Primary', () => <Title color="primary">Set Color Primary</Title>)
  .add('Set Padding', () => (
    <Title size={400} paddingLeft="80px">
      Set Padding
    </Title>
  ));
