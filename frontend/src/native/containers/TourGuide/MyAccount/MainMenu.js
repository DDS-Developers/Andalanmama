/**
 * MainMenu.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { compose } from 'redux';

import { withApp } from '../../../providers/App';
import { withAuth } from '../../../providers/Auth';
import { withTourGuide } from '../../../providers/TourGuide';
import Base from '../Scenes/Base';

const SceneMainMenu = props => {
  const { nextStep, scrollViewRef } = props;

  return (
    <Base
      sceneStep={11}
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
          height: 275,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View style={{ flex: 1 }} />
      <View
        style={{
          height: 72,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 127,
          left: 20,
          zIndex: 1,
        }}
      >
        <View style={{ marginBottom: 12 }}>
          <Button
            onPress={() => {
              if (scrollViewRef) {
                scrollViewRef.scrollTo({ x: 0, y: 140, animated: true });
              }
              nextStep();
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
          <Text style={{ fontSize: 14 }}>Fitur lainnya yang dapat kamu telusuri</Text>
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

SceneMainMenu.propTypes = {
  nextStep: PropTypes.func,
  scrollViewRef: PropTypes.object,
};

export default compose(
  withAuth,
  withApp,
  withTourGuide,
)(SceneMainMenu);
