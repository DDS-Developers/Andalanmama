import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../web/components/Loading';

import ApiArticle from '../services/api/article';

class ArticlePage extends React.Component {
  state = {
    articles: null,
    highlight: null,
  };

  componentDidMount = () => {
    let perPage = 10;
    if (window.innerWidth <= 480) {
      perPage = 3;
    }
    Promise.all([ApiArticle.getHightlight(), ApiArticle.getRecentArticles(1, perPage)]).then(
      ([highlight, articles]) => {
        this.setState({
          highlight: highlight.data,
          articles: articles.data,
        });
      },
    );
  };

  fetchArticle = data => {
    let perPage = 10;
    if (window.innerWidth <= 480) {
      perPage = 3;
    }

    ApiArticle.getRecentArticles(data.page, perPage).then(articles => {
      this.setState({
        articles: articles.data,
      });
    });

    const section = document.querySelector('._section--explore');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const { Layout, count, ...others } = this.props;
    const { articles, highlight } = this.state;

    if (articles === null && highlight === null) {
      return <Loading />;
    }

    return (
      <Layout
        articles={articles}
        highlight={highlight}
        fetchArticle={this.fetchArticle}
        {...others}
      />
    );
  }
}

ArticlePage.propTypes = {
  Layout: PropTypes.func,
  count: PropTypes.number,
};

export default ArticlePage;
