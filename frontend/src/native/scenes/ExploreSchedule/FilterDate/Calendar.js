/**
 * components/Dialog.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Dimensions } from 'react-native';
import { View, Text, Icon } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

import ButtonPrimary from '../../../components/ButtonPrimary';
import { withExploreSchedule } from '../../../providers/ExploreSchedule';

const buttonFilter = false;
const deviceWidth = Dimensions.get('window').width;
let calendarWidth = deviceWidth * 0.9 - 30;
if (calendarWidth > 420) {
  calendarWidth = 420;
}
calendarWidth -= 30;

export class Calendar extends PureComponent {
  constructor(props) {
    super(props);

    const years = moment().year();
    const days = moment()
      .locale('id')
      .format('ddd, MMMM DD');

    this.state = {
      selectedYear: years,
      selectedDays: days,
    };
  }

  onDateChange = async value => {
    const date = await moment(value).format('YYYY-MM-DD');
    await this.props.resetFilter();
    await this.props.setUseFilter(true);
    await this.props.setDateFrom(date);
    await this.props.setDialogDate(false);
    await this.props.loadList();
  };

  onDateRangeChange = (date, type) => {
    if (type === 'END_DATE') {
      this.props.setDateTo(date);
    } else {
      this.props.setDateFrom(date);
    }
  };

  onFilter = async () => {
    await this.props.resetFilter();
    await this.props.setDialogDate(false);
    await this.props.loadList();
  };

  render() {
    const { dialogDate, setDialogDate } = this.props;

    if (dialogDate) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(38, 38, 38, 0.7)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
          }}
        >
          <View
            style={{
              backgroundColor: '#d5d5d5',
              paddingTop: 22,
              paddingLeft: 15,
              paddingBottom: 12,
              paddingRight: 15,
              borderRadius: 5,
              maxWidth: 420,
              width: '90%',
            }}
          >
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <View style={{ flexDirection: 'column', marginBottom: 20 }}>
                <Text style={{ fontSize: 13, color: 'rgba(0,0,0,0.5)' }}>
                  {this.state.selectedYear}
                </Text>
                <Text style={{ fontSize: 24, color: 'rgba(0,0,0,1)' }}>
                  {this.state.selectedDays}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 'auto',
                  width: 30,
                  textAlign: 'right',
                }}
              >
                <TouchableOpacity onPress={() => setDialogDate(false)}>
                  <Icon
                    type="MaterialIcons"
                    name="close"
                    style={{ fontSize: 24, color: '#888888' }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ backgroundColor: '#ffffff', borderRadius: 4, paddingBottom: 30 }}>
              <CalendarPicker
                width={calendarWidth}
                height={calendarWidth}
                fontSize={12}
                onDateChange={this.onDateChange}
                previousIcon={<Icon type="MaterialIcons" name="keyboard-arrow-left" />}
                nextIcon={
                  <Icon
                    type="MaterialIcons"
                    name="keyboard-arrow-right"
                    style={{ textAlign: 'right' }}
                  />
                }
                todayBackgroundColor="#F7941D"
                todayTextStyle={{ color: '#ffffff' }}
                startFromMonday
                allowRangeSelection={false}
                // minDate={minDate}
                selectedDayColor="#e83249"
                selectedDayTextColor="#ffffff"
              />
            </View>
            {buttonFilter ? (
              <View style={{ marginTop: 10 }}>
                <ButtonPrimary style={{ justifyContent: 'center' }} onPress={this.onFilter}>
                  Filter Sekarang
                </ButtonPrimary>
              </View>
            ) : null}
          </View>
        </View>
      );
    }
    return null;
  }
}

Calendar.propTypes = {
  dialogDate: PropTypes.bool,
  setUseFilter: PropTypes.func,
  loadList: PropTypes.func,
  resetFilter: PropTypes.func,
  setDialogDate: PropTypes.func,
  setDateFrom: PropTypes.func,
  setDateTo: PropTypes.func,
};

export default withExploreSchedule(Calendar);
