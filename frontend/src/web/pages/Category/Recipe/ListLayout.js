import React from 'react';
import PropTypes from 'prop-types';
import CardThumbnailList from '../../../components/CardThumbnailList';

// eslint-disable-next-line react/prefer-stateless-function
class ListLayout extends React.Component {
  parseRecipesData = recipes =>
    recipes.map(item => ({
      id: item.id,
      title: item.name,
      image: item.image,
      permalink: `/recipe/detail/${item.slug}`,
      user: item.user.fullname,
      time: `Durasi ${item.cookduration}`,
    }));

  render() {
    const { recipes } = this.props;
    const items = this.parseRecipesData(recipes);

    return <CardThumbnailList items={items} column="3" />;
  }
}

ListLayout.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
      }),
      created_at: PropTypes.string.isRequired,
    }),
  ),
};

export default ListLayout;
