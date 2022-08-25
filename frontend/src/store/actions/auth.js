import { Http } from '../../services/http';
import statusMessage from './status';

export const onFormLogin = formData => dispatch =>
  new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);

    try {
      const { data } = await Http.post('login', formData);
      await statusMessage(dispatch, 'loading', true);

      resolve(
        dispatch({
          type: 'USER_LOGIN',
          data,
        }),
      );
    } catch (error) {
      statusMessage(dispatch, 'error', false);
      reject(error.message);
    }
  });
