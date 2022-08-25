/**
 * scenes/Explore/FilterCategory/Item.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';
import ImageWrapper from './ImageWrapper';
import TitleWrapper from './TitleWrapper';

const Item = props => {
  const { title, image, active, onSelect } = props;

  return (
    <Wrapper onPress={onSelect}>
      <ContentWrapper bgColor={active ? '#e83249' : '#000000'}>
        <ImageWrapper opacity={active ? 0.5 : 0.4} source={{ uri: image }} />
        <TitleWrapper>{title}</TitleWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

export default Item;
