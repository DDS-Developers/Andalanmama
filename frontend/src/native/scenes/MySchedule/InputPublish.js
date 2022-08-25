/**
 * TitleSchedule/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Spinner } from 'native-base';

import SwitchButton from '../../components/SwitchButton';
import { withMyScheduleItem } from '../../providers/MyScheduleItem';

const InputPublish = ({ scheduleData, updateScheduleStatus, loadingStatus }) => {
  const date = scheduleData.get('date');
  let status = false;
  const items = scheduleData.get('schedules');
  if (items) {
    const value = items.get(0).get('status', 0);
    status = value === 1;
  }

  return (
    <View
      style={{
        marginTop: 10,
        paddingVertical: 28,
        paddingHorizontal: 24,
        borderTopColor: '#e83249',
        borderTopWidth: 1,
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10 }}>Publikasikan</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 14, color: '#7b7b7b', flex: 1, marginRight: 60 }}>
          Dengan mengunggah resep ini, pengguna lain dapat melihat resep buatanmu
        </Text>
        <View style={{ marginLeft: 'auto' }}>
          {loadingStatus ? (
            <Spinner color="#999999" size="small" />
          ) : (
            <SwitchButton
              value={status}
              onValueChange={value => updateScheduleStatus(date, value)}
            />
          )}
        </View>
      </View>
    </View>
  );
};

InputPublish.propTypes = {
  scheduleData: PropTypes.object.isRequired,
  updateScheduleStatus: PropTypes.func,
  loadingStatus: PropTypes.bool,
};

export default withMyScheduleItem(InputPublish);
