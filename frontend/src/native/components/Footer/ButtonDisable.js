/**
 * components/Footer/ButtonDisable.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';

const ButtonDisable = props => {
  const { label, icon } = props;

  return (
    <Button vertical style={{ backgroundColor: '#e83249', opacity: 0.4 }}>
      <Icon type="MaterialIcons" name={icon} style={{ color: '#ffffff' }} />
      <Text style={{ color: '#ffffff', fontSize: 7 }}>{label}</Text>
    </Button>
  );
};

ButtonDisable.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
};

export default ButtonDisable;
