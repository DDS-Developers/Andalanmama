import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Gap from '../../../components/Gap';
import DummyVoucher from './dummyVoucher.png';
import IcCalender from './ic-calender-red.png';

const Item = ({ onPress }) => (
  <TouchableOpacity style={styles.wrapper} onPress={onPress}>
    <Image source={DummyVoucher} style={styles.image} />
    <View style={styles.wrapperContent}>
      <Text numberOfLines={2} style={styles.title}>
        Discount Special Independence Day
      </Text>
      <Gap height={2} />
      <View style={styles.wrapperInfo}>
        <Image source={IcCalender} style={styles.icon} />
        <Gap width={3} />
        <Text style={styles.date}>23 December 2019</Text>
      </View>
    </View>
  </TouchableOpacity>
);

Item.propTypes = {
  onPress: PropTypes.func,
};

export default Item;

const styles = StyleSheet.create({
  image: {
    width: 161,
    height: 161,
  },
  icon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  wrapper: {
    width: 161,
    height: 228,
    backgroundColor: 'white',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 13,
    color: '#000000',
  },
  wrapperInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 10,
    color: '#E83249',
  },
  wrapperContent: {
    padding: 8,
  },
});
