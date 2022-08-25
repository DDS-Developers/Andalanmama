/**
 * Explore/reducer.js
 */
import { fromJS } from 'immutable';
import {
  SET_THIS_DAY,
  SET_LOADING_THIS_DAY,
  SET_TOMORROW,
  SET_LOADING_TOMORROW,
  SET_LIST,
  ADD_LIST,
  SET_LOADING_LIST,
  SET_LOADING_MORE_LIST,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_WEEK,
  SET_DIALOG_DATE,
  SET_USE_FILTER,
  RESET_DATA,
  RESET_FILTER,
  LOAD_MORE_LIST,
  SET_LIST_PAGED,
  LOAD_SCHEDULE,
  SET_SCHEDULE,
  SET_DETAIL_LOADING,
} from './constants';
import { RESET_SCHEDULE } from '../MyScheduleItem/constants';

// The initial state of the App
export const initialState = fromJS({
  thisDaySchedules: [],
  loadingThisDay: false,
  tomorrowSchedules: [],
  loadingTomorrow: false,
  listSchedules: [],
  listData: null,
  listPaged: 1,
  loadingList: false,
  loadingMoreList: false,
  dateFrom: '',
  dateTo: '',
  week: '',
  dialogDate: false,
  isUseFilter: false,
  userId: 0,
  detailDate: '',
  schedule: null,
  loadingDetail: false,
});

function myExploreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THIS_DAY:
      return state.set('thisDaySchedules', fromJS(action.data));
    case SET_LOADING_THIS_DAY:
      return state.set('loadingThisDay', action.status);
    case SET_TOMORROW:
      return state.set('tomorrowSchedules', fromJS(action.data));
    case SET_LOADING_TOMORROW:
      return state.set('loadingTomorrow', action.status);
    case SET_LIST: {
      const schedules = fixListData(action.data.data);
      return state.set('listData', fromJS(action.data)).set('listSchedules', schedules);
    }
    case ADD_LIST: {
      const { data } = action;
      const items = fixListData(data.data);
      let stateItems = state.get('listSchedules');
      stateItems = stateItems.concat(items);
      return state.set('listSchedules', stateItems).set('listData', fromJS(action.data));
    }
    case LOAD_MORE_LIST:
      return state.set('listPaged', state.get('listPaged') + 1);
    case SET_LIST_PAGED:
      return state.set('listPaged', action.paged);
    case SET_LOADING_LIST:
      return state.set('loadingList', action.status);
    case SET_LOADING_MORE_LIST:
      return state.set('loadingMoreList', action.status);
    case SET_DATE_FROM:
      return state.set('dateFrom', action.date);
    case SET_DATE_TO:
      return state.set('dateTo', action.date);
    case SET_WEEK:
      return state.set('week', action.week);
    case SET_DIALOG_DATE:
      return state.set('dialogDate', action.status);
    case SET_USE_FILTER:
      return state.set('isUseFilter', action.status);
    case RESET_FILTER:
      return state
        .set('listSchedules', fromJS([]))
        .set('isUseFilter', false)
        .set('listPaged', 1)
        .set('dateFrom', '')
        .set('dateTo', '')
        .set('week', '');
    case RESET_DATA:
      return state;
    case LOAD_SCHEDULE:
      return state.set('userId', action.userId).set('detailDate', action.date);
    case SET_SCHEDULE:
      return state.set('schedule', fromJS(action.data));
    case SET_DETAIL_LOADING:
      return state.set('detailLoading', action.status);
    case RESET_SCHEDULE:
      return state
        .set('userId', 0)
        .set('detailDate', '')
        .set('schedule', null);
    default:
      return state;
  }
}

function fixListData(data) {
  let schedules = fromJS([]);
  const dataJS = fromJS(data);

  dataJS.forEach(item => {
    const itemData = fromJS({
      id: item.get('id'),
      user: item.get('user'),
      schedules: [item],
    });
    schedules = schedules.push(itemData);
  });

  return schedules;
}

export default myExploreReducer;
