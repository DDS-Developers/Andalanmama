/**
 * components/IconText/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, Icon } from 'native-base';
import Wrapper from './Wrapper';

const IconText = props => (
  <Wrapper>
    <Icon type={props.iconType} name={props.iconName} style={props.iconStyles} />
    <Text style={props.textStyles}>{props.text}</Text>
  </Wrapper>
);

IconText.propTypes = {
  iconType: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconStyles: PropTypes.object,
  textStyles: PropTypes.object,
  text: PropTypes.string,
};

export default IconText;
