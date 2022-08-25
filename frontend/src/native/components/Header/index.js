/**
 * components/Header/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text } from 'react-native';
import HeaderLeft from './Left';
import HeaderRight from './Right';
import Wrapper from './Wrapper';
import BodyWrapper from './BodyWrapper';
import TitleWrapper from './TitleWrapper';

const Header = props => (
  <Wrapper style={{ ...props.bgStyled }} {...props.rootSettings}>
    <StatusBar backgroundColor="#e83249" barStyle="light-content" />
    <HeaderLeft loading={props.loading} {...props.leftSettings} />
    <BodyWrapper style={{ marginHorizontal: 40 }}>
      <TitleWrapper>{props.title}</TitleWrapper>
    </BodyWrapper>
    <HeaderRight
      loading={props.loading}
      {...props.rightSettings}
      ContentComponent={props.ContentComponent}
    />
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  statusBar: PropTypes.bool,
  leftSettings: PropTypes.object,
  rightSettings: PropTypes.object,
  rootSettings: PropTypes.object,
  ContentComponent: PropTypes.node,
  bgStyled: PropTypes.object,
  loading: PropTypes.bool,
};

export default Header;
