import React from 'react';
import PropTypes from 'prop-types';

import storage from '../db';

class RecentArticle extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const { count } = this.props;
    const results = storage.articles;
    const articles = [];
    const max = results.length > count ? count : results.length;

    for (let i = 0; i < max; i += 1) {
      articles.push(results[i]);
    }
    this.setState({
      articles,
    });
  };

  render() {
    const { Layout, count, ...others } = this.props;

    return <Layout articles={this.state.articles} {...others} />;
  }
}

RecentArticle.propTypes = {
  Layout: PropTypes.func,
  count: PropTypes.number,
};

export default RecentArticle;
