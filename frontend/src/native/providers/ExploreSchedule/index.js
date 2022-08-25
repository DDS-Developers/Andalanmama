/**
 * providers/ExploreSchedule/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadThisDay,
  setThisDay,
  setLoadingThisDay,
  loadTomorrow,
  setTomorrow,
  setLoadingTomorrow,
  loadList,
  loadMoreList,
  setList,
  setLoadingList,
  setDateFrom,
  setDateTo,
  setWeek,
  setDialogDate,
  setUseFilter,
  resetFilter,
  loadSchedule,
  setSchedule,
  setDetailLoading,
} from '../../store/ExploreSchedule/actions';
import {
  makeSelectThisDay,
  makeSelectLoadingThisDay,
  makeSelectTomorrow,
  makeSelectLoadingTomorrow,
  makeSelectList,
  makeSelectLoadingList,
  makeSelectDateFrom,
  makeSelectDateTo,
  makeSelectWeek,
  makeSelectDialogDate,
  makeSelectIsUseFilter,
  makeSelectDetailLoading,
  makeSelectUserId,
  makeSelectSchedule,
  makeSelectDetailDate,
  makeSelectListData,
  makeSelectLoadingMoreList,
} from '../../store/ExploreSchedule/selectors';
import { resetSchedule } from '../../store/MyScheduleItem/actions';

export const ExploreProvider = () => WrappedComponent => {
  class Explore extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Explore.propTypes = {
    thisDaySchedules: PropTypes.object,
    loadingThisDay: PropTypes.bool,
    tomorrowSchedules: PropTypes.object,
    loadingTomorrow: PropTypes.bool,
    listSchedules: PropTypes.object,
    listData: PropTypes.object,
    loadingList: PropTypes.bool,
    loadingMoreList: PropTypes.bool,
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
    week: PropTypes.string,
    isUseFilter: PropTypes.bool,
    dialogDate: PropTypes.bool,
    detailLoading: PropTypes.bool,
    detailDate: PropTypes.string,
    userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    schedule: PropTypes.object,
  };

  const mapStateToProps = createStructuredSelector({
    thisDaySchedules: makeSelectThisDay(),
    tomorrowSchedules: makeSelectTomorrow(),
    listSchedules: makeSelectList(),
    listData: makeSelectListData(),
    loadingThisDay: makeSelectLoadingThisDay(),
    loadingTomorrow: makeSelectLoadingTomorrow(),
    loadingList: makeSelectLoadingList(),
    loadingMoreList: makeSelectLoadingMoreList(),
    dateFrom: makeSelectDateFrom(),
    dateTo: makeSelectDateTo(),
    week: makeSelectWeek(),
    isUseFilter: makeSelectIsUseFilter(),
    dialogDate: makeSelectDialogDate(),
    detailLoading: makeSelectDetailLoading(),
    detailDate: makeSelectDetailDate(),
    userId: makeSelectUserId(),
    schedule: makeSelectSchedule(),
  });

  const ExploreConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Explore);

  return hoistNonReactStatics(ExploreConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadThisDay: () => dispatch(loadThisDay()),
    setThisDay: data => dispatch(setThisDay(data)),
    setLoadingThisDay: status => dispatch(setLoadingThisDay(status)),
    loadTomorrow: () => dispatch(loadTomorrow()),
    setTomorrow: data => dispatch(setTomorrow(data)),
    setLoadingTomorrow: status => dispatch(setLoadingTomorrow(status)),
    loadList: () => dispatch(loadList()),
    loadMoreList: () => dispatch(loadMoreList()),
    setList: data => dispatch(setList(data)),
    setLoadingList: status => dispatch(setLoadingList(status)),
    setDateFrom: date => dispatch(setDateFrom(date)),
    setDateTo: date => dispatch(setDateTo(date)),
    setWeek: week => dispatch(setWeek(week)),
    setDialogDate: status => dispatch(setDialogDate(status)),
    setUseFilter: status => dispatch(setUseFilter(status)),
    resetFilter: () => dispatch(resetFilter()),
    loadSchedule: (userId, date) => dispatch(loadSchedule(userId, date)),
    setSchedule: data => dispatch(setSchedule(data)),
    setDetailLoading: status => dispatch(setDetailLoading(status)),
    resetSchedule: () => dispatch(resetSchedule()),
  };
}

export const withExploreSchedule = ExploreProvider();
