/**
 * containers/RecipeSelect/Menu/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { TouchableOpacity, View } from 'react-native';
import { withMyRecipe } from '../../../providers/MyRecipe';
import { withBookmark } from '../../../providers/Bookmark';
import Text from '../../../components/Text';
import Wrapper from './Wrapper';
import NavWrapper from './NavWrapper';

const Menu = props => {
  const {
    loadMyRecipes,
    changeMyRecipeFilterStatus,
    recipeType,
    setRecipeType,
    loadBookmarks,
  } = props;

  const filters = [
    {
      title: 'Resep Saya',
      value: 'my_recipe',
    },
    {
      title: 'Ditandai',
      value: 'bookmark',
    },
  ];

  let Component = <View />;

  return (
    <Wrapper>
      {filters.map(filter => {
        if (recipeType !== filter.value) {
          Component = (
            <TouchableOpacity
              onPress={() => {
                setRecipeType(filter.value);
                if (filter.value === 'my_recipe') {
                  changeMyRecipeFilterStatus('all');
                  loadMyRecipes();
                } else if (filter.value === 'bookmark') {
                  loadBookmarks();
                }
              }}
            />
          );
        }
        return (
          <NavWrapper key={`menu-filter-${filter.value}`} component={Component}>
            <Text>{filter.title}</Text>
          </NavWrapper>
        );
      })}
    </Wrapper>
  );
};

Menu.propTypes = {
  loadMyRecipes: PropTypes.func,
  loadBookmarks: PropTypes.func,
  changeMyRecipeFilterStatus: PropTypes.func,
  setRecipeType: PropTypes.func,
  recipeType: PropTypes.string,
};

export default compose(
  withMyRecipe,
  withBookmark,
)(Menu);
