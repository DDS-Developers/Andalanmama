/**
 * scenes/Help/Title.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../components/Paragraph';

const Title = props => (
  <Paragraph
    textStyles={{ fontWeight: 'bold', size: 400 }}
    style={{ marginTop: 25, marginBottom: 20 }}
  >
    {props.children}
  </Paragraph>
);

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
