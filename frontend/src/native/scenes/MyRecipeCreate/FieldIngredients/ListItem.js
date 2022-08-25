/**
 * scenes/MyRecipeCreate/FieldIngredients/ListItem.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import Text from '../../../components/Text';
import IconWrapper from './IconWrapper';
import ActionWrapper from './ActionWrapper';

export class ListItem extends PureComponent {
  render() {
    const { item, isActive, move, moveEnd } = this.props;
    const isGroup = item.get('type') === 'group';

    return (
      <TouchableOpacity
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
          {
            marginBottom: 12,
            position: 'relative',
            color: '#666666',
            backgroundColor: '#efefef',
            borderWidth: 0,
            fontSize: 14,
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 15,
            paddingRight: 80,
            borderRadius: 5,
          },
        ]}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        {isGroup ? (
          <Text style={{ fontWeight: 'bold' }}>Grup: {item.get('ingredient')}</Text>
        ) : (
          <Text>{item.get('ingredient')}</Text>
        )}
        <ActionWrapper>
          <View>
            <IconWrapper type="FontAwesome" name="sort" size={14} />
          </View>
        </ActionWrapper>
      </TouchableOpacity>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  move: PropTypes.func,
  moveEnd: PropTypes.func,
};

export default ListItem;
