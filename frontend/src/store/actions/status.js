export default function(dispatch, type, val) {
  return new Promise((resolve, reject) => {
    // validate types
    const allowed = ['error', 'success', 'info', 'loading'];
    if (!allowed.includes(type)) {
      return reject(new Error('Type should be one of success, error or info'));
    }

    // Set some default convenience
    let message = val;
    if (!val) {
      if (type === 'success') message = 'Success';
      if (type === 'error') message = 'Sorry, an error occured';
      if (type === 'info') message = 'Something is hapening ...';
      if (type === 'loading' && val !== false) message = true;
    }

    return resolve(
      dispatch({
        type: 'STATUS_REPLACE',
        [type]: message,
      }),
    );
  });
}
