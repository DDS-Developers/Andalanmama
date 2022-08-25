/**
 * Explore/reducer.js
 */
import { fromJS } from 'immutable';
import ListHelper from '../../helpers/List';
import {
  LOAD_CATEGORIES,
  SET_CATEGORIES,
  LOAD_POPULAR_CATEGORIES,
  SET_POPULAR_CATEGORIES,
  LOAD_RESULT,
  SET_RESULT,
  SET_LOADING,
  SET_SELECTED_CATEGORIES,
  ADD_SELECTED_CATEGORY,
  REMOVE_SELECTED_CATEGORY,
  SET_FILTER_DIALOG,
  RESET_DATA,
  RESET_SELECTED,
  SET_USE_FILTER,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  categories: [],
  popularCategories: [],
  selectedCategories: [],
  recipes: [],
  loading: false,
  filterDialog: false,
  isUseFilter: false,
});

const maxSelected = 5;

function myExploreReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return state.set('categories', fromJS([]));
    case SET_CATEGORIES:
      return state.set('categories', fromJS(action.data));
    case LOAD_POPULAR_CATEGORIES:
      return state.set('popularCategories', fromJS([]));
    case SET_POPULAR_CATEGORIES:
      return state.set('popularCategories', fromJS(action.data));
    case LOAD_RESULT:
      return state.set('recipes', fromJS([]));
    case SET_RESULT:
      return state.set('recipes', fromJS(action.data));
    case SET_LOADING:
      return state.set('loading', action.status);
    case SET_FILTER_DIALOG:
      return state.set('filterDialog', action.status);
    case SET_SELECTED_CATEGORIES:
      return state.set('selectedCategories', action.categories);
    case ADD_SELECTED_CATEGORY: {
      let { category } = action;
      let items = state.get('selectedCategories');
      if (items.count() < maxSelected) {
        // Add selected categories
        category = fromJS(category);
        items = items.push(category);

        // Remove from all categories
        let allCats = state.get('categories');
        allCats = ListHelper.removeItemById(category.get('id'), allCats);
        return state.set('selectedCategories', items).set('categories', allCats);
      }
      return state;
    }
    case REMOVE_SELECTED_CATEGORY: {
      const { categoryId } = action;
      let categories = state.get('selectedCategories');
      const cat = ListHelper.getItemById(categoryId, categories);
      // Remove selected category
      categories = ListHelper.removeItemById(categoryId, categories);

      // Add to all categories
      let allCats = state.get('categories');
      allCats = allCats.push(cat);

      return state.set('selectedCategories', categories).set('categories', allCats);
    }
    case RESET_DATA:
      return initialState;
    case RESET_SELECTED:
      return state.set('selectedCategories', fromJS([]));
    case SET_USE_FILTER:
      return state.set('isUseFilter', action.status);
    default:
      return state;
  }
}

export default myExploreReducer;
