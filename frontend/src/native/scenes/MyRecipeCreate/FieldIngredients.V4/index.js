/**
 * scenes/MyRecipeCreate/FieldIngredients/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
// import DraggableFlatList from 'react-native-draggable-flatlist';
import SortableListView from 'react-native-sortable-listview';

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
  };

  renderList = () => {
    const { recipeIngredients } = this.props;
    const data = recipeIngredients.toObject();
    const order = Object.keys(data);

    if (recipeIngredients) {
      return (
        <View style={{ flex: 1, width: '100%' }}>
          <SortableListView
            style={{ flex: 1 }}
            data={data}
            order={order}
            onRowMoved={e => {
              order.splice(e.to, 0, order.splice(e.from, 1)[0]);
            }}
            renderRow={row => <ListItem item={row} />}
          />
        </View>
      );
    }
    return null;
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
};

export default FieldIngredients;
