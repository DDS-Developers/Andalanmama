/**
 * scenes/MyRecipeCreate/FieldIngredients/ListItem.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { withRecipeBook } from '../../../providers/RecipeBook';
import ItemWrapper from './ItemWrapper';
import InputWrapper from './InputWrapper';
import IconWrapper from './IconWrapper';
import ActionWrapper from './ActionWrapper';

export class ListItem extends PureComponent {
  updateInfo = (info, item) => {
    const newItem = item.set('ingredient', info);
    this.props.onUpdateIngredient(item.get('id'), newItem);
  };

  removeItem = id => {
    this.props.onRemoveIngredient(id);
  };

  render() {
    const { item, isActive, move, moveEnd } = this.props;
    const isGroup = item.get('type') === 'group';

    return (
      <ItemWrapper
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
      >
        <InputWrapper
          placeholder={isGroup ? 'Group Name...' : 'Text...'}
          value={item.get('ingredient')}
          onChangeText={value => this.updateInfo(value, item)}
          onBlur={() => this.props.onCheckError()}
          style={isGroup ? { fontWeight: 'bold' } : {}}
        />
        <ActionWrapper>
          <TouchableOpacity onPress={() => this.removeItem(item.get('id'))}>
            <IconWrapper type="FontAwesome" name="trash-o" />
          </TouchableOpacity>
          <TouchableOpacity onLongPress={move} onPressOut={moveEnd}>
            <IconWrapper type="FontAwesome" name="sort" />
          </TouchableOpacity>
        </ActionWrapper>
      </ItemWrapper>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  move: PropTypes.func,
  moveEnd: PropTypes.func,
  onUpdateIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
  onCheckError: PropTypes.func.isRequired,
};

export default withRecipeBook(ListItem);
