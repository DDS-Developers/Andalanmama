/**
 * App/reducer.js
 */
import { fromJS } from 'immutable';
import {
  SET_LOADING,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  SET_PROFILE,
  SET_PROFILE_ACCOUNT,
  UPDATE_POINT,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  formData: null,
  profile: {},
  profileAccount: {},
});

function MyProfileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return state.set('loading', action.status);
    case UPDATE_PROFILE:
      return state.set('formData', action.formData);
    case SET_PROFILE: {
      return state.set('profile', fromJS(action.data));
    }
    case CLEAR_PROFILE:
      return state.set('profile', null);
    case SET_PROFILE_ACCOUNT: {
      return state.set('profileAccount', fromJS(action.data));
    }
    case UPDATE_POINT: {
      const { data } = action;
      let account = state.get('profileAccount');
      if (account && typeof data.points !== 'undefined') {
        account = account.set('points', data.points);
        return state.set('profileAccount', account);
      }
      return state;
    }
    default:
      return state;
  }
}

export default MyProfileReducer;
