import { Http } from '../../services/http';
import statusMessage from './status';

export const getFavouriteCollection = () => dispatch =>
  new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);

    try {
      const { data } = await Http.get('collection/favorite-recipe');

      await statusMessage(dispatch, 'loading', true);
      resolve(
        dispatch({
          type: 'REPLACE_FAVORITE_COLLECTION',
          favourite: data,
        }),
      );
    } catch (error) {
      statusMessage(dispatch, 'error', false);
      reject(error.message);
    }
  });
