/**
 * Scroll.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';

import { withTourGuide } from '../../../providers/TourGuide';
import Base from './Base';
import ScrollThumb from './Assets/Scroll.png';

const SceneScroll = props => {
  const { nextStep } = props;

  return (
    <Base
      sceneStep={7}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
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
          padding: 40,
        }}
      >
        <View style={{ marginBottom: 25 }}>
          <Image
            style={{
              width: 80,
              alignSelf: 'center',
            }}
            source={ScrollThumb}
            resizeMode="contain"
          />
        </View>
        <View style={{ width: 120 }}>
          <Text
            style={{
              fontSize: 14,
              color: '#ffffff',
              marginBottom: 20,
            }}
          >
            Geser ke bawah dan ke atas
          </Text>
          <View>
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
      </View>
    </Base>
  );
};

SceneScroll.propTypes = {
  nextStep: PropTypes.func,
};

export default withTourGuide(SceneScroll);
