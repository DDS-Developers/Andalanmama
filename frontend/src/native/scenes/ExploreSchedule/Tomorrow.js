/**
 * scenes/ExploreSchedule/Tomorrow.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { View, Text } from 'native-base';
import Carousel from 'react-native-snap-carousel';

import { withExploreSchedule } from '../../providers/ExploreSchedule';
import Section from './Section';
import Loader from './Loader';
import Card from './Card';

// eslint-disable-next-line react/prefer-stateless-function
export class Tomorrow extends PureComponent {
  renderItem({ item }) {
    return <Card item={item} />;
  }

  render() {
    const { tomorrowSchedules, loadingTomorrow } = this.props;

    let slideCount = 0;
    if (tomorrowSchedules) {
      slideCount = tomorrowSchedules.count();
    }
    const { width: viewportWidth } = Dimensions.get('window');
    const sliderWidth = viewportWidth;
    const slideWidth = viewportWidth * 0.7;
    const spaceWidth = 10 * slideCount + 30;

    return (
      <Section title="Jadwal Masak Besok">
        <View style={{ position: 'relative', minHeight: 160 }}>
          {loadingTomorrow ? <Loader /> : null}
          {slideCount > 0 ? (
            <React.Fragment>
              {slideCount > 1 ? (
                <Carousel
                  data={tomorrowSchedules.toArray()}
                  renderItem={this.renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={slideWidth}
                  inactiveSlideScale={1}
                  inactiveSlideOpacity={1}
                  activeSlideAlignment="start"
                  containerCustomStyle={{ overflow: 'visible' }}
                  contentContainerCustomStyle={{
                    width: slideWidth * slideCount + spaceWidth,
                  }}
                  slideStyle={{ marginRight: 10 }}
                />
              ) : (
                <View style={{ flex: 1 }}>
                  {this.renderItem({ item: tomorrowSchedules.get(0) })}
                </View>
              )}
            </React.Fragment>
          ) : (
            <View>
              <Text style={{ fontSize: 12, color: '#999999' }}>
                Tidak ada jadwal masak untuk besok.
              </Text>
            </View>
          )}
        </View>
      </Section>
    );
  }
}

Tomorrow.propTypes = {
  loadingTomorrow: PropTypes.bool,
  tomorrowSchedules: PropTypes.object,
};

export default withExploreSchedule(Tomorrow);
