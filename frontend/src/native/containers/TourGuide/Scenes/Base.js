/**
 * Tour guide
 */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import { withTourGuide } from '../../../providers/TourGuide';

const SceneBase = props => {
  const { step, sceneStep, open, style, children } = props;
  const [isOpen, setIsOpen] = useState(open);

  const defAnim = open ? 1 : 0;
  const fadeAnim = useRef(new Animated.Value(defAnim)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        delay: 200,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
    if (step === sceneStep) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        delay: 200,
        duration: 600,
        useNativeDriver: true,
      }).start();

      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [step]);

  return (
    <Animated.View
      pointerEvents={isOpen ? 'auto' : 'none'}
      style={[
        style,
        {
          flex: 1,
          opacity: fadeAnim,
        },
      ]}
    >
      {isOpen ? children : null}
    </Animated.View>
  );
};

SceneBase.propTypes = {
  style: PropTypes.object,
  open: PropTypes.bool,
  step: PropTypes.number,
  sceneStep: PropTypes.number,
  children: PropTypes.node,
};

export default withTourGuide(SceneBase);
