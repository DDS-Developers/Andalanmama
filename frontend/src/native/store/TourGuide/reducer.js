/**
 * store/TourGuide/reducer.js
 */
import { fromJS } from 'immutable';
// import Debugger from '../../helpers/Debugger';
import { SET_STEP, NEXT_STEP, SET_SKIPPED, SET_VISIBLE } from './constants';

// The initial state of the App
export const initialState = fromJS({
  step: 0,
  skipped: false,
  visible: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STEP:
      return state.set('step', action.step);
    case NEXT_STEP: {
      let current = state.get('step');
      current += 1;
      return state.set('step', current);
    }
    case SET_SKIPPED:
      return state.set('skipped', action.status);
    case SET_VISIBLE:
      return state.set('visible', action.status);
    default:
      return state;
  }
}

export default appReducer;
