import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../web/components/Loading';
import ApiCategory from '../services/api/category';
import ApiRecipe from '../services/api/recipe';

class Category extends React.Component {
  state = {
    categories: [],
    category: 0,
    loading: true,
    recipe: {
      current_page: 1,
      data: [],
      last_page: 1,
    },
  };

  componentDidMount() {
    this.fetchCategory();
    this.fetchRecipe(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.resetState();
      this.fetchRecipe(this.props.match.params.id);
    }
  }

  resetState = () => {
    this.setState({
      recipe: {
        current_page: 1,
        data: [],
        last_page: 1,
      },
    });
  };

  fetchCategory = () => {
    ApiCategory.getCategories().then(categories => {
      this.setState({
        categories: categories.data,
      });
    });
  };

  fetchRecipe = categoryID => {
    this.setState({ category: parseInt(categoryID, 0) });
    ApiRecipe.filterRecipe(this.state.recipe.current_page, categoryID)
      .then(recipe => {
        this.setState({
          loading: false,
          recipe: {
            current_page: recipe.data.current_page,
            last_page: recipe.data.last_page,
            data: [...this.state.recipe.data, ...recipe.data.data],
          },
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
        });
      });
  };

  nextPage = () => {
    const { recipe } = this.state;
    recipe.current_page += 1;
    this.setState({ recipe });

    this.fetchRecipe(this.props.match.params.id);
  };

  onChangeKeyword = value => {
    this.setState({ query: value });
  };

  onSubmit = () => {
    const { query } = this.state;
    this.props.history.push(`/search?query=${query}`);
  };

  render() {
    const { Layout } = this.props;
    const { categories, category, recipe, loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <Layout
        categories={categories}
        category={category}
        recipe={recipe}
        onChangeKeyword={this.onChangeKeyword}
        onSubmit={this.onSubmit}
        nextPage={this.nextPage}
      />
    );
  }
}

Category.propTypes = {
  Layout: PropTypes.func,
};

export default Category;
