/**
 * MyRecipe/reducer.js
 */
import { fromJS } from 'immutable';
import {
  LOAD_RECIPE,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  CHANGE_FILTER_STATUS,
  CHANGE_FILTER_LABEL,
  SET_RECIPE,
  SET_LOADING,
  RESET_RECIPE,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  id: 0,
  recipe: null,
  filterStatus: 'all',
  filterLabel: 'Semua',
  saveType: 'normal',
  loading: false,
});

function myRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPE:
      return state.set('recipe', null).set('id', action.id);
    case SET_RECIPE: {
      const { data } = action;
      const recipeData = fromJS(data);
      const status = recipeData.get('status');
      let publish = false;
      if (status === 1) {
        publish = true;
      }
      const recipeDetail = fromJS({
        id: recipeData.get('id'),
        name: recipeData.get('name'),
        description: recipeData.get('description'),
        attachment: recipeData.get('attachment'),
        portion: recipeData.get('portion'),
        time: recipeData.get('time'),
        ingredients: recipeData.get('ingredient'),
        steps: recipeData.get('step'),
        tags: recipeData.get('tags'),
        status: publish,
      });

      return state.set('recipe', recipeDetail);
    }
    case CREATE_RECIPE:
      return state.set('formData', action.formData).set('saveType', action.saveType);
    case UPDATE_RECIPE:
      return state
        .set('id', action.id)
        .set('formData', action.formData)
        .set('saveType', action.saveType);
    case DELETE_RECIPE:
      return state.set('id', action.id);
    case CHANGE_FILTER_STATUS:
      return state.set('filterStatus', action.status).set('filterLabel', action.label);
    case CHANGE_FILTER_LABEL:
      return state.set('filterLabel', action.label);
    case SET_LOADING:
      return state.set('loading', action.status);
    case RESET_RECIPE:
      return state.set('recipe', null).set('id', 0);
    default:
      return state;
  }
}

export default myRecipeReducer;
