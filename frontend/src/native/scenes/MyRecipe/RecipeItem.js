/**
 * scenes/MyRecipe/RecipeItem/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import CardRecipe from '../../components/CardRecipe';

const RecipeItem = ({ recipe, onDelete }) => {
  const navigation = useNavigation();
  const attachment = recipe.get('attachment');
  const name = recipe.get('name');
  const id = recipe.get('id');
  const duration = recipe.get('time');
  const status = recipe.get('status');

  const actions = {
    settings: {
      options: ['Ubah', 'Hapus', 'Batal'],
      cancelButtonIndex: 2,
      destructiveButtonIndex: 1,
    },
    handler: buttonIndex => {
      if (buttonIndex === 0) {
        navigation.navigate('MyRecipeEdit', { id });
      } else if (buttonIndex === 1) {
        onDelete(id);
      }
    },
  };

  return (
    <CardRecipe
      image={attachment}
      title={name}
      id={id}
      actions={actions}
      duration={duration}
      status={status}
      meta
      routeParams={{ restricted: true }}
    />
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RecipeItem;
