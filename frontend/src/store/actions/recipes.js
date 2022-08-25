import { Http } from '../../services/http';
import statusMessage from './status';

export const getLatestRecipes = () => dispatch =>
  new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);

    try {
      const { data } = await Http.get('recipe/latest/andalan');

      await statusMessage(dispatch, 'loading', true);
      resolve(
        dispatch({
          type: 'REPLACE_RECIPES',
          data,
        }),
      );
    } catch (error) {
      statusMessage(dispatch, 'error', false);
      reject(error.message);
    }
  });
