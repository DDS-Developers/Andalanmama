import React from 'react';
import RecipeListContainer from '../../../../containers/RecipeList';
import RecipeLayout from './RecipeLayout';

// eslint-disable-next-line react/prefer-stateless-function
class RecipeArticle extends React.Component {
  render() {
    return <RecipeListContainer Layout={RecipeLayout} count={1} />;
  }
}

export default RecipeArticle;
