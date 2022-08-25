/* eslint-disable import/no-unresolved */
/**
 * scenes/RecipeBookCreate/FieldRecipes/index.js
 *
 */
import React, { PureComponent } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Icon, View } from 'native-base';
import { withNavigation } from 'react-navigation';
import { withRecipeBook } from '../../../providers/RecipeBook';

import Pane from '../../../components/Pane';
import Text from '../../../components/Text';
import HeaderWrapper from './HeaderWrapper';
import EmptyWrapper from './EmptyWrapper';
import ListWrapper from './ListWrapper';
import ItemWrapper from './ListItemWrapper';
import ItemTextWrapper from './ItemTextWrapper';
import ButtonWrapper from './ButtonWrapper';
import RemoveWrapper from './RemoveWrapper';

export class FieldRecipes extends PureComponent {
  renderEmpty = () => (
    <EmptyWrapper>
      <Text textAlign="center" color="#666666">
        tap to add your recipe into your schedule
      </Text>
    </EmptyWrapper>
  );

  renderList = () => {
    const { bookRecipes } = this.props;
    const count = bookRecipes.count();

    return (
      <ListWrapper
        data={bookRecipes.toArray()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={data => {
          const { item, index } = data;
          return (
            <ItemWrapper>
              <Image
                style={{ width: 32, height: 32, borderRadius: 5 }}
                source={{ uri: item.get('image') }}
                resizeMode="contain"
              />
              <ItemTextWrapper numberOfLines={1} last={count === index + 1}>
                {item.get('name')}
              </ItemTextWrapper>
            </ItemWrapper>
          );
        }}
        renderHiddenItem={(data, rowMap) => {
          const { item, index } = data;
          const id = item.get('id');
          return (
            <View>
              <RemoveWrapper
                onPress={() => {
                  // if (recipeBook) {
                  //   this.props.deleteBookRecipe(id, recipeBook.get('id'));
                  // } else {
                  //   this.props.removeBookRecipe(id);
                  // }
                  this.props.removeBookRecipe(id);
                  rowMap[index].closeRow();
                }}
              >
                <Text textAlign="center" color="#ffffff">
                  Remove
                </Text>
              </RemoveWrapper>
            </View>
          );
        }}
        rightOpenValue={-110}
      />
    );
  };

  render() {
    const { bookRecipes, navigation } = this.props;

    return (
      <Pane column start>
        <HeaderWrapper>
          <Text>Select Recipe</Text>
          <ButtonWrapper onPress={() => navigation.navigate('RecipeBookItems')}>
            <Icon style={{ color: '#000000' }} type="MaterialIcons" name="add" />
          </ButtonWrapper>
        </HeaderWrapper>
        {bookRecipes && bookRecipes.count() > 0 ? this.renderList() : this.renderEmpty()}
      </Pane>
    );
  }
}

FieldRecipes.propTypes = {
  // recipeBook: PropTypes.object,
  bookRecipes: PropTypes.object,
  navigation: PropTypes.object,
  removeBookRecipe: PropTypes.func,
  // deleteBookRecipe: PropTypes.func,
};

export default compose(
  withNavigation,
  withRecipeBook,
)(FieldRecipes);
