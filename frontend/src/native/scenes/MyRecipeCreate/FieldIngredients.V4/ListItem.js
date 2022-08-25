/**
 * scenes/MyRecipeCreate/FieldIngredients/ListItem.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { withRecipeBook } from '../../../providers/RecipeBook';
import Text from '../../../components/Text';
import ItemWrapper from './ItemWrapper';
import IconWrapper from './IconWrapper';
import ActionWrapper from './ActionWrapper';

export class ListItem extends PureComponent {
  render() {
    const { item } = this.props;

    return (
      <ItemWrapper
        underlayColor="#eeeeee"
        style={{
          padding: 25,
          backgroundColor: '#F8F8F8',
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
        {...this.props.sortHandlers}
      >
        <Text>{item.get('ingredient')}</Text>
        <ActionWrapper>
          <View>
            <IconWrapper type="FontAwesome" name="sort" />
          </View>
        </ActionWrapper>
      </ItemWrapper>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
  sortHandlers: PropTypes.object,
};

export default withRecipeBook(ListItem);
