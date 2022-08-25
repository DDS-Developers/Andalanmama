/**
 * Recipe/reducer.js
 */
import { fromJS } from 'immutable';
import ListHelper from '../../helpers/List';
import {
  LOAD_RECIPE,
  SET_RECIPE,
  SET_LOADING,
  ADD_LIKE,
  REMOVE_LIKE,
  SET_LIKED,
  SET_LIKE_COUNT,
  SET_RECIPE_COMMENTS,
  REMOVE_RECIPE_COMMENT,
  ADD_RECIPE_COMMENT,
  DELETE_COMMENT,
  RESET_DATA,
  UPDATE_COMMENT,
  SET_UPDATE_COMMENT,
  SHOW_VIDEO_MODAL,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  id: 0,
  recipe: null,
  commentId: 0,
  loading: false,
  restricted: false,
  liked: false,
  likeCount: 0,
  recipeDetailComments: [],
  videoModal: false,
});

function myRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPE:
      return state
        .set('recipe', null)
        .set('id', action.id)
        .set('restricted', action.restricted)
        .set('likeCount', action.like_count);
    case SET_RECIPE:
      return state.set('recipe', fromJS(action.data));
    case SET_RECIPE_COMMENTS: {
      return state.set('recipeDetailComments', fromJS(action.data));
    }
    case DELETE_COMMENT:
      return state.set('commentId', action.id);
    case REMOVE_RECIPE_COMMENT: {
      const { id } = action;
      let recipeDetailComments = state.get('recipeDetailComments');
      recipeDetailComments = ListHelper.removeItemById(id, recipeDetailComments);

      // Change count
      let recipe = state.get('recipe');
      const commentCount = recipe.get('comment_count');
      recipe = recipe.set('comment_count', commentCount - 1);
      return state.set('recipe', recipe).set('recipeDetailComments', recipeDetailComments);
    }
    case ADD_RECIPE_COMMENT: {
      const { data } = action;
      let items = state.get('recipeDetailComments');
      items = items.unshift(fromJS(data));

      // Change count
      let recipe = state.get('recipe');
      const commentCount = recipe.get('comment_count');
      recipe = recipe.set('comment_count', commentCount + 1);
      return state.set('recipe', recipe).set('recipeDetailComments', items);
    }
    case SET_LOADING:
      return state.set('loading', action.status);
    case ADD_LIKE:
      return state.set('id', action.recipeId);
    case REMOVE_LIKE:
      return state.set('id', action.recipeId);
    case SET_LIKED:
      return state.set('liked', action.status);
    case SET_LIKE_COUNT:
      return state.set('likeCount', action.count);
    case UPDATE_COMMENT:
      return state.set('commentId', action.id);
    case SHOW_VIDEO_MODAL:
      return state.set('videoModal', action.status);
    case SET_UPDATE_COMMENT: {
      let { data } = action;
      data.deletable = 'yes';
      data = fromJS(data);
      let commentsData = state.get('recipeDetailComments');
      const itemIsExists = ListHelper.getItemById(data.get('id'), commentsData);
      if (typeof itemIsExists !== 'undefined') {
        commentsData = ListHelper.updateItem(commentsData, data);
      } else {
        commentsData = commentsData.push(data);
      }
      return state.set('recipeDetailComments', commentsData);
    }
    case RESET_DATA: {
      return initialState;
    }
    default:
      return state;
  }
}

export default myRecipeReducer;
