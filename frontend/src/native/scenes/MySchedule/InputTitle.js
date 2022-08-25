/**
 * TitleSchedule/index.js
 *
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Icon, View, Spinner } from 'native-base';

import { withMyScheduleItem } from '../../providers/MyScheduleItem';
import FieldText from '../../components/FieldText';
import FieldErrorInfo from '../../components/FieldErrorInfo';

const InputTitle = ({ scheduleData, updateScheduleTitle, loadingTitle }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const date = scheduleData.get('date');

  useEffect(() => {
    let schTitle = '';
    const items = scheduleData.get('schedules');
    if (items) {
      schTitle = items.get(0).get('title', 'Jadwal Masak Andalanku');
    }
    setTitle(schTitle);
  }, [scheduleData]);

  return (
    <View style={{ flexDirection: 'row' }}>
      <FieldText
        style={{ paddingRight: 30 }}
        stackedLabel
        label="Beri Judul"
        value={title}
        error={error}
        onBlur={() => {
          if (title === '') {
            setError(true);
          } else {
            setError(false);
          }
        }}
        onChangeText={value => setTitle(value)}
      />
      {loadingTitle ? (
        <Spinner color="#999999" size="small" />
      ) : (
        <TouchableOpacity
          style={{ position: 'absolute', top: 30, right: 0, width: 20, height: 20 }}
          onPress={() => updateScheduleTitle(date, title)}
        >
          <Icon style={{ color: '#e83249', fontSize: 20 }} type="MaterialIcons" name="edit" />
        </TouchableOpacity>
      )}
      {error ? (
        <View>
          <FieldErrorInfo message="Judul harus diisi" bottom />
        </View>
      ) : null}
    </View>
  );
};

InputTitle.propTypes = {
  scheduleData: PropTypes.object.isRequired,
  updateScheduleTitle: PropTypes.func,
  loadingTitle: PropTypes.bool,
};

export default withMyScheduleItem(InputTitle);
