import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Gap from '../../../components/Gap';
import dummyProfile from './dummyProfile.png';
import IcCoin from './ic-coin.png';

const Profile = () => (
  <View style={styles.wrapper}>
    <Image source={dummyProfile} style={styles.image} />
    <Gap width={10} />
    <View style={styles.wrapperUser}>
      <Text style={styles.name}>Ririn Marinka</Text>
      <Text style={styles.account}>chef_marinka</Text>
    </View>
    <View style={styles.wrapperAmount}>
      <Image source={IcCoin} style={styles.icon} />
      <Gap width={5} />
      <Text style={styles.total}>10.000</Text>
    </View>
  </View>
);

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 12,
  },
  image: {
    width: 48,
    height: 48,
  },
  icon: {
    width: 19,
    height: 19,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    color: '#000000',
  },
  account: {
    fontSize: 12,
    color: '#838383',
  },
  wrapperAmount: {
    flexDirection: 'row',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  wrapperUser: {
    flex: 1,
  },
});
