import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import ListLayout from './ListLayout';

const Article = props => (
  <Wrapper>
    <ListLayout
      articles={props.articles.data.slice(1, 10)}
      article={props.articles}
      fetchArticle={props.fetchArticle}
      count={9}
    />
  </Wrapper>
);

Article.propTypes = {
  articles: PropTypes.object,
  fetchArticle: PropTypes.func,
};

export default Article;
