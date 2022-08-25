import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Header from './Header';
import ListLayout from './ListLayout';

// eslint-disable-next-line react/prefer-stateless-function
const CategoryList = props => (
  <Wrapper>
    <div className="_inner">
      <Header>
        <h3>Pilih Kategori</h3>
      </Header>
      <ListLayout className="desktop" categories={props.categories} {...props} />
    </div>
  </Wrapper>
);

CategoryList.propTypes = {
  categories: PropTypes.array,
};

export default CategoryList;
