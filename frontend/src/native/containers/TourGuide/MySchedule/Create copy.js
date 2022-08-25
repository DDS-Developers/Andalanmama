/**
 * Create.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

import * as NavigationService from '../../../helpers/NavigationService';
import { withTourGuide } from '../../../providers/TourGuide';
import Base from '../Scenes/Base';

const SceneCreate = props => {
  const { nextStep } = props;

  return (
    <Base
      sceneStep={16}
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
      <View style={{ height: 70 }} />
      <View
        style={{
          height: 58,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 130,
          right: 10,
          zIndex: 1,
        }}
      >
        <View style={{ marginBottom: 12 }}>
          <Button
            onPress={async () => {
              await nextStep();
              await NavigationService.navigate('ExploreSchedule');
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
          <Text style={{ fontSize: 14 }}>
            Buat dan Tambahkan Jadwal Masak kamu dengan menekan tombol tambah
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
            left: 180,
          }}
        />
      </View>
    </Base>
  );
};

SceneCreate.propTypes = {
  nextStep: PropTypes.func,
};

export default withTourGuide(SceneCreate);
