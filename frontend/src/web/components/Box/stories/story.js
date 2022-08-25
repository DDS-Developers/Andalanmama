import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '../index';

storiesOf('Box', module)
  .add('Set margin', () => (
    <Box marginTop="20px" marginLeft="30px">
      Example Set Margin
    </Box>
  ))
  .add('Set padding', () => (
    <Box padding="20px" paddingLeft="0">
      Example Set Padding
    </Box>
  ))
  .add('Set background color', () => (
    <Box color="red" backgroundColor="#eeeeee">
      Example Set Color
    </Box>
  ))
  .add('Set tag', () => <Box as="p">Set tag as p</Box>)
  .add('Set class', () => <Box className="exampleTitle">Set Class</Box>);
