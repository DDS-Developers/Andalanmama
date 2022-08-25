import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { compose } from 'redux';
import { View, Text, Dimensions } from 'react-native';
import { Spinner } from 'native-base';
import { withExplore } from '../../../providers/Explore';
import CardRecipe from '../../../components/CardRecipe';
import LoaderWrapper from '../Loader';

// eslint-disable-next-line react/prefer-stateless-function
export class Recent extends PureComponent {
  componentDidMount() {
    this.props.loadExploreRecent();
  }

  loader() {
    const { loadingRecent } = this.props;
    if (loadingRecent) {
      return (
        <LoaderWrapper>
          <Spinner color="#888888" />
        </LoaderWrapper>
      );
    }
    return null;
  }

  renderList = () => {
    const widthItem = Dimensions.get('window').width / 2 - 25;
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginHorizontal: -5 }}>
        {this.props.exploreRecent.map(item => (
          <View
            key={`recipe-${item.get('id')}`}
            style={{ width: widthItem, marginHorizontal: 5, marginBottom: 5 }}
          >
            <CardRecipe
              full
              imageHeight={160}
              image={item.get('image')}
              title={item.get('name')}
              uploader={item.getIn(['user', 'fullname'])}
              id={item.get('id')}
              showCount
              likeCount={item.get('like_count')}
              commentCount={item.get('comment_count')}
            />
          </View>
        ))}
      </View>
    );
  };

  render() {
    const { exploreRecent } = this.props;
    return (
      <View style={{ paddingLeft: 20, paddingBottom: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Resep Terbaru</Text>
        <View style={{ position: 'relative', minHeight: 160 }}>
          {this.loader()}
          <View style={{ flex: 1, position: 'relative', zIndex: 1 }}>
            {exploreRecent && exploreRecent.count() > 0 ? this.renderList() : null}
          </View>
        </View>
      </View>
    );
  }
}

Recent.propTypes = {
  exploreRecent: PropTypes.object,
  loadingRecent: PropTypes.bool,
  loadExploreRecent: PropTypes.func,
};

export default withExplore(Recent);
