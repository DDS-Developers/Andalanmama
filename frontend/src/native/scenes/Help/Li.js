/**
 * scenes/Help/Title.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import Text from '../../components/Text';

const Li = props => (
  <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
    <View
      style={{
        width: 6,
        height: 6,
        backgroundColor: '#333333',
        marginRight: 15,
        color: '#333333',
        borderRadius: 100,
        marginTop: 8,
      }}
    />
    <Text>{props.children}</Text>
  </View>
);

Li.propTypes = {
  children: PropTypes.node,
};

export default Li;
