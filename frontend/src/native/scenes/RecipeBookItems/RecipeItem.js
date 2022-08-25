/**
 * scenes/RecipeBookItems/RecipeItem.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import CardRecipe from '../../components/CardRecipe';
import ButtonAdd from '../../components/ButtonAdd';
import ButtonAddDisable from '../../components/ButtonAdd/Disable';
import ButtonAddWrapper from './ButtonAddWrapper';

const RecipeItem = props => {
  const { recipe, onAddRecipe, onRemoveRecipe, disable, selected } = props;
  const image = recipe.get('image');
  const title = recipe.get('name');
  const id = recipe.get('id');

  return (
    <CardRecipe
      image={image}
      title={title}
      actionsPosition="top"
      mainHandler={() => {
        if (!disable) {
          onAddRecipe(recipe);
        }
      }}
    >
      <ButtonAddWrapper>
        {selected ? (
          <ButtonAdd
            size={26}
            iconSize={18}
            iconName="close"
            onPress={() => {
              onRemoveRecipe(id);
            }}
          />
        ) : (
          <React.Fragment>
            {!disable ? (
              <ButtonAdd
                size={26}
                iconSize={18}
                onPress={() => {
                  if (!disable) {
                    onAddRecipe(recipe);
                  }
                }}
              />
            ) : (
              <ButtonAddDisable size={26} iconSize={18} onPress={() => {}} />
            )}
          </React.Fragment>
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
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default RecipeItem;
