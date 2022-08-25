import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Button, Icon, ActionSheet } from 'native-base';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import defaultProfile from './baseline_person.png';

// const ListComment = () => {
const ListComment = ({ comment, onDelete, onEdit }) => {
  const user = comment.get('user');
  const userPhoto = user.get('image');
  const id = comment.get('id');
  const navigation = useNavigation();
  const actions = {
    settings: {
      options: ['Ubah', 'Hapus', 'Batal'],
      cancelButtonIndex: 2,
      destructiveButtonIndex: 1,
    },
    handler: buttonIndex => {
      if (buttonIndex === 0) {
        onEdit(id, comment.get('body'), user);
      } else if (buttonIndex === 1) {
        onDelete(id);
      }
    },
  };

  return (
    <>
      <View
        style={{
          paddingVertical: 15,
          flexDirection: 'row',
          borderBottomColor: 'rgba(131, 131, 131, .25)',
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { id: user.get('id') })}>
          {userPhoto ? (
            <Image
              style={{ width: 34, height: 34, borderRadius: 34, marginRight: 15 }}
              source={{ uri: userPhoto }}
              resizeMode="cover"
            />
          ) : (
            <Image
              style={{ width: 34, height: 34, borderRadius: 34, marginRight: 15 }}
              source={defaultProfile}
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ marginBottom: 5 }}
            onPress={() => navigation.navigate('Profile', { id: user.get('id') })}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}> {user.get('username')}</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            {comment.get('body')}
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: 'rgba(0,0,0,.5)',
                textDecorationColor: 'rgba(0,0,0,.5)',
                textDecorationLine: 'underline',
                lineHeight: 24,
              }}
            >
              {moment(comment.get('updated_at')).fromNow()}
            </Text>
            {comment.get('deletable') === 'yes' ? (
              <Button
                transparent
                style={{
                  height: 24,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
                onPress={() => ActionSheet.show(actions.settings, actions.handler)}
              >
                <Icon style={{ color: 'rgba(0,0,0,.5)' }} type="MaterialIcons" name="more-horiz" />
              </Button>
            ) : null}
          </View>
        </View>
      </View>
    </>
  );
};

ListComment.propTypes = {
  comment: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ListComment;
