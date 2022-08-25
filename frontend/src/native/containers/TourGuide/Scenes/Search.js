/**
 * Search.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { compose } from 'redux';

import { withAuth } from '../../../providers/Auth';
import { withTourGuide } from '../../../providers/TourGuide';
import { withExplore } from '../../../providers/Explore';
import Base from './Base';

const SceneSearch = props => {
  const { nextStep, loggedIn, banner } = props;

  return (
    <Base
      sceneStep={8}
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
          height: loggedIn ? 147 : (banner.count() > 1 ? 375 :345),
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View style={{ height: 78 }} />
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: loggedIn ? 230 : (banner.count() > 1 ? 450 :420),
          left: 100,
          zIndex: 1,
        }}
      >
        <View
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: 0,
            borderRightWidth: 16,
            borderBottomWidth: 50,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: '#ffffff',
            position: 'relative',
            left: 50,
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
          <Text style={{ fontSize: 14 }}>Temukan pengguna dan Resep Andalan kamu di sini</Text>
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

SceneSearch.propTypes = {
  nextStep: PropTypes.func,
  loggedIn: PropTypes.bool,
  banner: PropTypes.object
};

export default compose(
  withAuth,
  withTourGuide,
  withExplore
)(SceneSearch);
