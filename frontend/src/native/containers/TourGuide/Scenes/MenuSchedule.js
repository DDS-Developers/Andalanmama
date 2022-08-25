/**
 * MenuSchedule.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

import { withTourGuide } from '../../../providers/TourGuide';
import Base from './Base';

const SceneMenuSchedule = props => {
  const { nextStep } = props;

  return (
    <Base
      sceneStep={3}
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 48,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(38, 38, 38, 0.7)' }}>
        <View
          style={{
            position: 'absolute',
            bottom: -10,
            left: 50,
            zIndex: 1,
          }}
        >
          <View style={{ marginBottom: 12 }}>
            <Button
              onPress={() => nextStep()}
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
            <Text style={{ fontSize: 14 }}>
              Buat jadwal masak kamu atau temukan jadwal masak pengguna lainnya di sini
            </Text>
          </View>
          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderLeftWidth: 0,
              borderRightWidth: 16,
              borderTopWidth: 50,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderTopColor: '#ffffff',
              position: 'relative',
              left: 70,
            }}
          />
        </View>
      </View>
    </Base>
  );
};

SceneMenuSchedule.propTypes = {
  nextStep: PropTypes.func,
};

export default withTourGuide(SceneMenuSchedule);
