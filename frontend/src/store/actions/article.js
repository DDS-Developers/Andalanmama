import { Http } from '../../services/http';
import statusMessage from './status';

export const getRecentArticles = () => dispatch =>
  new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);

    try {
      const { data } = await Http.get('article');
      await statusMessage(dispatch, 'loading', true);
      resolve(
        dispatch({
          type: 'REPLACE_ARTICLE',
          data: data.data, // because pagination, the data is stored on `data` property
        }),
      );
    } catch (error) {
      statusMessage(dispatch, 'error', false);
      reject(error.message);
    }
  });
