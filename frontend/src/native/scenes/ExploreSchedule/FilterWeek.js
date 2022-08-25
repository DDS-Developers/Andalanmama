/**
 * scenes/ExploreSchedule/FilterWeek.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';
import moment from 'moment';

import { withExploreSchedule } from '../../providers/ExploreSchedule';
import Section from './Section';

const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
const currentDay = moment().day();

// eslint-disable-next-line react/prefer-stateless-function
export class FilterWeek extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedDays: -1,
    };
  }

  onChange = async index => {
    if (this.state.selectedDays === index) {
      await this.props.resetFilter();
      this.setState({ selectedDays: -1 });
      await this.props.loadList();
    } else {
      this.setState({ selectedDays: index });
      await this.props.resetFilter();
      await this.props.setUseFilter(true);
      await this.props.setWeek(this.getSelectedDate(index));
      await this.props.loadList();
    }
  };

  getSelectedDate = index => {
    const date = moment();
    const range = index - currentDay;
    if (range > 0) {
      date.add(range, 'days');
    } else {
      date.subtract(range * -1, 'days');
    }
    return date.format('YYYY-MM-DD');
  };

  render() {
    const styles = {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 6,
      paddingHorizontal: 2,
      backgroundColor: '#ffffff',
      elevation: 5,
      height: 50,
    };

    return (
      <Section title="Minggu Ini">
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: -3,
            marginRight: -3,
          }}
        >
          {days.map((day, index) => {
            const newStyles = Object.create(styles);
            let textColor = '#999999';
            if (index === this.state.selectedDays) {
              newStyles.backgroundColor = '#e83249';
              textColor = '#ffffff';
            } else if (index === currentDay) {
              newStyles.backgroundColor = '#f7941D';
              textColor = '#ffffff';
            }

            return (
              <View
                key={`day-${day}`}
                style={{
                  paddingHorizontal: 3,
                  height: 50,
                  width: `${100 / 7}%`,
                }}
              >
                <TouchableOpacity onPress={() => this.onChange(index)} style={newStyles}>
                  <Text style={{ fontSize: 10, color: textColor, textTransform: 'uppercase' }}>
                    {day}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </Section>
    );
  }
}

FilterWeek.propTypes = {
  // week: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setUseFilter: PropTypes.func,
  setWeek: PropTypes.func,
  resetFilter: PropTypes.func,
  loadList: PropTypes.func,
};

export default withExploreSchedule(FilterWeek);
