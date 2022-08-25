/**
 * scenes/ExploreSchedule/FilterDate/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import Title from './Title';

// eslint-disable-next-line react/prefer-stateless-function
export const Section = ({ title, children, noSpaceRight }) => (
  <View
    style={{
      marginBottom: 40,
      paddingLeft: 20,
      paddingRight: noSpaceRight ? 0 : 30,
    }}
  >
    {title ? <Title>{title}</Title> : null}
    <View>{children}</View>
  </View>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  noSpaceRight: PropTypes.bool,
};

export default Section;
