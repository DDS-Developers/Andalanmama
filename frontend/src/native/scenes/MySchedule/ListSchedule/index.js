import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import SeparatorSchedule from './Separator';

const ListSchedule = ({ items, onDelete }) => {
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

  const deleteSchedule = (id, date) => {
    onDelete && onDelete(id, date);
  };

  return (
    <React.Fragment>
      {items.map((item, i) => (
        <View style={{ marginVertical: 20 }} key={`schedule-item-${item.get('id')}`}>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 5,
              marginBottom: 15,
            }}
          >
            <Button
              style={{ paddingTop: 0, paddingBottom: 0, height: 'auto' }}
              transparent
              iconLeft
              onPress={() => navigation.navigate('MyScheduleEdit', { item })}
            >
              <Icon style={{ color: '#E83249', marginRight: 5 }} type="MaterialIcons" name="edit" />
              <Text style={{ fontSize: 11 }}>UBAH</Text>
            </Button>
            <Button
              style={{ paddingTop: 0, paddingBottom: 0, height: 'auto' }}
              transparent
              iconLeft
              onPress={() => deleteSchedule(item.get('id'), item.get('schedule_date'))}
            >
              <Icon
                style={{ color: '#E83249', marginRight: 5 }}
                type="MaterialIcons"
                name="delete"
              />
              <Text style={{ fontSize: 11 }}>HAPUS</Text>
            </Button>
          </View>
          {items.count() === i + 1 ? null : <SeparatorSchedule />}
        </View>
      ))}
    </React.Fragment>
  );
};

ListSchedule.propTypes = {
  items: PropTypes.object,
  onDelete: PropTypes.func,
};

export default ListSchedule;
