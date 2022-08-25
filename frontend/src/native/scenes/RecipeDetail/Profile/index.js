import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Thumbnail, Button, Icon } from 'native-base';
import { Text, View } from 'react-native';
import Wrapper from './Wrapper';
import IconWrapper from './IconWrapper';

const Profile = ({ user }) => {
  const navigation = useNavigation();
  const photo = user.get('photo');

  return (
    <Wrapper>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {photo ? (
          <Thumbnail
            small
            source={{ uri: 'http://lorempixel.com/100/100/food/2' }}
            style={{ marginRight: 15 }}
          />
        ) : (
          <IconWrapper>
            <Icon type="MaterialIcons" name="person" style={{ color: '#efefef', fontSize: 26 }} />
          </IconWrapper>
        )}
        <Text>{user.get('fullname')}</Text>
      </View>
      <Button transparent onPress={() => navigation.navigate('Profile', { id: user.get('id') })}>
        <Text style={{ fontSize: 11 }}>Lihat Profile</Text>
      </Button>
    </Wrapper>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;
