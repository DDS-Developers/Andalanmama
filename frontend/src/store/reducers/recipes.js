import store from '../recipes';

export default function(state = store, action) {
  switch (action.type) {
    case 'REPLACE_FAVORITE_COLLECTION':
      return {
        ...state,
        error: null,
        loading: false,
        favourite: action.favourite,
      };

    case 'REPLACE_RECIPES':
      return {
        ...state,
        error: null,
        loading: false,
        data: action.data,
      };

    default:
      return state;
  }
}
