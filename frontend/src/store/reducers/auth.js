import store from '../auth';

export default function(state = store, action) {
  switch (action.type) {
    case 'USER_LOGIN':
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
