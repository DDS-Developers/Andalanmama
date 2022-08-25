import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Card } from 'native-base';
import { localeDate } from './helper';

const MessageItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MyMessageDetail', { message: item })}>
      <Card style={{ elevation: 0, borderRadius: 4, padding: 25 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 5 }}>
          {item.get('title')}
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 25 }}>{item.get('message')}</Text>
        <Text style={{ fontSize: 10 }}>{localeDate(item.get('created_at'))}</Text>
      </Card>
    </TouchableOpacity>
  );
};

MessageItem.propTypes = {
  item: PropTypes.object,
};

export default MessageItem;
