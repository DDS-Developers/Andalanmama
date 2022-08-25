/**
 * FilterWaiting.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { compose } from 'redux';

import { withTourGuide } from '../../../providers/TourGuide';
import { withMyRecipe } from '../../../providers/MyRecipe';
import Base from '../Scenes/Base';

const SceneFilterWaiting = props => {
  const { nextStep, changeMyRecipeFilterStatus, changeMyRecipeFilterLabel } = props;

  return (
    <Base
      sceneStep={20}
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
          height: 60,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View style={{ height: 88 }} />
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 150,
          right: 30,
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
            left: 120,
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
            Halaman ini untuk menampilkan resep kamu yang masih menunggu persetujuan Andalan Mama
          </Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <Button
            onPress={() => {
              changeMyRecipeFilterStatus('draft');
              changeMyRecipeFilterLabel('Draft');
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
      </View>
    </Base>
  );
};

SceneFilterWaiting.propTypes = {
  nextStep: PropTypes.func,
  changeMyRecipeFilterStatus: PropTypes.func,
  changeMyRecipeFilterLabel: PropTypes.func,
};

export default compose(
  withMyRecipe,
  withTourGuide,
)(SceneFilterWaiting);
