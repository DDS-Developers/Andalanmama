import React from 'react';
import FavoriteLayout from './Layout';

const Favorite = props => {
  // eslint-disable-next-line react/prop-types
  const { recipes } = props;

  return <FavoriteLayout recipes={recipes} count={10} />;
};

export default Favorite;
