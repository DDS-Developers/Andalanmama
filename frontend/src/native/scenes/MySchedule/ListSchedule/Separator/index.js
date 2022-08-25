/**
 * Separator/index.js
 *
 */
import React from 'react';
import { View } from 'react-native';
import Left from './Left';
import Right from './Right';

const SeparatorSchedule = () => (
  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
    <Left />
    <Right />
  </View>
);

export default SeparatorSchedule;
