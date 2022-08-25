/**
 * MyRecipe/reducer.js
 */
import { fromJS } from 'immutable';
import validate from '../../helpers/FormValidate';
import ListHelper from '../../helpers/List';
import {
  LOAD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  CHANGE_FILTER_STATUS,
  SET_RECIPE,
  SET_FORM_DATA,
  CHANGE_FORM_DATA,
  SET_INPUT_ERRORS,
  CHANGE_INPUT_ERROR,
  CHECK_INPUT_ERROR,
  CHECK_INPUT_ERRORS,
  RESET_FORM_DATA,
  CLEAR_INPUT_ERRORS,
  RESET_DATA,
  SET_TAGS,
  ADD_TAG,
  REMOVE_TAG,
  SET_STEPS,
  SET_STEPS_ORDER,
  ADD_STEP,
  UPDATE_STEP,
  REMOVE_STEP,
  SET_INGREDIENTS,
  ADD_INGREDIENT,
  UPDATE_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS_ORDER,
} from './constants';
import { validationConfig } from './validation';

// The initial state of the App
export const initialState = fromJS({
  id: 0,
  recipe: null,
  filterStatus: 'all',
  formData: {
    photo: '',
    title: '',
    description: '',
    portion: '',
    duration: '',
    tags: [],
    steps: [],
    ingredients: [],
    publish: true,
  },
  formMessage: false,
  inputErrors: {
    photo: false,
    title: false,
    description: false,
    portion: false,
    duration: false,
    tags: false,
    steps: false,
    ingredients: false,
  },
  inputErrorCount: 0,
  ingredientsOrder: [],
  stepsOrder: [],
});

const fields = [
  'photo',
  'title',
  'description',
  'portion',
  'duration',
  'tags',
  'steps',
  'ingredients',
  'publish',
];

function myRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPE:
      return state.set('id', action.id);
    case SET_RECIPE:
      return state.set('recipe', action.data);
    case DELETE_RECIPE:
      return state.set('id', action.id);
    case UPDATE_RECIPE:
      return state.set('id', action.id);
    case CHANGE_FILTER_STATUS:
      return state.set('filterStatus', action.status);
    case SET_FORM_DATA:
      return state.set('formData', fromJS(action.data));
    case CHANGE_FORM_DATA: {
      const { name, value } = action;
      const newState = state.setIn(['formData', name], value);
      const isError = validatingError(newState, name);
      return newState.setIn(['inputErrors', name], isError).set('formMessage', isError);
    }
    case SET_INPUT_ERRORS:
      return state.set('inputErrors', fromJS(action.errors));
    case CHANGE_INPUT_ERROR:
      return state.setIn(['inputErrors', action.name], action.error);
    case CHECK_INPUT_ERROR: {
      const { name } = action;
      const isError = validatingError(state, name);
      return state.setIn(['inputErrors', name], isError);
    }
    case CHECK_INPUT_ERRORS: {
      let newstate = state;
      for (let i = 0; i < fields.length; i += 1) {
        const name = fields[i];
        const isError = validatingError(newstate, name);
        newstate = newstate.setIn(['inputErrors', name], isError);
      }
      newstate = checkErrorCounts(newstate);
      return newstate;
    }
    case RESET_FORM_DATA:
      return state.set('formData', fromJS({}));
    case CLEAR_INPUT_ERRORS:
      return state.set('inputErrors', fromJS({}));
    case SET_TAGS:
      return state.setIn(['formData', 'tags'], fromJS(action.tags));
    case ADD_TAG: {
      const { tag } = action;
      return addList('tags', tag, state, false);
    }
    case REMOVE_TAG: {
      const { id } = action;
      return removeList('tags', id, state);
    }
    case SET_STEPS:
      return state.setIn(['formData', 'steps'], fromJS(action.tags));
    case SET_STEPS_ORDER:
      return state.set('stepsOrder', fromJS(action.order));
    case UPDATE_STEP: {
      const { id, data } = action;
      return updateList('steps', id, data, state);
    }
    case ADD_STEP: {
      const { step } = action;
      return addList('steps', step, state);
    }
    case REMOVE_STEP: {
      const { id } = action;
      return removeList('steps', id, state);
    }
    case SET_INGREDIENTS:
      return state.setIn(['formData', 'ingredients'], fromJS(action.tags));
    case SET_INGREDIENTS_ORDER:
      return state.set('ingredientsOrder', fromJS(action.order));
    case UPDATE_INGREDIENT: {
      const { id, data } = action;
      return updateList('ingredients', id, data, state);
    }
    case ADD_INGREDIENT: {
      const { ingredient } = action;
      return addList('ingredients', ingredient, state);
    }
    case REMOVE_INGREDIENT: {
      const { id } = action;
      return removeList('ingredients', id, state);
    }
    case RESET_DATA:
      return initialState;
    default:
      return state;
  }
}

export function validatingError(state, name) {
  const value = state.getIn(['formData', name]);
  let error = '';
  if (name === 'tags') {
    if (!value || value.count() < 1) {
      error = validationConfig[name].presence.message;
    }
  } else if (name === 'ingredients' || name === 'steps') {
    let itemsCount = 0;
    value.forEach(item => {
      if (item.get('info') !== '') {
        itemsCount += 1;
      }
    });
    if (itemsCount === 0) {
      error = validationConfig[name].presence.message;
    }
  } else {
    error = validate(name, value, validationConfig);
  }
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
  return state.set('inputErrorCount', count);
}

export function addList(name, data, state, createId = true) {
  let dataItem = fromJS(data);
  let items = state.getIn(['formData', name]);
  if (createId) {
    const newId = ListHelper.getLastIndexList(items);
    dataItem = dataItem.set('isNew', true).set('id', newId);
  } else {
    dataItem = dataItem.set('isNew', true);
  }
  items = items.push(dataItem);
  return state.setIn(['formData', name], items);
}

export function updateList(name, id, data, state) {
  let items = state.getIn(['formData', name]);
  const itemIsExists = ListHelper.getItemById(id, items);
  if (typeof itemIsExists !== 'undefined') {
    items = ListHelper.updateItem(items, data);
  } else {
    items = items.push(data);
  }
  return state.setIn(['formData', name], items);
}

export function removeList(name, id, state) {
  let items = state.getIn(['formData', name]);
  items = ListHelper.removeItemById(id, items);
  return state.setIn(['formData', name], items);
}

export default myRecipeReducer;
