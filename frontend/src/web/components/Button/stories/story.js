import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Button from '../index';
import ButtonCircle from '../ButtonCircle';
import Icon from '../../Icon';

storiesOf('Button', module)
  .add('Button Default', () => <Button>Button Default</Button>)
  .add('Set Margin', () => <Button marginLeft="20px">Button Default</Button>)
  .add('Set Border Radius', () => <Button borderRadius="0 10px 10px 0">Button Default</Button>)
  .add('Set a Route', () => (
    <Router>
      <Button to="/link">Button Route</Button>
    </Router>
  ))
  .add('Set a A', () => <Button href="/link">Button A</Button>)
  .add('Button With Icon', () => (
    <Button>
      <Icon marginRight="10px">keyboard_arrow_up</Icon>
      Button With Icon
    </Button>
  ))
  .add('Button Circle', () => (
    <ButtonCircle>
      <Icon size="40">keyboard_arrow_up</Icon>
    </ButtonCircle>
  ))
  .add('Button Circle Secondary', () => (
    <ButtonCircle variant="secondary">
      <Icon size="40">keyboard_arrow_up</Icon>
    </ButtonCircle>
  ));
