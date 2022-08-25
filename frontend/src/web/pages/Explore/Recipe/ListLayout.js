import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import CardThumbnailList from '../../../components/CardThumbnailList';
import Utils from '../../../helpers/utils';

// eslint-disable-next-line react/prefer-stateless-function
class ListLayout extends React.Component {
  state = {
    items: [],
  };

  componentWillMount() {
    const { recipes } = this.props;
    const items = this.parseRecipesData(recipes);

    this.setState({
      items,
    });
  }

  doLoadMore = () => {
    const { items } = this.state;
    const recipes = this.props.getLoadMore();
    const newItems = this.parseRecipesData(recipes);

    this.setState({
      items: items.concat(newItems),
    });
  };

  parseRecipesData = recipes => {
    const items = recipes.map(item => ({
      id: item.id,
      title: item.name,
      image: item.image,
      permalink: `/recipe/detail/${item.id}`,
      user: item.user.fullname,
      time: distanceInWordsToNow(new Date(Utils.convertDateForIos(item.created_at)), {
        addSuffix: true,
      }),
    }));
    return items;
  };

  render() {
    return (
      <CardThumbnailList
        items={this.state.items}
        onLoadMore={this.doLoadMore}
        loadMore
        column="3"
      />
    );
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
  getLoadMore: PropTypes.func.isRequired,
};

export default ListLayout;
