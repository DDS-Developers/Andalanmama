import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../../components/Title';
import FormSearch from '../../../components/FormSearch/Layout';
import CategoryList from '../../../components/CategoryList';
import Wrapper from './Wrapper';

const Top = props => (
  <Wrapper className="_section--top">
    <Title className="_top--title" size={400} color="primary">
      Temukan Berbagai Macam Resep Dan Nikmati Cara Memasak Gaya Baru
    </Title>
    <FormSearch {...props} className="_top--search" />
    <CategoryList className="_top--category" categories={props.categories} />
  </Wrapper>
);

Top.propTypes = {
  categories: PropTypes.array,
};

export default Top;
