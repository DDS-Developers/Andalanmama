import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../components/Page/Container';
import ListLayout from './ListLayout';
import Wrapper from './Wrapper';

// eslint-disable-next-line react/prefer-stateless-function
const Recipe = props => (
  <Wrapper>
    <Container>
      <ListLayout count={3} recipes={props.recipes} />
    </Container>
  </Wrapper>
);

Recipe.propTypes = {
  recipes: PropTypes.array,
};

export default Recipe;
