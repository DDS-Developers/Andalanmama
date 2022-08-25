/**
 * scenes/Help/Title.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import Text from '../../components/Text';

const LiNumber = props => (
  <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
    <Text style={{ marginRight: 6 }}>{props.no}.</Text>
    <Text>{props.children}</Text>
  </View>
);

LiNumber.propTypes = {
  children: PropTypes.node,
  no: PropTypes.string,
};

export default LiNumber;
