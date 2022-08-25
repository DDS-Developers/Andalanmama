/**
 * helpers/FormUserValidatePassword.js
 *
 */
import validate from 'validate.js';
// import Debugger from './Debugger';

export default function FormUserValidatePassword(
  fieldName,
  newPassword,
  confirmNewPassword,
  constraints,
) {
  const formValues = {};
  if (newPassword && newPassword !== '') {
    formValues.newPassword = newPassword;
  }
  if (confirmNewPassword && confirmNewPassword !== '') {
    formValues.confirmNewPassword = confirmNewPassword;
  }

  const formFields = {};
  formFields[fieldName] = constraints[fieldName];

  const result = validate(formValues, formFields);
  if (result) {
    return result[fieldName][0];
  }

  return null;
}
