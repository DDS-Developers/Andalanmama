/**
 * scenes/RecipeBookCreate/FieldRecipes/ListItem.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Image } from 'react-native';
import { View } from 'native-base';
import { withRecipeBook } from '../../../providers/RecipeBook';

import Text from '../../../components/Text';
import ListItemWrapper from './ListItemWrapper';
import ItemTextWrapper from './ItemTextWrapper';
import RemoveWrapper from './RemoveWrapper';

export class ListItem extends PureComponent {
  render() {
    const { item, count, index, isActive, move, moveEnd } = this.props;

    return (
      // eslint-disable-next-line no-return-assign
      <SwipeRow rightOpenValue={-110} ref={ref => (this.swipeRowItem = ref)}>
        <View>
          <RemoveWrapper
            onPress={() => {
              this.props.removeBookRecipe(item.get('id'));
              this.swipeRowItem.closeRow();
            }}
          >
            <Text textAlign="center" color="#ffffff">
              Remove
            </Text>
          </RemoveWrapper>
        </View>
        <ListItemWrapper
          activeOpacity={1}
          style={[
            isActive && {
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7,
            },
          ]}
          onLongPress={move}
          onPressOut={moveEnd}
        >
          <Image
            style={{ width: 32, height: 32, borderRadius: 5 }}
            source={{ uri: item.get('image') }}
            resizeMode="contain"
          />
          <ItemTextWrapper numberOfLines={1} last={count === index + 1}>
            {item.get('name')}
          </ItemTextWrapper>
        </ListItemWrapper>
      </SwipeRow>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
  count: PropTypes.number,
  index: PropTypes.number,
  isActive: PropTypes.bool,
  move: PropTypes.func,
  moveEnd: PropTypes.func,
  removeBookRecipe: PropTypes.func,
};

export default withRecipeBook(ListItem);
