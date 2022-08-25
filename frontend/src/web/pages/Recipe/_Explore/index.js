import React from 'react';
import Text from '../../../components/Text';
import Icon from '../../../components/Icon';
import TitleWrapper from './TitleWrapper';
import Wrapper from './Wrapper';
import List from './List';

const Explore = () => (
  <Wrapper className="_section--explore">
    <TitleWrapper>
      <Icon size={40}>360</Icon>
      <Text as="span" size={500}>
        Explore Recipe
      </Text>
    </TitleWrapper>
    <div className="_recipe--main">
      <List />
    </div>
  </Wrapper>
);

export default Explore;
