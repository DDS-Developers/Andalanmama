import React from 'react';
import PropTypes from 'prop-types';
import TitleWrapper from './TitleWrapper';
import Title from '../../../components/Title';
import Wrapper from './Wrapper';
import RecipeLayout from './RecipeLayout';

const Explore = props => (
  <Wrapper className="_section--explore">
    <TitleWrapper>
      <Title className="_top--title" size={400} color="primary">
        Telusuri
      </Title>
    </TitleWrapper>
    <div className="_recipe--main">
      <RecipeLayout recipes={props.articles} />
    </div>
  </Wrapper>
);

Explore.propTypes = {
  articles: PropTypes.array,
  // page: PropTypes.number,
};

export default Explore;
