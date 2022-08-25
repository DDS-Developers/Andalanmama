import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const RecipeHome = props => {
  const { recipes } = props;

  return (
    <React.Fragment>
      <a href="" className="my-4 d-block">
        Link Resep Terfavorit
      </a>
      <div className="row">
        {recipes.map((recipe, key) => (
          <Recipe recipe={recipe} key={`recipe-${key + 1}`} />
        ))}
      </div>
    </React.Fragment>
  );
};

RecipeHome.propTypes = {
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

export default RecipeHome;
