/**
 * scenes/Search/List/Thumb.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { View } from 'native-base';
import ThumbWrapper from './ThumbWrapper';
import ImageWrapper from './ImageWrapper';
// import Debugger from '../../../helpers/Debugger';

// eslint-disable-next-line react/prefer-stateless-function
export class Thumb extends PureComponent {
  renderRecipe = () => {
    const { item } = this.props;

    return (
      <ThumbWrapper>
        <ImageWrapper source={{ uri: item.get('image') }} resizeMode="cover" />
      </ThumbWrapper>
    );
  };

  renderRecipeBook = () => {
    const { item } = this.props;
    const recipeItems = item.get('recipes');

    if (recipeItems && recipeItems.count() > 0) {
      const recipes = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 3; i++) {
        const recipeItem = recipeItems.get(i);
        if (recipeItem) {
          recipes.push(recipeItem);
        } else {
          break;
        }
      }

      return (
        <View
          style={{
            position: 'relative',
            height: 42,
            width: 60,
            marginRight: 20,
          }}
        >
          {recipes.map((recipe, index) => (
            <Image
              key={`image-${recipe.get('id')}`}
              source={{ uri: recipe.get('image') }}
              resizeMode="cover"
              style={{
                height: 40,
                width: 42,
                position: 'absolute',
                top: 0,
                right: index * 10,
                borderRadius: 5,
              }}
            />
          ))}
        </View>
      );
    }
    return (
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 5,
          backgroundColor: '#dddddd',
        }}
      />
    );
  };

  renderAccount = () => {
    const { item } = this.props;

    return (
      <ThumbWrapper>
        <ImageWrapper circle source={{ uri: item.get('avatar') }} resizeMode="cover" />
      </ThumbWrapper>
    );
  };

  render() {
    const { type } = this.props;
    if (type === 'recipe') {
      return this.renderRecipe();
    }
    if (type === 'recipe_book') {
      return this.renderRecipeBook();
    }
    if (type === 'account') {
      return this.renderAccount();
    }
    return null;
  }
}

Thumb.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default Thumb;
