/**
 * scenes/RecipeBookItems/RecipeItem.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import CardRecipe from '../../components/CardRecipe';
import ButtonAdd from '../../components/ButtonAdd';
import ButtonAddWrapper from './ButtonAddWrapper';

const RecipeItem = props => {
  const { recipe, onAddRecipe, onRemoveRecipe, disable, selected } = props;
  const image = recipe.get('image');
  const title = recipe.get('name');

  return (
    <CardRecipe image={image} title={title} actionsPosition="top">
      <ButtonAddWrapper>
        {selected ? (
          <ButtonAdd
            size={26}
            iconSize={18}
            iconName="close"
            disable
            onPress={() => {
              onRemoveRecipe(recipe);
            }}
          />
        ) : (
          <ButtonAdd
            size={26}
            iconSize={18}
            disable={disable}
            onPress={() => {
              if (!disable) {
                onAddRecipe(recipe);
              }
            }}
          />
        )}
      </ButtonAddWrapper>
    </CardRecipe>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  onAddRecipe: PropTypes.func.isRequired,
  onRemoveRecipe: PropTypes.func.isRequired,
  disable: PropTypes.bool,
  selected: PropTypes.number,
};

export default RecipeItem;
