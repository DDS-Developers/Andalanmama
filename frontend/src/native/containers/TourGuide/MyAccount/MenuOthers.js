/**
 * MenuOthers.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { compose } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import { withAuth } from '../../../providers/Auth';
import { withTourGuide } from '../../../providers/TourGuide';
import Base from '../Scenes/Base';

const SceneMenuOthers = props => {
  const { setVisible, setStep } = props;

  return (
    <Base
      sceneStep={12}
      style={{
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View style={{ height: 150 }} />
      <View
        style={{
          height: 60,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 210,
          left: 40,
          zIndex: 1,
        }}
      >
        <View style={{ marginBottom: 12 }}>
          <Button
            onPress={async () => {
              await AsyncStorage.setItem('ANDALAN_TOUR_GUIDE_MY_ACCOUNT', '1');
              await setVisible(false);
              await setStep(0);
            }}
            style={{
              backgroundColor: '#e83249',
              paddingTop: 6,
              paddingBottom: 7,
              paddingLeft: 25,
              paddingRight: 25,
              borderRadius: 50,
              height: 'auto',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#ffffff', fontSize: 12, textAlign: 'center' }}>Lanjut</Text>
          </Button>
        </View>
        <View
          style={{
            width: 210,
            padding: 20,
            backgroundColor: '#ffffff',
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 14 }}>Pengaturan tambahan dalam aplikasi Andalan Mama</Text>
        </View>
        <View
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: 16,
            borderRightWidth: 0,
            borderTopWidth: 30,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: '#ffffff',
            position: 'relative',
            left: 170,
          }}
        />
      </View>
    </Base>
  );
};

SceneMenuOthers.propTypes = {
  setVisible: PropTypes.func,
  setStep: PropTypes.func,
};

export default compose(
  withAuth,
  withTourGuide,
)(SceneMenuOthers);
