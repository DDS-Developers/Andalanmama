/**
 * Form/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectForm = state => state.get('Form', initialState);

const makeSelectFormData = () =>
  createSelector(
    selectForm,
    FormState => FormState.get('formData'),
  );

const makeSelectFormFields = () =>
  createSelector(
    selectForm,
    FormState => FormState.get('formFields'),
  );

const makeSelectFormMessage = () =>
  createSelector(
    selectForm,
    FormState => FormState.get('formMessage'),
  );

const makeSelectInputErrors = () =>
  createSelector(
    selectForm,
    FormState => FormState.get('inputErrors'),
  );

const makeSelectInputErrorCount = () =>
  createSelector(
    selectForm,
    FormState => FormState.get('inputErrorCount'),
  );

const makeSelectValidationSettings = () =>
  createSelector(
    selectForm,
    FormState => FormState.get('validationSettings'),
  );

export {
  selectForm,
  makeSelectFormData,
  makeSelectFormFields,
  makeSelectFormMessage,
  makeSelectInputErrors,
  makeSelectInputErrorCount,
  makeSelectValidationSettings,
};
