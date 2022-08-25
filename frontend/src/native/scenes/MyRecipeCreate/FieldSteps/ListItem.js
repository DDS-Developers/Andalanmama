/**
 * scenes/MyRecipeCreate/FieldIngredients/ListItem.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import Pane from '../../../components/Pane';
import Text from '../../../components/Text';
import IconWrapper from './IconWrapper';
import NumberWrapper from './NumberWrapper';

export class ListItem extends PureComponent {
  render() {
    const { item, isActive, move, moveEnd, index } = this.props;

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
            flex: 1,
            flexDirection: 'column',
            marginBottom: 12,
            position: 'relative',
            backgroundColor: '#efefef',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5,
          },
        ]}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <Pane row center>
          <NumberWrapper style={{ fontSize: 12 }}>{index + 1}</NumberWrapper>
          <Text numberOfLines={1} style={{ fontSize: 12, flex: 1, marginLeft: 8 }}>
            {item.get('title')}
          </Text>
          <View style={{ marginLeft: 'auto' }}>
            <IconWrapper type="FontAwesome" name="sort" size={14} />
          </View>
        </Pane>
      </TouchableOpacity>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  move: PropTypes.func,
  moveEnd: PropTypes.func,
  index: PropTypes.number,
};

export default ListItem;
