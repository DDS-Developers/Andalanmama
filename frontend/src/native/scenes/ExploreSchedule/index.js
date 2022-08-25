/**
 * scenes/ExploreSchedule/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Container, View, Spinner } from 'native-base';
import { RefreshControl, TouchableOpacity } from 'react-native';

import { withAuth } from '../../providers/Auth';
import { withExploreSchedule } from '../../providers/ExploreSchedule';
import AuthRoot from '../../containers/AuthRoot';
import Text from '../../components/Text';
import Header from '../../components/Header';
// import Loader from '../../components/Loader';
import Content from '../../components/Content';
import MenuWrapper from '../RecipeBookItems/MenuWrapper';
import NavWrapper from '../RecipeBookItems/NavWrapper';

import FilterDate from './FilterDate';
import ModalCalendar from './FilterDate/Calendar';
import FilterWeek from './FilterWeek';
import List from './List';
import ThisDay from './ThisDay';
import Tomorrow from './Tomorrow';

export class ExploreScheduleScene extends PureComponent {
  static navigationOptions = {
    title: 'Telusuri Jadwal Memasak',
    header: null,
  };

  componentDidMount() {
    this.onLoadSchedules();
  }

  onLoadSchedules = () => {
    this.props.resetFilter();
    this.props.loadThisDay();
    this.props.loadTomorrow();
    this.props.loadList();
  };

  onScroll = event => {
    const { loadingMoreList, listData } = this.props;
    const { nativeEvent } = event;
    if (listData) {
      const current = listData.get('current_page');
      const last = listData.get('last_page');
      if (loadingMoreList || current === last) {
        return;
      }
      // eslint-disable-next-line prefer-destructuring
      const y = nativeEvent.contentOffset.y;
      // eslint-disable-next-line prefer-destructuring
      const height = nativeEvent.layoutMeasurement.height;
      const contentHeight = nativeEvent.contentSize.height;

      if (y + height >= contentHeight - 20) {
        this.props.loadMoreList();
      }
    }
  };

  renderMoreLoader = () => {
    const { loadingMoreList } = this.props;
    if (loadingMoreList) {
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

  renderMainContent = () => (
    <React.Fragment>
      <FilterDate />
      <FilterWeek />
      <ThisDay />
      <Tomorrow />
      <List title />
      {this.renderMoreLoader()}
    </React.Fragment>
  );

  renderFilterContent = () => (
    <React.Fragment>
      <FilterDate />
      <FilterWeek />
      <List />
      {this.renderMoreLoader()}
    </React.Fragment>
  );

  renderMenu = () => {
    const type = 'explore';
    const filters = [
      {
        title: 'Jadwal Masak Saya',
        value: 'my_schedules',
        path: 'MySchedule',
      },
      {
        title: 'Telusuri Jadwal Masak',
        value: 'explore',
        path: 'ExploreSchedule',
      },
    ];

    let Component = <View />;

    return (
      <MenuWrapper>
        {filters.map(filter => {
          const settings = {
            active: false,
            first: filter.value === 'my_schedules',
            last: filter.value === 'explore',
          };
          if (type !== filter.value) {
            Component = (
              <TouchableOpacity
                first={filter.value === 'my_schedules'}
                last={filter.value === 'explore'}
                onPress={() => {
                  this.props.navigation.navigate(filter.path);
                }}
              />
            );
          } else {
            settings.active = true;
          }
          return (
            <NavWrapper key={`menu-filter-${filter.value}`} component={Component} {...settings}>
              <Text>{filter.title}</Text>
            </NavWrapper>
          );
        })}
      </MenuWrapper>
    );
  };

  render() {
    const { isUseFilter } = this.props;

    return (
      <AuthRoot>
        <Container>
          {/* <Header title="My Schedule" ContentComponent={this.rightIcons()} /> */}
          <Header title="Telusuri Jadwal Memasak" />
          {this.renderMenu()}
          <View style={{ flex: 1, position: 'relative', backgroundColor: '#efefef' }}>
            <Content
              nospace
              clean
              refreshControl={
                <RefreshControl refreshing={false} onRefresh={this.onLoadSchedules} />
              }
              scrollProps={{
                onScroll: this.onScroll,
                scrollEventThrottle: 50,
              }}
              style={{ backgroundColor: '#efefef', paddingTop: 40 }}
            >
              {isUseFilter ? this.renderFilterContent() : this.renderMainContent()}
            </Content>
          </View>
          <ModalCalendar />
        </Container>
      </AuthRoot>
    );
  }
}

ExploreScheduleScene.propTypes = {
  navigation: PropTypes.object,
  loggedIn: PropTypes.bool,
  loadThisDay: PropTypes.func,
  loadTomorrow: PropTypes.func,
  loadList: PropTypes.func,
  loadMoreList: PropTypes.func,
  loadingMoreList: PropTypes.bool,
  listSchedules: PropTypes.object,
  isUseFilter: PropTypes.bool,
};

export default compose(
  withAuth,
  withExploreSchedule,
)(ExploreScheduleScene);
