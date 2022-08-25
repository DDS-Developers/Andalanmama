/**
 * scenes/MyRecipeCreate/FieldIngredients/index.js
 *
 */
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import ButtonText from '../../../components/ButtonText';
import ButtonOutline from '../../../components/ButtonOutline';
import Text from '../../../components/Text';
import Pane from '../../../components/Pane';
import ItemWrapper from './ItemWrapper';
import InputWrapper from './InputWrapper';
import IconWrapper from './IconWrapper';
import ActionWrapper from './ActionWrapper';
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

  renderList = () => {
    const { recipeIngredients } = this.props;

    if (recipeIngredients) {
      return (
        <Pane column style={{ marginTop: 15, width: '100%' }}>
          {recipeIngredients.map(item => {
            const isGroup = item.get('type') === 'group';
            return (
              <ItemWrapper key={`key-${item.get('id')}`}>
                <InputWrapper
                  placeholder={isGroup ? 'Nama grup...' : 'Bahan-Bahan...'}
                  value={item.get('ingredient')}
                  onChangeText={value => this.updateInfo(value, item)}
                  onBlur={() => this.props.onCheckError()}
                  style={isGroup ? { fontWeight: 'bold' } : {}}
                />
                <ActionWrapper>
                  <TouchableOpacity onPress={() => this.removeItem(item.get('id'))}>
                    <IconWrapper type="MaterialIcons" name="delete" />
                  </TouchableOpacity>
                </ActionWrapper>
              </ItemWrapper>
            );
          })}
        </Pane>
      );
    }
    return null;
  };

  render() {
    const { onAddIngredient, onShowSorting } = this.props;
    return (
      <Wrapper>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#777777', flex: 1 }}>Bahan-bahan</Text>
          <ButtonText
            style={{ marginLeft: 'auto' }}
            textStyles={{ fontSize: 12 }}
            onPress={() => onShowSorting()}
          >
            Urutkan
          </ButtonText>
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
  onAddIngredient: PropTypes.func.isRequired,
  onUpdateIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
  onCheckError: PropTypes.func.isRequired,
  onShowSorting: PropTypes.func.isRequired,
};

export default FieldIngredients;
