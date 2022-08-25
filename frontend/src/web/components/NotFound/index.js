import React from 'react';
import { string } from 'prop-types';
import Container from '../Page/Container';
import Title from '../Title';
import Text from '../Text';

const NotFound = props => (
  <Container style={{ textAlign: 'center', margin: '100px auto' }}>
    <Title color="primary">{props.title}</Title>
    <Text>{props.text}</Text>
  </Container>
);

NotFound.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
};

export default NotFound;
