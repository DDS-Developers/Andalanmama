import React from 'react';
import PropTypes from 'prop-types';
import FavoriteLayout from './Layout';
import ExploreRecipeContainer from '../../../../containers/ExploreRecipe';
import Title from '../../../components/Title';
// eslint-disable-next-line react/prop-types
const Favorite = props => {
  const { favorites } = props;

  return (
    <div className="article-slider">
      <Title className="_title" size={300} color="primary" marginBottom="40px">
        Lihat Artikel Lainnya
      </Title>
      <FavoriteLayout favorites={favorites} />
    </div>
  );
};

Favorite.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
      }),
      created_at: PropTypes.string.isRequired,
    }),
  ),
};

const FavoriteSLider = props => <ExploreRecipeContainer Layout={Favorite} {...props} />;

export default FavoriteSLider;
