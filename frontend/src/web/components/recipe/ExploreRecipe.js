import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const ExploreRecipe = props => {
  const { recipes, onLoadMore } = props;

  return (
    <div className="container">
      <p className="text-center my-4">Explore Recipe</p>

      <div className="row">
        {recipes.map((recipe, key) => (
          <Recipe recipe={recipe} key={`recipe-${key + 1}`} />
        ))}
      </div>

      <button type="button" className="btn btn-primary" onClick={onLoadMore}>
        Muat lebih banyak
      </button>
    </div>
  );
};

ExploreRecipe.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
      }),
    }),
  ),
};

export default ExploreRecipe;
