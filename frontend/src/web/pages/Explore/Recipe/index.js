import React from 'react';
import Text from '../../../components/Text';
import Wrapper from './Wrapper';
import List from './List';

// eslint-disable-next-line react/prefer-stateless-function
class Recipe extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text size={500}>&ldquo;Resep Ayam Goreng&rdquo; di Sajikan langsung untuk mama</Text>
        <div className="_recipe--main">
          <List />
        </div>
      </Wrapper>
    );
  }
}

export default Recipe;
