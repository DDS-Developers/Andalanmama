import React from 'react';
import { Image, Dimensions, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Gap from '../../components/Gap';
import Header from '../../components/Header';
import DummyVoucher from './dummyVoucher.png';

const MyVoucherDetail = () => (
  <View style={styles.page}>
    <Header title="Explore Voucher" leftSettings={{ type: 'back' }} />
    <Image source={DummyVoucher} style={styles.image} />
    <View style={styles.content}>
      <Gap height={5} />
      <Text style={styles.title}>Discount Special Eid Mubarak</Text>
      <Gap height={3} />
      <Text style={styles.date}>Valid until 23 December 2019</Text>
      <Gap height={20} />
      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu interdum turpis.
        Suspendisse potenti. Nullam finibus quam molestie.
      </Text>
      <Gap height={10} />
      <View style={styles.itemContent}>
        <View style={styles.circle} />
        <Gap width={10} />
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu interdum turpis.
        </Text>
      </View>
      <Gap height={10} />
      <View style={styles.itemContent}>
        <View style={styles.circle} />
        <Gap width={10} />
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu interdum turpis.
        </Text>
      </View>
      <Gap height={10} />
      <View style={styles.itemContent}>
        <View style={styles.circle} />
        <Gap width={10} />
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu interdum turpis.
        </Text>
      </View>
      <Gap height={10} />
      <View style={styles.itemContent}>
        <View style={styles.circle} />
        <Gap width={10} />
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu interdum turpis.
        </Text>
      </View>
      <Gap height={60} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>REDEEM</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default MyVoucherDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 161,
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: 25,
    paddingVertical: 16,
  },
  title: {
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
  },
  date: {
    fontSize: 11,
    color: '#E83249',
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    color: '#000000',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 6,
    height: 6,
    backgroundColor: '#000000',
    borderRadius: 3,
  },
  button: {
    height: 47,
    backgroundColor: '#E83249',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
});
