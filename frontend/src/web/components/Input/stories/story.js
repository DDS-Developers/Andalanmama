import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../index';

storiesOf('Input', module).add('Input Default', () => (
  <Input name="query" placeholder="Cari Resep Favorit Bunda..." bgColor="#dddddd" />
));
