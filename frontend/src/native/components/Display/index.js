/**
 * components/Display/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { StatusBar } from 'react-native';

const Display = props => (
  <React.Fragment>
    {props.visible ? (
      <Container>
        <StatusBar barStyle="light-content" />
        {props.children}
      </Container>
    ) : null}
  </React.Fragment>
);

Display.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
};

export default Display;
