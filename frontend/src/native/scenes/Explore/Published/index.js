import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { View, Dimensions, Text } from 'react-native';
import { Spinner } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { withAuth } from '../../../providers/Auth';
import { withExplore } from '../../../providers/Explore';
import CardRecipe from '../../../components/CardRecipe';
import LoaderWrapper from '../Loader';

// eslint-disable-next-line react/prefer-stateless-function
export class Published extends PureComponent {
  componentDidMount() {
    this.props.loadExplorePublished();
  }

  loader() {
    const { loadingPublished } = this.props;
    if (loadingPublished) {
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

  renderList() {
    const { explorePublished } = this.props;
    let slideCount = 0;
    if (explorePublished) {
      slideCount = explorePublished.count();
    }

    if (slideCount > 0) {
      const { width: viewportWidth } = Dimensions.get('window');
      const sliderWidth = viewportWidth;
      const slideWidth = viewportWidth / 3;
      const spaceWidth = 10 * slideCount + 30;
      let containerWidth = viewportWidth;
      if (slideCount > 2) {
        containerWidth = slideWidth * slideCount + spaceWidth;
      }
      return (
        <Carousel
          data={explorePublished.toArray()}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={slideWidth}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          activeSlideAlignment="start"
          containerCustomStyle={{ overflow: 'visible' }}
          contentContainerCustomStyle={{
            width: containerWidth,
          }}
          slideStyle={{ marginRight: 10 }}
        />
      );
    }
    return null;
  }

  render() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      return (
        <View>
          <View style={{ paddingLeft: 20, paddingBottom: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 15 }}>
              Resep Terpublikasi
            </Text>
            <View style={{ position: 'relative', minHeight: 160 }}>
              {this.loader()}
              {this.renderList()}
            </View>
          </View>
        </View>
      );
    }
    return null;
  }
}

Published.propTypes = {
  explorePublished: PropTypes.object,
  loadingPublished: PropTypes.bool,
  loadExplorePublished: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default compose(
  withExplore,
  withAuth,
)(Published);
