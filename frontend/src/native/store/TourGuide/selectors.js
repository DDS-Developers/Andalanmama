/**
 * store/TourGuide/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTourGuide = state => state.get('TourGuide', initialState);

const makeSelectStep = () =>
  createSelector(
    selectTourGuide,
    tourState => tourState.get('step'),
  );

const makeSelectSkipped = () =>
  createSelector(
    selectTourGuide,
    tourState => tourState.get('skipped'),
  );

const makeSelectVisible = () =>
  createSelector(
    selectTourGuide,
    tourState => tourState.get('visible'),
  );

export { selectTourGuide, makeSelectStep, makeSelectSkipped, makeSelectVisible };
