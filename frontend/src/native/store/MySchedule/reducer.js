/**
 * MySchedule/reducer.js
 */
import { fromJS } from 'immutable';
import {
  SET_SCHEDULES,
  COPY_SCHEDULE,
  SET_LOADING,
  CLEAR_SCHEDULES,
  DELETE_SCHEDULE,
  REMOVE_DELETE_SCHEDULE,
  ADD_SCHEDULE,
  UPDATE_SCHEDULES,
  ADD_TO_MY_SCHEDULES,
  SET_SCHEDULE_STATUS,
  SET_SCHEDULE_TITLE,
  CHECK_SCHEDULE_DATE,
  SET_CHECK_DATE_LOADING,
  SET_HAVE_SCHEDULE,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  allSchedule: [],
  loading: false,
  id: 0,
  user_id: 0,
  date: null,
  haveSchedule: false,
  checkDateLoading: null,
  schedule: null,
});

function myScheduleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCHEDULES:
      return state.set('allSchedule', fromJS(action.allSchedule));

    case SET_LOADING:
      return state.set('loading', action.status);

    case CLEAR_SCHEDULES:
      return state.set('allSchedule', fromJS([]));

    case DELETE_SCHEDULE:
      return state.set('id', action.id).set('date', action.date);

    case ADD_TO_MY_SCHEDULES:
      return state
        .set('user_id', action.userId)
        .set('date', action.date)
        .set('schedule', action.schedule);

    case REMOVE_DELETE_SCHEDULE: {
      const { scheduleId, scheduleDate } = action;
      const schedule = state.get('allSchedule');
      const index = schedule.findKey(item => item.get('date') === scheduleDate);

      let scheduleObject = null;
      if (index !== undefined) {
        scheduleObject = schedule
          .getIn([index, 'schedules'])
          .filterNot(item => scheduleId === item.get('id'));
      }

      let newSchedule = schedule.setIn([index, 'schedules'], scheduleObject);
      const checkSchedule = schedule.map(item => item.get('schedules').map(id => id.get('id')));
      const rslt = checkSchedule.reduce((a, b) => [...a, ...b], []);

      if (rslt.length < 2) {
        newSchedule = fromJS([]);
      }
      return state.set('allSchedule', newSchedule);
    }

    case ADD_SCHEDULE: {
      const { formData } = action;
      const schedule = state.get('allSchedule');
      const scheduleData = fromJS(formData);
      let newSchedule = null;
      let scheduleObject = null;
      let pushSchedule = null;
      if (schedule && schedule.count() > 0) {
        const index = schedule.findKey(
          item => item.get('date') === scheduleData.get('schedule_date'),
        );

        if (index !== undefined) {
          scheduleObject = fromJS({
            id: scheduleData.get('id'),
            user_id: scheduleData.get('user_id'),
            schedule_date: scheduleData.get('schedule_date'),
            shift: scheduleData.get('shift'),
            schedule_time: scheduleData.get('schedule_time'),
            main_recipe: null,
            alt_recipe: scheduleData.get('alt_recipe'),
          });

          const newObject = updateList('schedules', index, scheduleObject, schedule);
          pushSchedule = schedule.map(item => {
            if (item.get('date') === scheduleData.get('schedule_date')) return newObject.get(0);
            return item;
          });

          newSchedule = pushSchedule;
        } else {
          scheduleObject = fromJS([
            fromJS({
              date: scheduleData.get('schedule_date'),
              schedules: fromJS([
                {
                  id: scheduleData.get('id'),
                  user_id: scheduleData.get('user_id'),
                  schedule_date: scheduleData.get('schedule_date'),
                  shift: scheduleData.get('shift'),
                  schedule_time: scheduleData.get('schedule_time'),
                  main_recipe: null,
                  alt_recipe: scheduleData.get('alt_recipe'),
                },
              ]),
            }),
          ]);
          pushSchedule = schedule.push(scheduleObject.get(0));
          pushSchedule = pushSchedule.sortBy(f => f.get('date'));
          newSchedule = pushSchedule;
        }
      } else {
        newSchedule = fromJS([
          fromJS({
            date: scheduleData.get('schedule_date'),
            schedules: fromJS([
              {
                id: scheduleData.get('id'),
                user_id: scheduleData.get('user_id'),
                schedule_date: scheduleData.get('schedule_date'),
                shift: scheduleData.get('shift'),
                schedule_time: scheduleData.get('schedule_time'),
                main_recipe: null,
                alt_recipe: scheduleData.get('alt_recipe'),
              },
            ]),
          }),
        ]);
      }
      return state.set('allSchedule', newSchedule);
    }

    case UPDATE_SCHEDULES: {
      const { formData } = action;
      let schedules = state.get('allSchedule');
      const data = fromJS(formData);

      const index = schedules.findKey(item => item.get('date') === data.get('schedule_date'));
      if (index !== undefined) {
        let schedule = schedules.get(index);
        if (schedule) {
          let schItems = schedule.get('schedules');

          const schIndex = schItems.findKey(schItem => schItem.get('id') === data.get('id'));
          if (schIndex !== undefined) {
            let schItem = schItems.get(schIndex);
            schItem = schItem.set('schedule_time', data.get('schedule_time'));
            schItem = schItem.set('shift', data.get('shift'));
            schItem = schItem.set('alt_recipe', data.get('alt_recipe'));

            schItems = schItems.set(schIndex, schItem);
            schedule = schedule.set('schedules', schItems);
            schedules = schedules.set(index, schedule);
          }
        }
      }

      return state.set('allSchedule', schedules);
    }

    case SET_SCHEDULE_TITLE: {
      const { date, title } = action;
      let schedules = state.get('allSchedule');

      const index = schedules.findKey(item => item.get('date') === date);
      if (index !== undefined) {
        let schedule = schedules.get(index);
        if (schedule) {
          let schItems = schedule.get('schedules');
          let schItem = schItems.get(0);
          schItem = schItem.set('title', title);

          schItems = schItems.set(0, schItem);
          schedule = schedule.set('schedules', schItems);
          schedules = schedules.set(index, schedule);
        }
      }

      return state.set('allSchedule', schedules);
    }

    case SET_SCHEDULE_STATUS: {
      const { date, status } = action;
      let schedules = state.get('allSchedule');
      const statusId = status ? 1 : 0;

      const index = schedules.findKey(item => item.get('date') === date);
      if (index !== undefined) {
        let schedule = schedules.get(index);
        if (schedule) {
          let schItems = schedule.get('schedules');
          let schItem = schItems.get(0);
          schItem = schItem.set('status', statusId);

          schItems = schItems.set(0, schItem);
          schedule = schedule.set('schedules', schItems);
          schedules = schedules.set(index, schedule);
        }
      }

      return state.set('allSchedule', schedules);
    }

    case COPY_SCHEDULE: {
      const { data, date } = action;
      const schedule = fromJS({
        date,
        schedules: data.get('schedules'),
      });
      let currentList = state.get('allSchedule');
      currentList = currentList.push(schedule);
      currentList = currentList.sortBy(i => i.get('date'));
      return state.set('allSchedule', currentList);
    }

    case CHECK_SCHEDULE_DATE: {
      return state.set('date', action.date);
    }

    case SET_CHECK_DATE_LOADING: {
      return state.set('checkDateLoading', action.status);
    }

    case SET_HAVE_SCHEDULE: {
      return state.set('haveSchedule', action.status);
    }

    // case UPDATE_SCHEDULES: {
    //   const { formData } = action;
    //   const schedule = state.get('allSchedule');
    //   const scheduleData = fromJS(formData);
    //   let newSchedule = null;

    //   const index = schedule.findKey(
    //     item => item.get('date') === scheduleData.get('schedule_date'),
    //   );

    //   let scheduleObject = null;
    //   scheduleObject = fromJS({
    //     id: scheduleData.get('id'),
    //     user_id: scheduleData.get('user_id'),
    //     schedule_date: scheduleData.get('schedule_date'),
    //     shift: scheduleData.get('shift'),
    //     schedule_time: scheduleData.get('schedule_time'),
    //     main_recipe: null,
    //     alt_recipe: scheduleData.get('alt_recipe'),
    //   });

    //   let scheduleFilterObject = null;
    //   if (index !== undefined) {
    //     scheduleFilterObject = schedule
    //       .getIn([index, 'schedules'])
    //       .filterNot(item => scheduleData.get('id') === item.get('id'));

    //     scheduleFilterObject = scheduleFilterObject
    //       .push(scheduleObject)
    //       .sortBy(f => f.get('shift'))
    //       .sortBy(f => f.get('schedule_time'));
    //   }

    //   newSchedule = schedule.map(item => {
    //     if (item.get('date') === scheduleData.get('schedule_date'))
    //       return item.set('schedules', scheduleFilterObject);
    //     return item;
    //   });

    //   return state.set('allSchedule', newSchedule);
    // }

    default:
      return state;
  }
}

export function updateList(name, id, data, state) {
  let items = state.getIn([id, name]);
  items = items.push(data);
  items = items.sortBy(f => f.get('shift')).sortBy(f => f.get('schedule_time'));
  return state.setIn([id, name], items);
}

export default myScheduleReducer;
