/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Title from '../../../components/Title';
const Detail = props => {
  const { article } = props;

  return (
    <Wrapper className="_section--detail">
      <div className="_inner" key={`item-${article.id}`}>
        <div className="_featured--image">
          <img loading="lazy" src={article.image} alt="" />
        </div>
        <Title tagName="h1" className="_top--title" size={400} color="primary">
          {article.title}
        </Title>
        <hr />
        <div
          className="_article--detail"
          dangerouslySetInnerHTML={{ __html: JSON.parse(article.body) }}
        />
      </div>
    </Wrapper>
  );
};

Detail.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      fullname: PropTypes.string.isRequired,
    }),
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default Detail;
