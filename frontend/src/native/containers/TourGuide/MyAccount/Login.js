/**
 * Login.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { compose } from 'redux';

import { withAuth } from '../../../providers/Auth';
import { withTourGuide } from '../../../providers/TourGuide';
import Base from '../Scenes/Base';

const SceneLogin = props => {
  const { nextStep } = props;

  return (
    <Base
      sceneStep={10}
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
          height: 85,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View style={{ height: 130 }} />
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 215,
          left: 40,
          zIndex: 1,
        }}
      >
        <View
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: 16,
            borderRightWidth: 0,
            borderBottomWidth: 50,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: '#ffffff',
            position: 'relative',
            left: 170,
          }}
        />
        <View
          style={{
            width: 210,
            padding: 20,
            backgroundColor: '#ffffff',
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 14 }}>
            Daftar atau Masuk untuk dapatkan inspirasi masak Andalan Mama
          </Text>
        </View>
        <View style={{ marginTop: 12 }}>
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
      </View>
    </Base>
  );
};

SceneLogin.propTypes = {
  nextStep: PropTypes.func,
};

export default compose(
  withAuth,
  withTourGuide,
)(SceneLogin);
