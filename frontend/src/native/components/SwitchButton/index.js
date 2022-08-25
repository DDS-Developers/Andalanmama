/* eslint-disable react/jsx-curly-brace-presence */
/**
 * components/ButtonIcon/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Switch } from 'react-native';

const SwitchButton = props => (
  <View
    style={{
      backgroundColor: props.value ? '#E83249' : '#D5D5D5',
      borderRadius: 50,
      width: 45,
      paddingHorizontal: 3,
    }}
  >
    <Switch
      value={props.value}
      thumbColor={props.value ? 'white' : '#ffffff'}
      trackColor={{ false: 'transparent', true: 'transparent' }}
      style={{ width: 40, marginLeft: 3 }}
      {...props}
    />
  </View>
);

SwitchButton.propTypes = {
  value: PropTypes.bool.isRequired,
};

export default SwitchButton;
