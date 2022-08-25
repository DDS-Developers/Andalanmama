/**
 * store/TourGuide/actions.js
 */
import { SET_STEP, NEXT_STEP, SET_SKIPPED, SET_VISIBLE } from './constants';

/**
 * Set step
 *
 * @param  {number} step
 *
 * @return {object}
 */
export function setStep(step) {
  return {
    type: SET_STEP,
    step,
  };
}

/**
 * Next step
 *
 * @return {object}
 */
export function nextStep() {
  return {
    type: NEXT_STEP,
  };
}

/**
 * Set skipped
 *
 * @param  {boolean} status
 *
 * @return {object}
 */
export function setSkipped(status) {
  return {
    type: SET_SKIPPED,
    status,
  };
}

/**
 * Set visible
 *
 * @param  {boolean} status
 *
 * @return {object}
 */
export function setVisible(status) {
  return {
    type: SET_VISIBLE,
    status,
  };
}
