import React from 'react';
import Title from '../../../components/Title';
import FormSearch from '../../../components/FormSearch/Layout';
import Wrapper from './Wrapper';

const Top = props => (
  <Wrapper className="_section--top">
    <Title className="_top--title" size={400} color="primary">
      Temukan Berbagai Macam Resep Dan Nikmati Cara Memasak Gaya Baru
    </Title>
    <FormSearch {...props} className="_top--search" />
  </Wrapper>
);

export default Top;
