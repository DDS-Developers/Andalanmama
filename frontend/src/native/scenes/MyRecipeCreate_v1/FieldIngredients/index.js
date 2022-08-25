/**
 * scenes/MyRecipeCreate/FieldIngredients/index.js
 *
 */
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { withMyRecipe } from '../../../providers/MyRecipe';
import ButtonOutline from '../../../components/ButtonOutline';
import Text from '../../../components/Text';
import Pane from '../../../components/Pane';
import FieldErrorInfo from '../../../components/FieldErrorInfo';
import ItemWrapper from './ItemWrapper';
import InputWrapper from './InputWrapper';
import IconWrapper from './IconWrapper';
import ActionWrapper from './ActionWrapper';
import Wrapper from './Wrapper';

export class FieldIngredients extends PureComponent {
  componentDidMount() {
    const { addRecipeIngredient } = this.props;
    const data = this.getEmptyData();
    addRecipeIngredient(data);
    addRecipeIngredient(data);
    addRecipeIngredient(data);
  }

  getEmptyData = (type = 'text') => ({ info: '', type });

  updateInfo = (info, item) => {
    const newItem = item.set('info', info);
    this.props.updateRecipeIngredient(item.get('id'), newItem);
    this.props.checkInputError('ingredients');
  };

  removeItem = id => {
    this.props.removeRecipeIngredient(id);
    this.props.checkInputError('ingredients');
  };

  renderList = () => {
    const { recipeIngredients } = this.props;

    return (
      <Pane column style={{ marginTop: 15, width: '100%' }}>
        {recipeIngredients.map(item => {
          const isGroup = item.get('type') === 'group';
          return (
            <ItemWrapper key={`key-${item.get('id')}`}>
              <InputWrapper
                placeholder={isGroup ? 'Group Name...' : 'Text...'}
                value={item.get('info')}
                onChangeText={value => this.updateInfo(value, item)}
                style={isGroup ? { fontWeight: 'bold' } : {}}
              />
              <ActionWrapper>
                <TouchableOpacity onPress={() => this.removeItem(item.get('id'))}>
                  <IconWrapper type="FontAwesome" name="trash-o" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <IconWrapper type="FontAwesome" name="sort" />
                </TouchableOpacity>
              </ActionWrapper>
            </ItemWrapper>
          );
        })}
      </Pane>
    );
  };

  render() {
    const { addRecipeIngredient } = this.props;
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
            onPress={() => addRecipeIngredient(this.getEmptyData())}
          >
            Tambah
          </ButtonOutline>
          <ButtonOutline icon="add" onPress={() => addRecipeIngredient(this.getEmptyData('group'))}>
            Group
          </ButtonOutline>
        </View>
        <View style={{ marginTop: 15 }}>
          <FieldErrorInfo message={this.props.inputErrors.get('ingredients')} bottom />
        </View>
      </Wrapper>
    );
  }
}

FieldIngredients.propTypes = {
  recipeIngredients: PropTypes.object,
  inputErrors: PropTypes.object,
  addRecipeIngredient: PropTypes.func,
  updateRecipeIngredient: PropTypes.func,
  removeRecipeIngredient: PropTypes.func,
  checkInputError: PropTypes.func,
};

export default withMyRecipe(FieldIngredients);
