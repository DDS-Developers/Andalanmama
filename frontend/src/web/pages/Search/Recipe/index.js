import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '../../../components/Page/Container';
import ListLayout from './ListLayout';
import Wrapper from './Wrapper';

// eslint-disable-next-line react/prefer-stateless-function
const Recipe = props => {
  let perPage = 3;
  useEffect(() => {
    perPage = window.innerWidth <= 480 ? 1 : 3;
  });

  return (
    <Wrapper>
      <Container>
        <ListLayout count={perPage} perPage={perPage} recipes={props.recipes} />
      </Container>
    </Wrapper>
  );
};

Recipe.propTypes = {
  recipes: PropTypes.array,
};

export default Recipe;
