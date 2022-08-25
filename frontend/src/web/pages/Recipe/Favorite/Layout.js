import React from 'react';
import PropTypes from 'prop-types';
import CardSlider from '../../../components/CardSlider';
import Text from '../../../components/Text';
import Wrapper from './Wrapper';

const Layout = props => {
  const { favorites } = props;
  const items = favorites.map(item => ({
    id: item.id,
    title: item.name,
    image: item.image,
    permalink: `/recipe/detail/${item.slug}`,
    user: item.user.fullname,
    time: `Durasi ${item.cookduration}`,
  }));

  return (
    <Wrapper className="_section--favorite">
      <Text as="span" size={400}>
        Bingung Masak Apa?
      </Text>
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
