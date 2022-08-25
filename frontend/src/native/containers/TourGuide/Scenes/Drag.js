/**
 * Drag.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import * as NavigationService from '../../../helpers/NavigationService';
import { withTourGuide } from '../../../providers/TourGuide';
import Base from './Base';
import DragThumb from './Assets/Drag.png';

const SceneDrag = props => {
  const { setVisible, setStep } = props;

  return (
    <Base
      sceneStep={10}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
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
          padding: 80,
        }}
      >
        <View style={{ marginBottom: 30 }}>
          <Image
            style={{
              height: 70,
              alignSelf: 'center',
            }}
            source={DragThumb}
            resizeMode="contain"
          />
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 14,
              color: '#ffffff',
              marginBottom: 20,
            }}
          >
            Geser Kesamping kiri dan kanan
          </Text>
          <View>
            <Button
              onPress={async () => {
                await AsyncStorage.setItem('ANDALAN_TOUR_GUIDE_EXPLORER', '1');
                await setVisible(false);
                await setStep(0);
                await NavigationService.navigate('MyAccount');
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
      </View>
    </Base>
  );
};

SceneDrag.propTypes = {
  setVisible: PropTypes.func,
  setStep: PropTypes.func,
};

export default withTourGuide(SceneDrag);
