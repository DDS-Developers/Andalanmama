/**
 * components/Content/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const ContentClear = props => (
  <Wrapper style={{ zIndex: -1, flexGrow: 1 }}>{props.children}</Wrapper>
);

ContentClear.propTypes = {
  children: PropTypes.node,
};

export default ContentClear;
