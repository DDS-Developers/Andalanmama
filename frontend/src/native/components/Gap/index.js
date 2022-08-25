import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Gap = ({ height, width }) => <View style={{ height, width }} />;

Gap.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Gap;
