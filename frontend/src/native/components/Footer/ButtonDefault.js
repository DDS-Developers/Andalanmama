/**
 * components/Footer/ButtonDefault.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';

const ButtonDefault = props => {
  const { navigation, label, icon, target } = props;

  return (
    <Button
      vertical
      onPress={() => navigation.navigate(target)}
      style={{ backgroundColor: '#e83249' }}
    >
      <Icon type="MaterialIcons" name={icon} style={{ color: '#ffffff' }} />
      <Text style={{ color: '#ffffff', fontSize: 7 }}>{label}</Text>
    </Button>
  );
};

ButtonDefault.propTypes = {
  navigation: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default ButtonDefault;
