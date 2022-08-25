import React from 'react';
import { View, Image } from 'react-native';
import TitleSchedule from '../TitleSchedule';
import EmptyWrapper from './EmptyWrapper';
import Paragraph from '../../../components/Paragraph';
import IconCooking from '../../../images/icon-cooking.png';

const EmptySchedule = () => (
  <View
    style={{
      flex: 1,
      position: 'relative',
      backgroundColor: '#efefef',
      paddingTop: 24,
      paddingLeft: 15,
      paddingBottom: 24,
      paddingRight: 20,
    }}
  >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TitleSchedule empty />

      <EmptyWrapper style={{ marginTop: -20 }}>
        <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
        <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
          {'Kamu belum mempunyai jadwal masak'}
        </Paragraph>
      </EmptyWrapper>
    </View>
  </View>
);

export default EmptySchedule;
