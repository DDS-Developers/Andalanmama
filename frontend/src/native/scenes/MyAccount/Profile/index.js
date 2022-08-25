import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import Gap from '../../../components/Gap';
import IcCoin from './ic-coin.png';
import IcVoucher from './ic-voucher.png';
import IcPencil from './ic-pencil.png';
import { withMyProfile } from '../../../providers/MyProfile';

const Profile = props => {
  const { onPressEdit, profileAccount } = props;
  const navigation = useNavigation();

  useEffect(() => {
    props.loadProfileAccount();
  }, []);

  return (
    <Card style={styles.wrapper}>
      <View style={styles.wrapperTop}>
        <View style={styles.wrapperInfoUser}>
          <Image source={{ uri: profileAccount.get('image') }} style={styles.image} />
          <Gap width={10} />
          <View style={styles.wrapperUser}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile', { id: profileAccount.get('id') })}
            >
              <Text style={styles.name}>{profileAccount.get('fullname')}</Text>
            </TouchableOpacity>
            <Text style={styles.account}>{profileAccount.get('username')}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onPressEdit}>
          <Image source={IcPencil} style={styles.iconEdit} />
        </TouchableOpacity>
      </View>
      {/*<View style={styles.wrapperBottom}>
        <View style={styles.wrapperAmount}>
          <Image source={IcCoin} style={styles.icon} />
          <Gap width={5} />
          <Text style={styles.total}>{profileAccount.get('points')}</Text>
        </View>
        <View style={styles.wrapperRedeem}>
          <Text style={styles.textRedeem}>Redeem Point</Text>
          <Gap width={8} />
          <Image source={IcVoucher} style={styles.iconRedeem} />
        </View>
      </View>*/}
    </Card>
  );
};

Profile.propTypes = {
  profileAccount: PropTypes.object,
  loadProfileAccount: PropTypes.func,
  onPressEdit: PropTypes.func,
};

export default withMyProfile(Profile);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  wrapperTop: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    // borderBottomWidth: 1,
    // borderBottomColor: '#b2bec3',
  },
  wrapperInfoUser: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
  icon: {
    width: 19,
    height: 19,
    resizeMode: 'contain',
  },
  iconEdit: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  iconRedeem: {
    width: 29,
    height: 17,
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
    alignItems: 'center',
    flex: 1,
  },
  wrapperBottom: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  wrapperUser: {
    flex: 1,
  },
  textRedeem: {
    fontSize: 11,
    color: '#000000',
  },
  wrapperRedeem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
