import { Http } from '../../services/http';
import statusMessage from './status';

export const getCategories = () => dispatch =>
  new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);

    try {
      const { data } = await Http.get('tag/popular');

      await statusMessage(dispatch, 'loading', true);
      resolve(
        dispatch({
          type: 'REPLACE_CATEGORY',
          data, // because pagination, the data is stored on `data` property
        }),
      );
    } catch (error) {
      statusMessage(dispatch, 'error', false);
      reject(error.message);
    }
  });
