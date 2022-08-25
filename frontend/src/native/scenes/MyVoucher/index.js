import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Profile from './Profile';
import Gap from '../../components/Gap';
import Item from './Item';

const MyVoucher = ({ navigation }) => (
  <View style={styles.page}>
    <Header title="Explore Voucher" leftSettings={{ type: 'back' }} />
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <Gap height={20} />
      <Profile />
      <Gap height={10} />
      <View style={styles.content}>
        <Item onPress={() => navigation.navigate('MyVoucherDetail')} />
        <Item onPress={() => navigation.navigate('MyVoucherDetail')} />
        <Item onPress={() => navigation.navigate('MyVoucherDetail')} />
        <Item onPress={() => navigation.navigate('MyVoucherDetail')} />
      </View>
    </ScrollView>
  </View>
);

export default MyVoucher;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  wrapper: {
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
