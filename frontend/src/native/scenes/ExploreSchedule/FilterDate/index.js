/**
 * scenes/ExploreSchedule/FilterDate/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { withExploreSchedule } from '../../../providers/ExploreSchedule';

import Section from '../Section';

// eslint-disable-next-line react/prefer-stateless-function
export class FilterDate extends PureComponent {
  render() {
    const { setDialogDate } = this.props;

    return (
      <Section title="Pilih Tanggal">
        <TouchableOpacity onPress={() => setDialogDate(true)}>
          <View
            style={{
              backgroundColor: '#ffffff',
              height: 46,
              boxShadow: '0 0 8px 4px rgba(0,0,0,0.1)',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                padding: 14,
              }}
            >
              <Text style={{ fontSize: 13, color: '#e83249' }}>
                Temukan jadwal masak berdasarkan tanggal
              </Text>
            </View>
            <View
              style={{
                width: 46,
                height: 46,
                paddingVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: '#e83249',
                  paddingHorizontal: 10,
                }}
              >
                <Icon
                  type="MaterialIcons"
                  name="event"
                  style={{ fontSize: 24, color: '#e83249' }}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Section>
    );
  }
}

FilterDate.propTypes = {
  setDialogDate: PropTypes.func,
};

export default withExploreSchedule(FilterDate);
