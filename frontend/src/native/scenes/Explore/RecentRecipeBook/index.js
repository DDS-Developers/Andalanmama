import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { compose } from 'redux';
import { View, Dimensions, Text } from 'react-native';
import { Spinner } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { withExplore } from '../../../providers/Explore';
import CardRecipe from '../../../components/CardRecipe';
import LoaderWrapper from '../Loader';

// eslint-disable-next-line react/prefer-stateless-function
export class RecentRecipeBook extends PureComponent {
  componentDidMount() {
    this.props.loadExploreRecentRecipeBook();
  }

  loader() {
    const { loadingRecentRecipeBook } = this.props;
    if (loadingRecentRecipeBook) {
      return (
        <LoaderWrapper>
          <Spinner color="#888888" />
        </LoaderWrapper>
      );
    }
    return null;
  }

  renderItem({ item }) {
    return (
      <CardRecipe
        full
        imageHeight={132}
        image={item.get('recipes')}
        title={item.get('title')}
        uploader={item.getIn(['user', 'fullname'])}
        id={item.get('id')}
      />
    );
  }

  render() {
    const { exploreRecentRecipeBook } = this.props;
    let slideCount = 0;
    if (exploreRecentRecipeBook) {
      slideCount = exploreRecentRecipeBook.count();
    }

    const { width: viewportWidth } = Dimensions.get('window');
    const sliderWidth = viewportWidth;
    const slideWidth = viewportWidth / 3;
    const spaceWidth = 10 * slideCount + 30;
    return (
      <View style={{ paddingLeft: 20, paddingBottom: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 15 }}>
          Buku Resep Terbaru
        </Text>
        <View style={{ position: 'relative', minHeight: 160 }}>
          {this.loader()}
          {exploreRecentRecipeBook && slideCount > 1 ? (
            <Carousel
              data={exploreRecentRecipeBook.toArray()}
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
            <View style={{ flex: 1, position: 'relative', zIndex: 1 }}>
              {exploreRecentRecipeBook.map(item => (
                <View
                  style={{ width: slideWidth, marginTop: 15 }}
                  key={`recipe-book-${item.get('id')}`}
                >
                  <CardRecipe
                    full
                    imageHeight={132}
                    image={item.get('recipes')}
                    title={item.get('title')}
                    uploader={item.getIn(['user', 'fullname'])}
                    id={item.get('id')}
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  }
}

RecentRecipeBook.propTypes = {
  exploreRecentRecipeBook: PropTypes.object,
  loadingRecentRecipeBook: PropTypes.bool,
  loadExploreRecentRecipeBook: PropTypes.func,
};

export default withExplore(RecentRecipeBook);
