import React from 'react';
import { ArrowForward } from '@material-ui/icons';

import Container from '../../../components/Page/Container';
import LinkLib from '../../../components/Link';
import Text from '../../../components/Text';
import List from './List';
import Wrapper from './Wrapper';
import ButtonWrapper from './ButtonWrapper';

const Article = props => {
  // eslint-disable-next-line react/prop-types
  const { articles } = props;

  return (
    <Wrapper className="_section--article">
      <Container>
        <ButtonWrapper>
          <LinkLib
            to="/article"
            icon={ArrowForward}
            iconPosition="right"
            iconProps={{ style: { fontSize: '14px', marginLeft: '10px' } }}
            color="#000000"
            hoverColor="#444444"
            activeColor="#666666"
          >
            <Text as="span" size={300}>
              Lihat Artikel
            </Text>
          </LinkLib>
        </ButtonWrapper>
        <List articles={articles} count={3} column="3" />
      </Container>
    </Wrapper>
  );
};

export default Article;
