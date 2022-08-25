/**
 * providers/MyProfile/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadMySchedules,
  setLoading,
  clearSchedules,
  deleteSchedule,
  addToMySchedules,
  setCheckDateLoading,
  checkScheduleDate,
} from '../../store/MySchedule/actions';

import {
  makeSelectSchedules,
  makeSelectLoading,
  makeSelectId,
  makeSelectDate,
  makeSelectCheckDateLoading,
  makeSelectHaveSchedule,
} from '../../store/MySchedule/selectors';

export const MyScheduleProvider = () => WrappedComponent => {
  class MySchedule extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  MySchedule.propTypes = {
    loading: PropTypes.bool,
    setScheduleLoading: PropTypes.func,
    clearSchedules: PropTypes.func,
    deleteMySchedule: PropTypes.func,
  };
  const mapStateToProps = createStructuredSelector({
    allSchedule: makeSelectSchedules(),
    loading: makeSelectLoading(),
    scheduleId: makeSelectId(),
    scheduleDate: makeSelectDate(),
    checkDateLoading: makeSelectCheckDateLoading(),
    haveSchedule: makeSelectHaveSchedule(),
  });

  const MyScheduleConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MySchedule);

  return hoistNonReactStatics(MyScheduleConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadMySchedules: () => dispatch(loadMySchedules()),
    setScheduleLoading: status => dispatch(setLoading(status)),
    clearSchedules: () => dispatch(clearSchedules()),
    deleteMySchedule: (id, date) => dispatch(deleteSchedule(id, date)),
    setCheckDateLoading: status => dispatch(setCheckDateLoading(status)),
    checkScheduleDate: date => dispatch(checkScheduleDate(date)),
    addToMySchedules: (date, userId, schedule) =>
      dispatch(addToMySchedules(date, userId, schedule)),
  };
}

export const withMySchedule = MyScheduleProvider();
