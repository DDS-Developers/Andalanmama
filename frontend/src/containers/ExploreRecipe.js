import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../web/components/Loading';

import ApiCategory from '../services/api/category';
import ApiRecipe from '../services/api/recipe';

class ExploreRecipe extends React.Component {
  state = {
    categories: null,
    recipebook: null,
    favorites: null,
    query: '',
  };

  componentWillMount() {
    Promise.all([
      ApiCategory.getCategories(),
      ApiRecipe.getRecommendedRecipes(),
      ApiRecipe.getRecipeBook(),
    ]).then(([categories, favorites, recipebook]) => {
      this.setState({
        categories: categories.data,
        favorites: favorites.data,
        recipebook: recipebook.data,
      });
    });
  }

  onChangeKeyword = value => {
    this.setState({ query: value });
  };

  onSubmit = () => {
    const { query } = this.state;
    // console.log('on submit');
    this.props.history.push(`/search?query=${query}`);
  };

  render() {
    const { Layout, ...others } = this.props;
    const { categories, favorites, recipebook } = this.state;
    if (favorites === null && recipebook === null && categories === null) {
      return <Loading />;
    }
    return (
      <Layout
        favorites={favorites}
        categories={categories}
        recipebook={recipebook}
        onChangeKeyword={this.onChangeKeyword}
        onSubmit={this.onSubmit}
        {...others}
      />
    );
  }
}

ExploreRecipe.propTypes = {
  Layout: PropTypes.func,
};

export default ExploreRecipe;
