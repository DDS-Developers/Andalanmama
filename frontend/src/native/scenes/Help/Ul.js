/**
 * scenes/Help/Title.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

const Ul = props => (
  <View style={{ marginTop: 10, marginBottom: 15, paddingLeft: 15 }}>{props.children}</View>
);

Ul.propTypes = {
  children: PropTypes.node,
};

export default Ul;
