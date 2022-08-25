/**
 * MenuAccount.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

import { withTourGuide } from '../../../../providers/TourGuide';
import Base from './Base';

const SceneMenuAccount = props => {
  const { setStep } = props;

  return (
    <Base
      sceneStep={6}
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
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
            right: 20,
            zIndex: 1,
          }}
        >
          <View style={{ marginBottom: 12 }}>
            <Button
              onPress={() => setStep(7)}
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
              Atur aplikasi Andalan Mama dan lengkapi profil kamu di sini
            </Text>
          </View>
          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderLeftWidth: 16,
              borderRightWidth: 0,
              borderTopWidth: 50,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderTopColor: '#ffffff',
              position: 'relative',
              left: 170,
            }}
          />
        </View>
      </View>
    </Base>
  );
};

SceneMenuAccount.propTypes = {
  setStep: PropTypes.func,
};

export default withTourGuide(SceneMenuAccount);
