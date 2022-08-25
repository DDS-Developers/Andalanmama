/**
 * components/ButtonIcon/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'native-base';
import IconWrapper from './IconWrapper';

const ButtonIcon = props => (
  <Button transparent onPress={event => props.handler(event)} style={{ ...props.style }}>
    <IconWrapper type={props.iconType} name={props.iconName} {...props.iconStyles} />
  </Button>
);

ButtonIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  target: PropTypes.string,
  callback: PropTypes.func,
  navigation: PropTypes.object,
  iconStyles: PropTypes.object,
};

export default ButtonIcon;
