import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import indo from 'date-fns/locale/id';
import CardList from '../../../components/CardList';
import Utils from '../../../helpers/utils';

const Layout = props => {
  const { articles, ...others } = props;
  const items = articles.map(item => ({
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

  return <CardList items={items.slice(0, 3)} {...others} />;
};

Layout.propTypes = {
  articles: PropTypes.arrayOf(
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

export default Layout;
