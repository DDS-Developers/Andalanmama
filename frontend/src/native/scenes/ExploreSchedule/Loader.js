/**
 * components/Loader/index.js
 *
 */
import React from 'react';
import { Spinner, View } from 'native-base';

const Loader = () => (
  <View
    style={{
      backgroundColor: '#efefef',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
    }}
  >
    <Spinner color="#888888" />
  </View>
);

export default Loader;
