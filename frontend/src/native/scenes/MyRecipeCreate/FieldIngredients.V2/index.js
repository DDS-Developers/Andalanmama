/**
 * scenes/MyRecipeCreate/FieldIngredients/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import DraggableFlatList from 'react-native-draggable-flatlist';

import ButtonOutline from '../../../components/ButtonOutline';
import Text from '../../../components/Text';
import ListItem from './ListItem';
import Wrapper from './Wrapper';

export class FieldIngredients extends PureComponent {
  getEmptyData = (type = 'ingredient') => ({ ingredient: '', type });

  updateInfo = (info, item) => {
    const newItem = item.set('ingredient', info);
    this.props.onUpdateIngredient(item.get('id'), newItem);
  };

  removeItem = id => {
    this.props.onRemoveIngredient(id);
  };

  onMoveEnd = ({ data }) => {
    this.props.onSetIngredients(data ? [...data] : []);
    this.props.onMoveEnd();
  };

  renderList = () => {
    const { recipeIngredients, scrollOffset } = this.props;

    if (recipeIngredients) {
      return (
        <View style={{ width: '100%', marginTop: 10, marginBottom: 15 }}>
          <DraggableFlatList
            data={recipeIngredients.toArray()}
            renderItem={this.renderListItem}
            keyExtractor={(item, index) => index.toString()}
            scrollPercent={5}
            onMoveBegin={this.props.onMoveBegin}
            onMoveEnd={this.onMoveEnd}
            scrollingContainerOffset={scrollOffset}
            contentContainerStyle={{
              flex: 1,
            }}
          />
        </View>
      );
    }
    return null;
  };

  renderListItem = data => {
    const { item, move, moveEnd, isActive } = data;

    return (
      <ListItem
        item={item}
        move={move}
        moveEnd={moveEnd}
        isActive={isActive}
        onUpdateIngredient={this.props.onUpdateIngredient}
        onRemoveIngredient={this.props.onRemoveIngredient}
        onCheckError={this.props.onCheckError}
      />
    );
  };

  render() {
    const { onAddIngredient } = this.props;
    return (
      <Wrapper>
        <View>
          <Text style={{ color: '#777777' }}>Bahan-bahan</Text>
        </View>
        {this.renderList()}
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <ButtonOutline
            icon="add"
            style={{ marginRight: 20 }}
            onPress={() => onAddIngredient(this.getEmptyData())}
          >
            Tambah
          </ButtonOutline>
          <ButtonOutline icon="add" onPress={() => onAddIngredient(this.getEmptyData('group'))}>
            Group
          </ButtonOutline>
        </View>
      </Wrapper>
    );
  }
}

FieldIngredients.propTypes = {
  recipeIngredients: PropTypes.object.isRequired,
  onSetIngredients: PropTypes.func.isRequired,
  onAddIngredient: PropTypes.func.isRequired,
  onUpdateIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
  onCheckError: PropTypes.func.isRequired,
  onMoveEnd: PropTypes.func.isRequired,
  onMoveBegin: PropTypes.func.isRequired,
  scrollOffset: PropTypes.number.isRequired,
};

export default FieldIngredients;
