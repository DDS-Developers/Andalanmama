/**
 * Calendar.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import { withTourGuide } from '../../../providers/TourGuide';
import Base from '../Scenes/Base';

const SceneCalendar = props => {
  const { setVisible } = props;

  return (
    <Base
      sceneStep={16}
      style={{
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        top: 50,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(38, 38, 38, 0.7)',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 280,
          right: 20,
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
            Tombol Kalender untuk Melihat keseluruhan jadwal masak kamu
          </Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <Button
            onPress={async () => {
              await AsyncStorage.setItem('ANDALAN_TOUR_GUIDE_MY_SCHEDULE', '1');
              await setVisible(false);
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
      </View>
    </Base>
  );
};

SceneCalendar.propTypes = {
  setVisible: PropTypes.func,
};

export default withTourGuide(SceneCalendar);
