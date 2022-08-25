/**
 * components/ButtonAdd/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import Wrapper from './Wrapper';

const ButtonAddDisable = props => {
  const { size, iconSize, iconName, ...others } = props;
  let buttonSize = 42;
  if (size) {
    buttonSize = size;
  }
  return (
    <Wrapper size={buttonSize} style={{ opacity: 0.5 }} {...others}>
      <Icon
        style={{ color: '#ffffff', fontSize: iconSize || 26 }}
        type="MaterialIcons"
        name={iconName || 'add'}
      />
    </Wrapper>
  );
};

ButtonAddDisable.propTypes = {
  size: PropTypes.number,
  iconSize: PropTypes.number,
  iconName: PropTypes.string,
};

export default ButtonAddDisable;
