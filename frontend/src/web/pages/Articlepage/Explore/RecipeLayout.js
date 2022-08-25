import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import indo from 'date-fns/locale/id';
import CardThumbnailFull from '../../../components/CardThumbnail';
import Utils from '../../../helpers/utils';

const RecipeLayout = props => {
  const items = props.recipes.map(item => ({
    id: item.id,
    title: item.title,
    image: item.image,
    permalink: `/article/detail/${item.slug}`,
    user: item.user.fullname,
    time: distanceInWordsToNow(new Date(Utils.convertDateForIos(item.created_at)), {
      addSuffix: true,
      locale: indo,
    }),
  }));

  return (
    <React.Fragment>
      {items.map(item => (
        <CardThumbnailFull
          className="_thumbnail--full _open"
          margin="30px 0"
          key={`item-${item.id}`}
          column="1"
          title={item.title}
          permalink={item.permalink}
          image={item.image}
          user={item.user}
          time={item.time}
        />
      ))}
    </React.Fragment>
  );
};

RecipeLayout.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
      }),
      created_at: PropTypes.string.isRequired,
    }),
  ),
};

export default RecipeLayout;
