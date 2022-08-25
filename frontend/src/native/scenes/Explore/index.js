/**
 * scenes/Explore/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { RefreshControl, StatusBar } from 'react-native';
import { Container, View, Spinner, Icon } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import { withTourGuide } from '../../providers/TourGuide';
import { withAuth } from '../../providers/Auth';
import { withFilter } from '../../providers/Filter';
import { withExplore } from '../../providers/Explore';
import { withSearch } from '../../providers/Search';
import Content from '../../components/Content';
import Text from '../../components/Text';

import PopupCampaign from './Campaign';
import IconCampaign from './Campaign/icon';
import FilterCategory from '../ExploreFilter/FilterCategory';
import Top from './Top';
import ButtonLogin from './ButtonLogin';
// import Hightlight from './Hightlight';
import Recommendation from './Recommendation';
import PopularRecipe from './PopularRecipe';
// import Published from './Published';
import RecentRecipeBook from './RecentRecipeBook';
import Recent from './Recent';
import FilterResult from './FilterResult';
import ButtonCreateWrapper from './ButtonCreateWrapper';
import IconCreateWrapper from './IconCreateWrapper';
import ReactNativeAN from 'react-native-alarm-notification';

export class ExploreScene extends PureComponent {
  static navigationOptions = {
    title: 'Explore',
    header: null,
  };

  state = {
    showButtonTop: false,
  };

  componentDidMount() {
    this.checkSkipped();

    this.props.navigation.addListener('focus', () => {
      this.props.setKeyword('');
    });

    this.props.webviewCampaign();

    this.props.loadBanner();
  }

  checkSkipped = async () => {
    const { skipped, setStep, setVisible } = this.props;
    const myExpSkipped = await AsyncStorage.getItem('ANDALAN_TOUR_GUIDE_EXPLORER');

    if (!skipped && !myExpSkipped) {
      setVisible(true);
      setStep(1);
    }
  };

  onRefresh = () => {
    this.loadAllContent();
  };

  onScroll = event => {
    const { loadingMoreRecent, exploreRecentData } = this.props;
    const { nativeEvent } = event;
    const current = exploreRecentData.get('current_page');
    const last = exploreRecentData.get('last_page');
    if (loadingMoreRecent || current === last) {
      return;
    }
    // eslint-disable-next-line prefer-destructuring
    const y = nativeEvent.contentOffset.y;
    // eslint-disable-next-line prefer-destructuring
    const height = nativeEvent.layoutMeasurement.height;
    const contentHeight = nativeEvent.contentSize.height;

    if (y + height >= contentHeight - 20) {
      this.props.loadMoreExploreRecent();
    }
    if (y >= height / 3) {
      this.setState({
        showButtonTop: true,
      });
    } else {
      this.setState({
        showButtonTop: false,
      });
    }
  };

  loadAllContent = () => {
    this.props.webviewCampaign();
    this.props.loadBanner();
    this.props.loadExploreRecommendation();
    this.props.loadExploreHighlight();
    this.props.loadExplorePopularRecipe();
    this.props.loadExploreRecentRecipeBook();
    // this.props.loadExplorePublished();
    this.props.loadExploreRecent();
  };

  renderMoreLoader = () => {
    const { loadingMoreRecent } = this.props;
    if (loadingMoreRecent) {
      return (
        <View
          style={{
            height: 40,
            backgroundColor: '#ffffff',
            marginBottom: 15,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner color="#888888" size="small" />
        </View>
      );
    }
    return null;
  };

  renderButtonToTop = () => {
    const { showButtonTop } = this.state;
    if (showButtonTop) {
      return (
        <ButtonCreateWrapper onPress={this.goToTop}>
          <IconCreateWrapper>
            <Icon
              style={{ color: '#ffffff', marginTop: -2 }}
              type="MaterialIcons"
              name="keyboard-arrow-up"
            />
          </IconCreateWrapper>
        </ButtonCreateWrapper>
      );
    }
    return null;
  };

  goToTop = evt => {
    evt.preventDefault();
    if (this.scrollRef) {
      this.scrollRef.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };

  renderEndInfo = () => {
    const { exploreRecentData } = this.props;
    const current = exploreRecentData.get('current_page');
    const last = exploreRecentData.get('last_page');

    if (current === last) {
      return (
        <View
          style={{
            height: 40,
            marginBottom: 15,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#999999' }}>You have reached last page</Text>
        </View>
      );
    }
    return null;
  };

  renderMainContent = () => (
    <React.Fragment>
      <Top {...this.props} />
      <Recommendation />
      <PopularRecipe />
      {/*<Published />*/}
      <RecentRecipeBook />
      <Recent />
      {this.renderMoreLoader()}
      {this.renderEndInfo()}
    </React.Fragment>
  );

  renderFilterContent = () => (
    <React.Fragment>
      <Top />
      <FilterResult />
      {this.renderEndInfo()}
      {this.renderEndInfo()}
    </React.Fragment>
  );

  render() {
    const { loggedIn, isUseFilter, selectedCategories, authData, campaign } = this.props;

    return (
      <Container>
        <StatusBar backgroundColor="#e83249" barStyle="light-content" />
        {this.renderButtonToTop()}
        <Content
          nospace
          clean
          refreshControl={<RefreshControl refreshing={false} onRefresh={this.onRefresh} />}
          scrollProps={{
            onScroll: this.onScroll,
            scrollEventThrottle: 50,
            // eslint-disable-next-line no-return-assign
            ref: scrollComp => (this.scrollRef = scrollComp),
          }}
        >
          {!loggedIn ? <ButtonLogin /> : null}
          {isUseFilter && selectedCategories.count() > 0
            ? this.renderFilterContent()
            : this.renderMainContent()}
        </Content>
        <FilterCategory
          onSubmit={() => {
            this.props.setUseFilter(true);
            this.props.setFilterDialog(false);
            // this.props.navigation.navigate('ExploreFilter');
          }}
        />
      <PopupCampaign {...this.props}/>
      <IconCampaign {...this.props}/>
      </Container>
    );
  }
}

ExploreScene.propTypes = {
  // navigation: PropTypes.object,
  selectedCategories: PropTypes.object,
  banner: PropTypes.object,
  campaign: PropTypes.object,
  webviewCampaign: PropTypes.func,
  authData: PropTypes.object,
  loggedIn: PropTypes.bool,
  setFilterDialog: PropTypes.func,
  setUseFilter: PropTypes.func,
  loadExploreRecommendation: PropTypes.func,
  loadBanner: PropTypes.func,
  loadExploreHighlight: PropTypes.func,
  loadExplorePopularRecipe: PropTypes.func,
  loadExploreRecentRecipeBook: PropTypes.func,
  // loadExplorePublished: PropTypes.func,
  loadExploreRecent: PropTypes.func,
  loadMoreExploreRecent: PropTypes.func,
  loadingMoreRecent: PropTypes.bool,
  isUseFilter: PropTypes.bool,
  exploreRecentData: PropTypes.object,
  skipped: PropTypes.bool,
  setStep: PropTypes.func,
  setVisible: PropTypes.func,
  setKeyword: PropTypes.func,
};

export default compose(
  withAuth,
  withFilter,
  withExplore,
  withTourGuide,
  withSearch
)(ExploreScene);
