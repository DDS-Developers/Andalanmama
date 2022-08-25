/**
 * Tour guide
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { withTourGuide } from '../../../providers/TourGuide';
import Scenes from './Scenes';

const TourGuide = props => {
  const { skipped, setSkipped } = props;

  useEffect(() => {
    checkSkipped();
  }, []);

  // Check skipped
  const checkSkipped = async () => {
    const isSkipped = await AsyncStorage.getItem('ANDALAN_TOUR_GUIDE_SKIPPED');
    if (isSkipped) {
      await setSkipped(true);
    } else {
      await setSkipped(false);
    }
  };

  if (!skipped) {
    return (
      <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 999 }}>
        <Scenes />
      </View>
    );
  }
  return null;
};

TourGuide.propTypes = {
  setSkipped: PropTypes.func,
  skipped: PropTypes.bool,
};

export default withTourGuide(TourGuide);
