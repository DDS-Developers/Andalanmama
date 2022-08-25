/**
 * helpers/ResponseError.js
 *
 */
export default function(result, defaultMessage = '') {
  let error = '';
  if (typeof result.response.data.error !== 'undefined') {
    const errors = result.response.data.error;
    if (Array.isArray(errors)) {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in errors) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          if (error !== '') {
            error += '\n';
          }
          error += errors[key];
        }
      }
    } else {
      // eslint-disable-next-line prefer-destructuring
      error = result.response.data.error;
    }
  }
  if (error === '') {
    if (defaultMessage !== '') {
      error = defaultMessage;
    } else {
      error = 'The process failed because there were some errors.';
    }
  }

  return error;
}
