/**
 * scenes/Help/Title.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import PLib from '../../components/Paragraph';

const Paragraph = props => {
  const { children, ...others } = props;
  return (
    <PLib style={{ marginBottom: 20 }} {...others}>
      {props.children}
    </PLib>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node,
};

export default Paragraph;
