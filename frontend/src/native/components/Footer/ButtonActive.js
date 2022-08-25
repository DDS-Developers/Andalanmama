/**
 * components/Footer/ButtonActive.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';

const ButtonActive = props => {
  const { label, icon } = props;

  return (
    <Button vertical style={{ backgroundColor: '#e83249' }}>
      <Icon type="MaterialIcons" name={icon} style={{ color: '#e3e94a' }} />
      <Text style={{ color: '#e3e94a', fontSize: 7 }}>{label}</Text>
    </Button>
  );
};

ButtonActive.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
};

export default ButtonActive;
