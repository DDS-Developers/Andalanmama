/**
 * SceneIntro.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { withTourGuide } from '../../../../providers/TourGuide';
import ButtonText from '../../../../components/ButtonText';
import Base from './Base';

const SceneIntro = props => {
  const { setStep, setSkipped } = props;

  return (
    <Base
      sceneStep={1}
      open
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(38, 38, 38, 0.7)',
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          paddingTop: 20,
          paddingBottom: 15,
          paddingLeft: 25,
          paddingRight: 25,
          maxWidth: 300,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#e83249',
            marginBottom: 10,
            marginTop: 0,
          }}
        >
          Selamat Datang!
        </Text>
        <Text>
          Andalan mama akan memulai tutorial untuk kamu dalam menggunakan aplikasi, sudah siap
          memulai tutorial?
        </Text>
        <View style={{ marginTop: 12, flexDirection: 'column', alignItems: 'flex-end' }}>
          <View style={{ flexDirection: 'row' }}>
            <ButtonText
              onPress={async () => {
                await AsyncStorage.setItem('ANDALAN_TOUR_GUIDE_SKIPPED', '1');
                await setSkipped(true);
              }}
              textStyles={{ fontSize: 13, fontWeight: 'bold', marginRight: 24, opacity: 0.6 }}
            >
              LEWATI TUTORIAL
            </ButtonText>
            <ButtonText
              onPress={() => setStep(2)}
              textStyles={{ fontSize: 13, fontWeight: 'bold' }}
            >
              MULAI
            </ButtonText>
          </View>
        </View>
      </View>
    </Base>
  );
};

SceneIntro.propTypes = {
  setSkipped: PropTypes.func,
  setStep: PropTypes.func,
};

export default withTourGuide(SceneIntro);
