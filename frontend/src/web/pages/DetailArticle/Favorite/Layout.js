import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import indo from 'date-fns/locale/id';
import CardSlider from '../../../components/CardSlider';
import Wrapper from './Wrapper';
import Utils from '../../../helpers/utils';

const Layout = props => {
  const { favorites } = props;
  const items = favorites.map(item => ({
    id: item.id,
    title: item.name,
    image: item.image,
    permalink: `/recipe/detail/${item.slug}`,
    user: item.user.fullname,
    time: distanceInWordsToNow(new Date(Utils.convertDateForIos(item.created_at)), {
      addSuffix: true,
      locale: indo,
    }),
  }));

  return (
    <Wrapper className="_section--favorite">
      <CardSlider items={items} favoriteButton={null} loadMore={false} column="3" />
    </Wrapper>
  );
};

Layout.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      user: PropTypes.shape({
        username: PropTypes.string,
        fullname: PropTypes.string.isRequired,
      }),
      created_at: PropTypes.string.isRequired,
    }),
  ),
};

export default Layout;
