/**
 * scenes/ExploreSchedule/FilterDate/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';

// eslint-disable-next-line react/prefer-stateless-function
export const Title = ({ children }) => (
  <View style={{ marginBottom: 15 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#888888' }}>{children}</Text>
  </View>
);

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
