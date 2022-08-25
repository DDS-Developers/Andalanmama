import React from 'react';
import PropTypes, { number } from 'prop-types';
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
    const { recipes, perPage } = this.props;
    const items = this.parseRecipesData(recipes);

    return <CardThumbnailList items={items} column={String(perPage)} />;
  }
}

ListLayout.propTypes = {
  perPage: number.isRequired,
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
