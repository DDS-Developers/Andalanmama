/**
 * scenes/ExploreScheduleDetail/List.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, View, Text } from 'native-base';

import { withMyScheduleItem } from '../../providers/MyScheduleItem';
import SeparatorSchedule from '../MySchedule/ListSchedule/Separator';

const List = ({ items }) => {
  const navigation = useNavigation();

  const shiftText = props => {
    let shift = null;
    switch (props) {
      case 1:
        shift = 'Pagi';
        break;
      case 2:
        shift = 'Siang';
        break;
      case 3:
        shift = 'Malam';
        break;
      default:
        shift = null;
    }
    return shift;
  };

  return (
    <Card
      style={{
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 20,
        paddingVertical: 5,
      }}
    >
      {items && items.count() > 0 ? (
        <View>
          {items.map((item, itemIdx) => (
            <View style={{ marginVertical: 20 }} key={`schedule-${item.get('id')}`}>
              <View>
                <View style={{ marginBottom: 30 }}>
                  <Text style={{ fontSize: 16 }}>
                    {shiftText(item.get('shift'))} | {item.get('schedule_time')}
                  </Text>
                </View>
                <View>
                  {item.get('alt_recipe').map((recipe, index) => (
                    <TouchableOpacity
                      // eslint-disable-next-line react/no-array-index-key
                      key={`recipe-${index}`}
                      onPress={() => navigation.navigate('RecipeDetail', { id: recipe.get('id') })}
                      style={{
                        marginBottom: 15,
                        height: 48,
                        padding: 8,
                        backgroundColor: '#ffffff',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={{ uri: recipe.get('image') }}
                        style={{ height: 30, width: 30, marginRight: 22 }}
                        resizeMode="cover"
                      />
                      <Text style={{ flex: 1, fontSize: 12 }}>{recipe.get('name')}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              {items.count() === itemIdx + 1 ? null : <SeparatorSchedule />}
            </View>
          ))}
        </View>
      ) : (
        <View>
          <Text style={{ fontSize: 12, color: '#666666' }}>Tidak ada jadwal</Text>
        </View>
      )}
    </Card>
  );
};

List.propTypes = {
  items: PropTypes.object,
};

export default withMyScheduleItem(List);
