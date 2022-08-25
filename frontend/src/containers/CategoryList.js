import React from 'react';
import PropTypes from 'prop-types';

import storage from '../db';

class CategoryList extends React.Component {
  state = {
    categories: [],
  };

  componentWillMount() {
    const categories = this.fetch();

    this.setState({
      categories,
    });
  }

  fetch = () => {
    const { count } = this.props;
    const results = storage.categories;
    const categories = [];
    const max = results.length > count ? count : results.length;

    for (let i = 0; i < max; i += 1) {
      categories.push(results[i]);
    }
    return categories;
  };

  getLoadMore = () => this.fetch();

  render() {
    const { Layout, count, ...others } = this.props;

    return <Layout categories={this.state.categories} {...others} />;
  }
}

CategoryList.propTypes = {
  Layout: PropTypes.func,
  count: PropTypes.number,
};

export default CategoryList;
