import React from 'react';
import PropTypes from 'prop-types';

import storage from '../db';

class RecipeFavorite extends React.Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const { count } = this.props;
    const results = storage.recipes;
    const recipes = [];
    const max = results.length > count ? count : results.length;

    for (let i = 0; i < max; i += 1) {
      recipes.push(results[i]);
    }
    this.setState({
      recipes,
    });
  };

  render() {
    const { Layout } = this.props;

    return <Layout recipes={this.state.recipes} />;
  }
}

RecipeFavorite.propTypes = {
  Layout: PropTypes.func,
  count: PropTypes.number,
};

export default RecipeFavorite;
