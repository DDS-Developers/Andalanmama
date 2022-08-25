/**
 * scenes/MyRecipeCreate/FieldIngredients/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import DraggableFlatList from 'react-native-draggable-flatlist';
import ListItem from './ListItem';

export class SortingIngredients extends PureComponent {
  onMoveEnd = ({ data }) => {
    this.props.onSetIngredients(data ? [...data] : []);
  };

  render() {
    const { recipeIngredients } = this.props;

    if (recipeIngredients) {
      return (
        <View style={{ flex: 1, width: '100%' }}>
          <DraggableFlatList
            data={recipeIngredients.toArray()}
            renderItem={this.renderListItem}
            keyExtractor={(item, index) => index.toString()}
            scrollPercent={5}
            onMoveEnd={this.onMoveEnd}
            contentContainerStyle={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          />
        </View>
      );
    }
    return null;
  }

  renderListItem = data => {
    const { item, move, moveEnd, isActive } = data;

    return <ListItem item={item} move={move} moveEnd={moveEnd} isActive={isActive} />;
  };
}

SortingIngredients.propTypes = {
  recipeIngredients: PropTypes.object.isRequired,
  onSetIngredients: PropTypes.func.isRequired,
};

export default SortingIngredients;
