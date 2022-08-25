/**
 * scenes/MyRecipeCreate/FieldSteps/Sorting.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import DraggableFlatList from 'react-native-draggable-flatlist';
import ListItem from './ListItem';

export class SortingSteps extends PureComponent {
  onMoveEnd = ({ data }) => {
    this.props.onSetSteps(data ? [...data] : []);
  };

  render() {
    const { recipeSteps } = this.props;

    if (recipeSteps) {
      return (
        <View style={{ flex: 1, width: '100%' }}>
          <DraggableFlatList
            data={recipeSteps.toArray()}
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
    const { item, move, moveEnd, isActive, index } = data;

    return <ListItem item={item} move={move} moveEnd={moveEnd} isActive={isActive} index={index} />;
  };
}

SortingSteps.propTypes = {
  recipeSteps: PropTypes.object.isRequired,
  onSetSteps: PropTypes.func.isRequired,
};

export default SortingSteps;
