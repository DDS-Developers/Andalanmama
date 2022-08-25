/**
 * scenes/Search/List/Item.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Text from '../../../components/Text';
import Thumb from './Thumb';
import ItemWrapper from './ItemWrapper';

const Item = ({ item, type }) => {
  const navigation = useNavigation();

  const getTitle = () => {
    if (type === 'recipe') {
      return item.get('name');
    }
    if (type === 'recipe_book') {
      return item.get('title');
    }
    if (type === 'account') {
      return item.get('fullname');
    }
    return 'Unknown';
  };

  return (
    <ItemWrapper
      onPress={() => {
        const id = item.get('id');
        const params = { id };
        let target = 'Explore';
        if (type === 'recipe') {
          target = 'RecipeDetail';
        } else if (type === 'recipe_book') {
          target = 'RecipeBookDetail';
        } else if (type === 'account') {
          target = 'Profile';
        }
        navigation.navigate(target, params);
      }}
    >
      <Thumb type={type} item={item} />
      <Text style={{ flex: 1 }} size={400} numberOfLines={1}>
        {getTitle()}
      </Text>
    </ItemWrapper>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default Item;
