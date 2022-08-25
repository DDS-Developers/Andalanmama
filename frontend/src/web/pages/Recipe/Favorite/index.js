import React from 'react';
import FavoriteLayout from './Layout';

const Favorite = props => {
  // eslint-disable-next-line react/prop-types
  const { favorites } = props;

  return <FavoriteLayout favorites={favorites} />;
};

export default Favorite;
