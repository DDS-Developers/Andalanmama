/**
 * helpers/FormValidatePassword.js
 *
 */
import validate from 'validate.js';
// import Debugger from './Debugger';

export default function FormValidatePassword(
  fieldName,
  password,
  passwordConfirmation,
  constraints,
) {
  const formValues = {};
  if (password && password !== '') {
    formValues.password = password;
  }
  if (passwordConfirmation && passwordConfirmation !== '') {
    formValues.passwordConfirmation = passwordConfirmation;
  }

  const formFields = {};
  formFields[fieldName] = constraints[fieldName];

  const result = validate(formValues, formFields);
  if (result) {
    return result[fieldName][0];
  }

  return null;
}
