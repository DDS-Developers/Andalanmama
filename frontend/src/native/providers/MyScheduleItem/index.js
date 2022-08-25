/**
 * providers/MyScheduleItem/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  createSchedule,
  updateSchedule,
  updateScheduleTitle,
  updateScheduleStatus,
  setSchedule,
  changeTitle,
  changeDate,
  changeTime,
  changeShift,
  changeRecipeMain,
  setRecipeOthers,
  addRecipeOther,
  removeRecipeOther,
  checkAllInputErrors,
  checkInputError,
  setDataChanged,
  setLoading,
  setLoadingTitle,
  setLoadingStatus,
  resetData,
  resetSchedule,
} from '../../store/MyScheduleItem/actions';
import {
  makeSelectId,
  makeSelectSchedule,
  makeSelectTitle,
  makeSelectDate,
  makeSelectTime,
  makeSelectShift,
  makeSelectStatus,
  makeSelectRecipeMain,
  makeSelectRecipeOthers,
  makeSelectRecipeOtherIds,
  makeSelectInputErrors,
  makeSelectInputErrorCount,
  makeSelectLoading,
  makeSelectLoadingTitle,
  makeSelectLoadingStatus,
  makeSelectDataChanged,
} from '../../store/MyScheduleItem/selectors';

export const MyScheduleItemProvider = () => WrappedComponent => {
  class MyScheduleItem extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  MyScheduleItem.propTypes = {
    id: PropTypes.number,
    schedule: PropTypes.object,
    scheduleTitle: PropTypes.string,
    scheduleDate: PropTypes.string,
    scheduleTime: PropTypes.string,
    scheduleShift: PropTypes.number,
    recipeMain: PropTypes.object,
    recipeOthers: PropTypes.object,
    recipeOtherIds: PropTypes.object,
    manageLoading: PropTypes.bool,
    loadingTitle: PropTypes.bool,
    loadingStatus: PropTypes.bool,
    dataChanged: PropTypes.bool,
    inputErrors: PropTypes.object,
    inputErrorCount: PropTypes.number,

    createSchedule: PropTypes.func,
    updateSchedule: PropTypes.func,
    updateScheduleTitle: PropTypes.func,
    updateScheduleStatus: PropTypes.func,
    setSchedule: PropTypes.func,
    changeTitle: PropTypes.func,
    changeDate: PropTypes.func,
    changeTime: PropTypes.func,
    changeShift: PropTypes.func,
    changeRecipeMain: PropTypes.func,
    setRecipeOthers: PropTypes.func,
    addRecipeOther: PropTypes.func,
    removeRecipeOther: PropTypes.func,
    checkInputError: PropTypes.func,
    checkAllInputErrors: PropTypes.func,
    setMyScheduleLoading: PropTypes.func,
    setDataChanged: PropTypes.func,
    resetData: PropTypes.func,
    resetSchedule: PropTypes.func,
    setLoadingTitle: PropTypes.func,
    setLoadingStatus: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    id: makeSelectId(),
    schedule: makeSelectSchedule(),
    scheduleTitle: makeSelectTitle(),
    scheduleDate: makeSelectDate(),
    scheduleTime: makeSelectTime(),
    scheduleShift: makeSelectShift(),
    scheduleStatus: makeSelectStatus(),
    recipeMain: makeSelectRecipeMain(),
    recipeOthers: makeSelectRecipeOthers(),
    recipeOtherIds: makeSelectRecipeOtherIds(),
    manageLoading: makeSelectLoading(),
    loadingTitle: makeSelectLoadingTitle(),
    loadingStatus: makeSelectLoadingStatus(),
    dataChanged: makeSelectDataChanged(),
    inputErrors: makeSelectInputErrors(),
    inputErroCount: makeSelectInputErrorCount(),
  });

  const MyScheduleConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MyScheduleItem);

  return hoistNonReactStatics(MyScheduleConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    createSchedule: () => dispatch(createSchedule()),
    updateSchedule: id => dispatch(updateSchedule(id)),
    updateScheduleTitle: (id, title) => dispatch(updateScheduleTitle(id, title)),
    updateScheduleStatus: (id, status) => dispatch(updateScheduleStatus(id, status)),
    setSchedule: data => dispatch(setSchedule(data)),
    changeTitle: title => dispatch(changeTitle(title)),
    changeDate: date => dispatch(changeDate(date)),
    changeTime: time => dispatch(changeTime(time)),
    changeShift: shift => dispatch(changeShift(shift)),
    changeRecipeMain: recipe => dispatch(changeRecipeMain(recipe)),
    setRecipeOthers: recipes => dispatch(setRecipeOthers(recipes)),
    addRecipeOther: recipe => dispatch(addRecipeOther(recipe)),
    removeRecipeOther: id => dispatch(removeRecipeOther(id)),
    checkInputError: fieldName => dispatch(checkInputError(fieldName)),
    checkAllInputErrors: () => dispatch(checkAllInputErrors()),
    setManageLoading: status => dispatch(setLoading(status)),
    setLoadingTitle: status => dispatch(setLoadingTitle(status)),
    setLoadingStatus: status => dispatch(setLoadingStatus(status)),
    setDataChanged: status => dispatch(setDataChanged(status)),
    resetData: () => dispatch(resetData()),
    resetSchedule: () => dispatch(resetSchedule()),
  };
}

export const withMyScheduleItem = MyScheduleItemProvider();
