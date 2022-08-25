import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, Text } from 'react-native';
import { Spinner } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { withExplore } from '../../../providers/Explore';
import CardRecipe from '../../../components/CardRecipe';
import LoaderWrapper from '../Loader';

// eslint-disable-next-line react/prefer-stateless-function
export class PopularRecipe extends PureComponent {
  componentDidMount() {
    this.props.loadExplorePopularRecipe();
  }

  loader() {
    const { loadingPopularRecipe } = this.props;
    if (loadingPopularRecipe) {
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
        image={item.get('image')}
        title={item.get('name')}
        uploader={item.getIn(['user', 'fullname'])}
        id={item.get('id')}
        showCount
        likeCount={item.get('like_count')}
        commentCount={item.get('comment_count')}
      />
    );
  }

  render() {
    const { explorePopularRecipe } = this.props;
    let slideCount = 0;
    if (explorePopularRecipe) {
      slideCount = explorePopularRecipe.count();
    }
    const { width: viewportWidth } = Dimensions.get('window');
    const sliderWidth = viewportWidth;
    const slideWidth = viewportWidth / 3;
    const spaceWidth = 10 * slideCount + 30;
    return (
      <View style={{ paddingLeft: 20, paddingBottom: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 15 }}>Resep Terpopuler</Text>
        <View style={{ position: 'relative', minHeight: 160 }}>
          {this.loader()}
          {explorePopularRecipe && slideCount > 0 ? (
            <Carousel
              data={explorePopularRecipe.toArray()}
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
          ) : null}
        </View>
      </View>
    );
  }
}

PopularRecipe.propTypes = {
  explorePopularRecipe: PropTypes.object,
  loadingPopularRecipe: PropTypes.bool,
  loadExplorePopularRecipe: PropTypes.func,
};

export default withExplore(PopularRecipe);
