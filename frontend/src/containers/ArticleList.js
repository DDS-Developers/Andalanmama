import React from 'react';
import PropTypes from 'prop-types';

import storage from '../db';

class ArticleList extends React.Component {
  state = {
    articles: [],
  };

  componentWillMount() {
    const articles = this.fetch();

    this.setState({
      articles,
    });
  }

  fetch = () => {
    const { count } = this.props;
    const results = storage.articles;
    const articles = [];
    const max = results.length > count ? count : results.length;

    for (let i = 0; i < max; i += 1) {
      articles.push(results[i]);
    }
    return articles;
  };

  getLoadMore = () => this.fetch();

  render() {
    const { Layout, count, ...others } = this.props;

    return <Layout articles={this.state.articles} getLoadMore={this.getLoadMore} {...others} />;
  }
}

ArticleList.propTypes = {
  Layout: PropTypes.func,
  count: PropTypes.number,
};

export default ArticleList;
