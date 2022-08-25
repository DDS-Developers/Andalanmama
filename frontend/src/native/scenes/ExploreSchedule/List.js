/**
 * scenes/ExploreSchedule/List.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';

import { withExploreSchedule } from '../../providers/ExploreSchedule';
import Section from './Section';
import Loader from './Loader';
import Card from './Card';

// eslint-disable-next-line react/prefer-stateless-function
export class List extends PureComponent {
  render() {
    const { title, loadingList, listSchedules } = this.props;

    return (
      <Section title={title ? 'Telusuri Jadwal Masak' : null}>
        <View style={{ position: 'relative', minHeight: 160 }}>
          {loadingList ? <Loader /> : null}
          {listSchedules && listSchedules.count() > 0 ? (
            <View style={{ flexDirection: 'column' }}>
              {listSchedules.map(item => {
                if (item) {
                  return (
                    <View style={{ marginBottom: 15 }} key={`general-${item.get('id')}`}>
                      <Card item={item} />
                    </View>
                  );
                }
                return null;
              })}
            </View>
          ) : (
            <View>
              <Text style={{ fontSize: 12, color: '#999999' }}>Tidak ada jadwal masak.</Text>
            </View>
          )}
        </View>
      </Section>
    );
  }
}

List.propTypes = {
  title: PropTypes.bool,
  loadingList: PropTypes.bool,
  listSchedules: PropTypes.object,
};

export default withExploreSchedule(List);
