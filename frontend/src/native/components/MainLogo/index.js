/**
 * components/MainLogo/index.js
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Wrapper from './Wrapper';
import Logo from './Logo.png';

const MainLogo = props => (
  <Wrapper {...props}>
    <Image style={{ height: props.small ? 35 : 90 }} source={Logo} resizeMode="contain" />
  </Wrapper>
);

export default MainLogo;
