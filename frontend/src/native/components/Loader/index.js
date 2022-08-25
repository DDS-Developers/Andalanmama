/**
 * components/Loader/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import Wrapper from './Wrapper';
import TextWrapper from './TextWrapper';

const Loader = props => {
  if (props.visible) {
    return (
      <Wrapper>
        <Spinner color="#888888" />
        <TextWrapper>Harap Tunggu...</TextWrapper>
      </Wrapper>
    );
  }
  return null;
};

Loader.propTypes = {
  visible: PropTypes.bool,
};

export default Loader;
