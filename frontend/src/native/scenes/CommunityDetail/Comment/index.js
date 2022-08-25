import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-native-timeago';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Gap from '../../../components/Gap';

const Comment = ({ userId, image, name, message, date }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: image }} style={styles.image} />
      <Gap width={10} />
      <View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { id: userId })}>
            <Text style={styles.name}>{name}</Text>
          </TouchableOpacity>
          <Text style={styles.content}>{message}</Text>
        </View>
        <Gap height={5} />
        <Text style={styles.time}>
          <TimeAgo time={date} />
        </Text>
      </View>
    </View>
  );
};

Comment.propTypes = {
  userId: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
};

export default Comment;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    paddingVertical: 10,
    borderBottomWidth: 0.7,
    borderBottomColor: '#b2bec3',
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  content: {
    fontSize: 12,
    color: '#000000',
  },
  time: {
    fontSize: 10,
    color: '#838383',
    textDecorationLine: 'underline',
  },
});
