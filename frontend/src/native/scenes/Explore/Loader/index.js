/**
 * components/Loader/index.js
 *
 */
import React from 'react';
import { Spinner } from 'native-base';
import Wrapper from './Wrapper';

const Loader = () => (
  <Wrapper>
    <Spinner color="#888888" />
  </Wrapper>
);

export default Loader;
