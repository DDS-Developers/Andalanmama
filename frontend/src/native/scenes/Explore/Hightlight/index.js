import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import { withExplore } from '../../../providers/Explore';
import CardRecipe from '../../../components/CardRecipe';
import LoaderWrapper from '../Loader';

// eslint-disable-next-line react/prefer-stateless-function
export class Hightlight extends PureComponent {
  componentDidMount() {
    this.props.loadExploreHighlight();
  }

  loader() {
    const { loadingHighlight } = this.props;
    if (loadingHighlight) {
      return (
        <LoaderWrapper>
          <Spinner color="#888888" />
        </LoaderWrapper>
      );
    }
    return null;
  }

  render() {
    const { exploreHighlight } = this.props;
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          minHeight: 160,
          position: 'relative',
        }}
      >
        <View style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          {exploreHighlight && exploreHighlight.count() > 0 ? (
            <CardRecipe
              full
              imageHeight={170}
              image={exploreHighlight.get('image')}
              title={exploreHighlight.get('name')}
              uploader={exploreHighlight.getIn(['user', 'fullname'])}
              id={exploreHighlight.get('id')}
              showCount
              likeCount={exploreHighlight.get('like_count')}
              commentCount={exploreHighlight.get('comment_count')}
            />
          ) : null}
        </View>
        {this.loader()}
      </View>
    );
  }
}

Hightlight.propTypes = {
  exploreHighlight: PropTypes.object,
  loadingHighlight: PropTypes.bool,
  loadExploreHighlight: PropTypes.func,
};

export default withExplore(Hightlight);
