/**
 * components/RecipeDetail/RecipeSlider/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';

export class RecipeSlider extends React.PureComponent {
  renderItem({ item }) {
    return (
      <View
        style={{
          backgroundColor: '#ffffff',
          flex: 1,
          borderRadius: 6,
          marginHorizontal: 10,
        }}
      >
        <Image
          style={{ width: '100%', height: 274, borderRadius: 6 }}
          resizeMode="cover"
          source={{ uri: item.get('image') }}
        />
        <View style={{ paddingVertical: 30, paddingHorizontal: 25 }}>
          <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#E83249', marginBottom: 5 }}>
            {item.get('step') + '. ' + item.get('title')}
          </Text>
          <Text style={{ fontSize: 13, lineHeight: 18 }}>{item.get('description')}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { step } = this.props;
    const { width: viewportWidth } = Dimensions.get('window');
    const stepWidth = viewportWidth - 40;
    const slideWidth = viewportWidth - 70;

    if (step && step.count() > 0) {
      return (
        <Carousel
          data={step.toArray()}
          renderItem={this.renderItem}
          sliderWidth={stepWidth}
          itemWidth={slideWidth}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          activeSlideAlignment="center"
          containerCustomStyle={styles.slider}
        />
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  slider: {
    marginTop: 15,
    overflow: 'visible',
  },
});

RecipeSlider.propTypes = {
  step: PropTypes.object.isRequired,
};

export default RecipeSlider;
