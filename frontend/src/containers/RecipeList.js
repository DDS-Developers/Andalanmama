import React from 'react';
import PropTypes from 'prop-types';

import storage from '../db';

class RecipeList extends React.Component {
  state = {
    recipes: [],
  };

  componentWillMount() {
    const recipes = this.fetch();

    this.setState({
      recipes,
    });
  }

  fetch = () => {
    const { count } = this.props;
    const results = storage.recipes;
    const recipes = [];
    const max = results.length > count ? count : results.length;

    for (let i = 0; i < max; i += 1) {
      recipes.push(results[i]);
    }
    return recipes;
  };

  getLoadMore = () => this.fetch();

  render() {
    const { Layout, count, ...others } = this.props;

    return <Layout recipes={this.state.recipes} getLoadMore={this.getLoadMore} {...others} />;
  }
}

RecipeList.propTypes = {
  Layout: PropTypes.func,
  count: PropTypes.number,
};

export default RecipeList;
