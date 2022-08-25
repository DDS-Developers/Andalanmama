import React from 'react';
import RecipeListContainer from '../../../../containers/RecipeList';
import ListLayout from './ListLayout';

// eslint-disable-next-line react/prefer-stateless-function
class Favorite extends React.Component {
  render() {
    return <RecipeListContainer Layout={ListLayout} count={6} />;
  }
}

export default Favorite;
