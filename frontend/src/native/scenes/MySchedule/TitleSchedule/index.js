/**
 * TitleSchedule/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text } from 'react-native';
import modelHelper from '../../../helpers/Model';
import ScheduleWrapper from './Wrapper';
import Left from './Left';
import DayText from './DayText';
import DayBadge from './DayBadge';
import Body from './Body';
import Separator from './Separator';

const TitleSchedule = props => {
  const { date, empty } = props;
  const scheduleToday = moment().format('YYYY-MM-DD');
  const scheduleTomorrow = moment()
    .add(1, 'days')
    .format('YYYY-MM-DD');
  let title = null;
  switch (date) {
    case scheduleToday:
      title = 'Jadwal Masak Hari ini';
      break;
    case scheduleTomorrow:
      title = 'Jadwal Masak Besok';
      break;
    default:
      title = 'Jadwal Masak';
  }

  const dayNow = modelHelper.getDay(date);
  const dateNow = modelHelper.getDate(date);
  return (
    <ScheduleWrapper>
      <Left>
        <DayText>{dayNow}</DayText>
        <DayBadge>
          <Text style={{ color: '#ffffff', fontSize: 24 }}>{dateNow}</Text>
        </DayBadge>
      </Left>
      <Body>
        <Text style={{ textAlign: 'right', paddingBottom: 12 }}>
          {empty ? 'Tidak ada jadwal hari ini' : title}
        </Text>
        <Separator />
      </Body>
    </ScheduleWrapper>
  );
};

TitleSchedule.propTypes = {
  date: PropTypes.string,
  empty: PropTypes.bool,
};

export default TitleSchedule;
