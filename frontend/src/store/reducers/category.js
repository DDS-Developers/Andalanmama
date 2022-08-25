import store from '../category';

export default function(state = store, action) {
  switch (action.type) {
    case 'REPLACE_CATEGORY':
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
