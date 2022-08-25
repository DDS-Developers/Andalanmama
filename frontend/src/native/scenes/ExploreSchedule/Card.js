/**
 * scenes/ExploreSchedule/FilterDate/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import { View, Text, Icon } from 'native-base';
import moment from 'moment';

export const Card = ({ item }) => {
  const navigation = useNavigation();
  const user = item.get('user');
  const schedules = item.get('schedules');
  const schedule = schedules.get(0);
  const date = schedule.get('schedule_date');

  const max = 6;
  const images = [];
  schedules.forEach(schItem => {
    const recipes = schItem.get('alt_recipe');
    if (recipes) {
      recipes.forEach(recipe => {
        if (images.length <= max) {
          images.push(recipe.get('image'));
        }
      });
    }
  });

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ExploreScheduleDetail', { item })}>
      <View
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0 0 8px 6px rgba(0,0,0,0.2)',
          padding: 12,
        }}
      >
        <View
          style={{
            paddingBottom: 8,
            marginBottom: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#e83249',
          }}
        >
          <Text style={{ fontSize: 18, color: '#000000', marginBottom: 8 }}>
            {schedule.get('title')}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 12, color: '#000000', marginRight: 20 }}>
              By. {user.get('fullname')}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Icon
                type="MaterialIcons"
                name="event"
                style={{ fontSize: 26, color: '#e83249', marginRight: 12 }}
              />
              <Text style={{ fontSize: 12, color: '#000000' }}>
                {moment(date).format('DD MMMM YYYY')}
              </Text>
            </View>
          </View>
        </View>
        {images ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            {images.map((image, index) => (
              <Image
                // eslint-disable-next-line react/no-array-index-key
                key={`image-${index}`}
                source={{ uri: image }}
                style={{ height: 64, width: 64 }}
                resizeMode="cover"
              />
            ))}
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
