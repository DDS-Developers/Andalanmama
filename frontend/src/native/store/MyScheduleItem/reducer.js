/**
 * MyScheduleItem/reducer.js
 */
import { fromJS } from 'immutable';
import ListHelper from '../../helpers/List';
import validate from '../../helpers/FormValidate';
import {
  // LOAD_SCHEDULE,
  // SET_SCHEDULE_ID,
  UPDATE_SCHEDULE,
  SET_SCHEDULE,
  CHANGE_TITLE,
  CHANGE_DATE,
  CHANGE_TIME,
  CHANGE_SHIFT,
  // CHANGE_RECIPE_MAIN,
  SET_RECIPE_OTHERS,
  ADD_RECIPE_OTHER,
  REMOVE_RECIPE_OTHER,
  CHECK_ALL_INPUT_ERRORS,
  CHECK_INPUT_ERROR,
  SET_DATA_CHANGED,
  SET_LOADING,
  SET_LOADING_TITLE,
  SET_LOADING_STATUS,
  RESET_DATA,
  RESET_SCHEDULE,
  UPDATE_SCHEDULE_STATUS,
  UPDATE_SCHEDULE_TITLE,
} from './constants';

import { validationConfig } from './validation';

const fields = ['date', 'time', 'shift', 'recipeOthers'];

// The initial state of the App
export const initialState = fromJS({
  id: 0,
  schedule: null,
  title: '',
  date: '',
  time: '',
  shift: 0,
  status: 0,
  // recipeMain: null,
  recipeOthers: [],
  recipeOtherIds: [],
  inputErrors: {
    date: false,
    time: false,
    shift: false,
    // recipeMain: false,
    recipeOthers: false,
  },
  inputErrorCount: 0,
  dataChanged: false,
  loading: false,
  loadingTitle: false,
  loadingStatus: false,
});

function myScheduleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCHEDULE: {
      const { data } = action;
      const schedule = fromJS(data);

      const others = schedule.get('alt_recipe', fromJS([]));
      let otherIds = fromJS([]);
      others.forEach(item => {
        otherIds = otherIds.push(item.get('id'));
      });

      return (
        state
          .set('schedule', schedule)
          .set('date', schedule.get('schedule_date'))
          .set('time', schedule.get('schedule_time'))
          .set('shift', schedule.get('shift'))
          // .set('recipeMain', schedule.get('main_recipe'))
          .set('recipeOthers', others)
          .set('recipeOtherIds', otherIds)
          .set('dataChanged', true)
      );
    }
    case UPDATE_SCHEDULE:
      return state.set('id', action.id);
    case UPDATE_SCHEDULE_STATUS:
      return state.set('date', action.date).set('status', action.status);
    case UPDATE_SCHEDULE_TITLE:
      return state.set('date', action.date).set('title', action.title);
    case CHANGE_TITLE:
      return changeData(state, 'title', action.title);
    case CHANGE_DATE:
      return changeData(state, 'date', action.date);
    case CHANGE_TIME:
      return changeData(state, 'time', action.time);
    case CHANGE_SHIFT:
      return changeData(state, 'shift', action.shift);
    // case CHANGE_RECIPE_MAIN:
    //   return state
    //     .set('recipeMain', action.recipe)
    //     .set('dataChanged', true)
    //     .setIn(['inputErrors', 'recipeMain'], false);
    case SET_RECIPE_OTHERS:
      return state.set('recipeOthers', fromJS(action.recipes)).set('dataChanged', true);
    case ADD_RECIPE_OTHER: {
      let { recipe } = action;
      let recipes = state.get('recipeOthers');
      let recipeIds = state.get('recipeOtherIds');
      if (typeof recipe.get === 'undefined') {
        recipe = fromJS(recipe);
      }
      recipes = recipes.push(recipe);
      recipeIds = recipeIds.push(recipe.get('id'));
      return state
        .set('recipeOthers', recipes)
        .set('recipeOtherIds', recipeIds)
        .setIn(['inputErrors', 'recipeOthers'], false)
        .set('recipeError', false);
    }
    case REMOVE_RECIPE_OTHER: {
      const { recipeId } = action;
      let recipes = state.get('recipeOthers');
      let recipeIds = state.get('recipeOtherIds');
      recipes = ListHelper.removeItemById(recipeId, recipes);
      recipeIds = recipeIds.filterNot(id => recipeId === id);
      return state.set('recipeOthers', recipes).set('recipeOtherIds', recipeIds);
    }
    case CHECK_INPUT_ERROR: {
      const { fieldName } = action;
      const isError = validatingError(state, fieldName);
      return state.setIn(['inputErrors', fieldName], isError);
    }
    case CHECK_ALL_INPUT_ERRORS: {
      let newstate = state;

      fields.forEach(fieldName => {
        const isError = validatingError(newstate, fieldName);
        newstate = newstate.setIn(['inputErrors', fieldName], isError);
      });
      newstate = checkErrorCounts(newstate);
      return newstate;
    }
    case SET_DATA_CHANGED:
      return state.set('dataChanged', action.status);
    case SET_LOADING:
      return state.set('loading', action.status);
    case SET_LOADING_TITLE:
      return state.set('loadingTitle', action.status);
    case SET_LOADING_STATUS:
      return state.set('loadingStatus', action.status);
    case RESET_DATA:
      return initialState;
    case RESET_SCHEDULE:
      return state.set('schedule', null).set('id', 0);
    default:
      return state;
  }
}

export function changeData(state, name, value) {
  const newState = state.set(name, value);
  let isError = false;
  isError = validatingError(newState, name);
  return newState.setIn(['inputErrors', name], isError).set('dataChanged', true);
}

export function validatingError(state, name) {
  let value = state.get(name);
  if (name === 'recipeOthers') {
    value = value.toArray();
  }
  const error = validate(name, value, validationConfig);
  let isError = false;
  if (error !== '' && error !== null && error !== undefined) {
    isError = error;
  }
  return isError;
}

export function checkErrorCounts(state) {
  let count = 0;
  for (let i = 0; i < fields.length; i += 1) {
    const errorName = fields[i];
    const isError = state.getIn(['inputErrors', errorName]);
    if (isError !== false && isError !== '' && isError !== null) {
      count += 1;
    }
  }
  fields.forEach(fieldName => {
    const isError = state.getIn(['inputErrors', fieldName]);
    if (isError !== false && isError !== '' && isError !== null) {
      count += 1;
    }
  });
  return state.set('inputErrorCount', count);
}

export default myScheduleReducer;
