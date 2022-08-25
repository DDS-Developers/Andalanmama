import React from 'react';
import Container from '../../../components/Page/Container';
import Title from '../../../components/Title';
import List from './List';
import Wrapper from './Wrapper';

const Article = props => {
  // eslint-disable-next-line react/prop-types
  const { articles } = props;

  return (
    <Wrapper className="_section--article">
      <Container>
        <div className="_section--article--inner">
          <Title className="_title" size={300} color="primary" marginBottom="40px">
            Lihat Artikel Lainnya
          </Title>
          <List articles={articles} count={3} column="3" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Article;
