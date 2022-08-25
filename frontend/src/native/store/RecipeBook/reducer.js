/**
 * RecipeBook/reducer.js
 */
import { fromJS } from 'immutable';
import ListHelper from '../../helpers/List';
import {
  LOAD_RECIPE_BOOK,
  CREATE_RECIPE_BOOK,
  UPDATE_RECIPE_BOOK,
  DELETE_RECIPE_BOOK,
  CHANGE_FILTER_STATUS,
  CHANGE_FILTER_LABEL,
  SET_RECIPE_BOOK,
  RESET_DATA,
  SET_LOADING,
  CHANGE_TITLE,
  CHANGE_STATUS,
  SET_RECIPES,
  ADD_RECIPE,
  REMOVE_RECIPE,
  SET_DATA_CHANGED,
  CHECK_INPUT_ERROR,
  CHECK_ALL_INPUT_ERRORS,
  DELETE_RECIPE,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  id: 0,
  recipeId: 0,
  recipeBook: null,
  title: '',
  status: false,
  recipes: [],
  recipeIds: [],
  filterStatus: 'all',
  filterLabel: 'Semua',
  saveType: 'normal',
  loading: false,
  dataChanged: false,
  titleError: false,
  recipeError: false,
  errorCount: 0,
});

const titleErrorMsg = 'You must enter title';
const recipesErrorMsg = 'You must select one or more recipe';

function recipeBookReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPE_BOOK:
      return state.set('recipeBook', null).set('id', action.id);
    case SET_RECIPE_BOOK: {
      const { data } = action;
      const recipeBook = fromJS(data);

      const recipes = recipeBook.get('recipes', fromJS([]));
      let recipeIds = fromJS([]);
      recipes.forEach(item => {
        recipeIds = recipeIds.push(item.get('id'));
      });

      let status = false;
      const publish = recipeBook.get('publish');
      if (publish === 1) {
        status = true;
      }

      return state
        .set('title', recipeBook.get('title'))
        .set('status', status)
        .set('recipes', recipes)
        .set('recipeIds', recipeIds)
        .set('recipeBook', recipeBook)
        .set('bookDataChanged', true);
    }
    case CREATE_RECIPE_BOOK:
      return state.set('saveType', action.saveType);
    case DELETE_RECIPE_BOOK:
      return state.set('id', action.id);
    case UPDATE_RECIPE_BOOK:
      return state.set('id', action.id).set('saveType', action.saveType);
    case CHANGE_FILTER_STATUS:
      return state.set('filterStatus', action.status);
    case CHANGE_FILTER_LABEL:
      return state.set('filterLabel', action.label);
    case CHANGE_TITLE:
      return state.set('title', action.title).set('dataChanged', true);
    case CHANGE_STATUS:
      return state.set('status', action.status).set('dataChanged', true);
    case SET_RECIPES:
      return state.set('recipes', fromJS(action.recipes)).set('dataChanged', true);
    case ADD_RECIPE: {
      let { recipe } = action;
      let recipes = state.get('recipes');
      let recipeIds = state.get('recipeIds');
      if (typeof recipe.get === 'undefined') {
        recipe = fromJS(recipe);
      }
      recipes = recipes.push(recipe);
      recipeIds = recipeIds.push(recipe.get('id'));
      return state
        .set('recipes', recipes)
        .set('recipeIds', recipeIds)
        .set('dataChanged', true)
        .set('recipeError', false);
    }
    case REMOVE_RECIPE: {
      const { recipeId } = action;
      let recipes = state.get('recipes');
      let recipeIds = state.get('recipeIds');
      recipes = ListHelper.removeItemById(recipeId, recipes);
      recipeIds = recipeIds.filterNot(id => recipeId === id);
      return state.set('recipes', recipes).set('recipeIds', recipeIds);
    }
    case DELETE_RECIPE:
      return state.set('id', action.recipeBookId).set('recipeId', action.recipeId);
    case CHECK_INPUT_ERROR: {
      const { fieldName } = action;
      const title = state.get('title');
      const recipes = state.get('recipes');
      let titleError = false;
      let recipeError = false;
      if (fieldName === 'title') {
        if (title === '' || title === ' ') {
          titleError = titleErrorMsg;
        }
      }
      if (fieldName === 'recipes') {
        if (recipes.count() < 1) {
          recipeError = recipesErrorMsg;
        }
      }
      return state.set('titleError', titleError).set('recipeError', recipeError);
    }
    case CHECK_ALL_INPUT_ERRORS: {
      const title = state.get('title');
      const recipes = state.get('recipes');
      let titleError = false;
      let recipeError = false;
      let errorCount = 0;

      if (title === '' || title === ' ') {
        titleError = titleErrorMsg;
        errorCount += 1;
      }
      if (recipes.count() < 1) {
        recipeError = recipesErrorMsg;
        errorCount += 1;
      }

      return state
        .set('titleError', titleError)
        .set('recipeError', recipeError)
        .set('errorCount', errorCount);
    }
    case SET_LOADING:
      return state.set('loading', action.status);
    case SET_DATA_CHANGED:
      return state.set('dataChanged', action.status);
    case RESET_DATA:
      return initialState;
    default:
      return state;
  }
}

export default recipeBookReducer;
