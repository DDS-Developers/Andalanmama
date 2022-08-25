import store from '../articles';

export default function(state = store, action) {
  switch (action.type) {
    case 'REPLACE_ARTICLE':
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
