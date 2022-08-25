/**
 * scenes/MyRecipe/Filter/FilterIcon.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from './IconWrapper';
import IconBox from './IconBoxWrapper';

const FilterIcon = props => {
  const { color, name } = props;

  if (name === 'sort-variant') {
    return <Icon color={color} type="MaterialIcons" name={name} />;
  }
  return <IconBox color={color} type="MaterialIcons" name={name} />;
};

FilterIcon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
};

export default FilterIcon;
