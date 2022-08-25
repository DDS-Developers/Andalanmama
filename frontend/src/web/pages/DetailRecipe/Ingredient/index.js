import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../../components/Title';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import Container from '../../../components/Page/Container';
import Wrapper from './Wrapper';

const Ingredient = props => {
  const { ingredients } = props;

  return (
    <Wrapper className="_section--ingredient">
      <div className="_inner">
        <Container>
          <div className="_ingredient--list">
            <Title size={400} className="_title" color="primary">
              Persiapkan Bahan - Bahan
            </Title>
            <ul>
              {ingredients.map((item, index) => {
                if (item.type === 'group') {
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <li className="_group" key={`item-${index}`}>
                      <Text as="span" size={400}>
                        {item.ingredient}
                      </Text>
                    </li>
                  );
                }
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <li className="_value" key={`item-${index}`}>
                    <Text as="span" size={400}>
                      {item.ingredient}
                    </Text>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="_ingredient--action">
            <Button
              type="button"
              onClick={() => {
                const section = document.querySelector('._section--tutorial');
                section.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Mulai Masak
            </Button>
          </div>
        </Container>
      </div>
      <div className="_bg" />
    </Wrapper>
  );
};

Ingredient.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default Ingredient;
