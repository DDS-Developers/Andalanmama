/**
 * helpers/FormValidate.js
 *
 */
import validate from 'validate.js';

export default function FormValidate(fieldName, value, constraints) {
  const formValues = {};
  if (value && value !== '') {
    formValues[fieldName] = value;
  }

  const formFields = {};
  formFields[fieldName] = constraints[fieldName];

  const result = validate(formValues, formFields);
  if (result) {
    return result[fieldName][0];
  }

  return null;
}
