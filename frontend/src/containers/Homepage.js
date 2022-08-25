import React from 'react';
import PropTypes from 'prop-types';

import ApiCategory from '../services/api/category';
import ApiRecipe from '../services/api/recipe';
import ApiArticle from '../services/api/article';
import ApiBanner from '../services/api/banner';
import Loading from '../web/components/Loading';

// Karena kita hanya melakukan render diawal saja, dan tidak perlu
// melakukan rerender ulang karena state yang dipass tidak kemungkinan
// berubah maka cukup pakai PureComponent saja
class Homepage extends React.Component {
  state = {
    categories: null,
    recipes: null,
    articles: null,
    banner: null,
    query: '',
  };

  componentDidMount() {
    Promise.all([
      ApiCategory.getCategories(),
      ApiRecipe.getRecommendedRecipes(),
      ApiArticle.getRecentArticles(),
      ApiBanner.getBanner(),
    ]).then(([categories, recipes, articles, banner]) => {
      this.setState({
        categories: categories.data,
        recipes: recipes.data,
        articles: articles.data.data,
        banner: banner.data,
      });
    });
  }

  onChangeKeyword = value => {
    this.setState({ query: value });
  };

  onSubmit = () => {
    const { query } = this.state;
    this.props.history.push(`/search?query=${query}`);
  };

  render() {
    const { Layout, ...others } = this.props;
    const { categories, recipes, articles, banner } = this.state;
    if (articles === null && recipes === null && categories === null && banner === null) {
      return <Loading />;
    }
    return (
      <Layout
        articles={articles}
        recipes={recipes}
        categories={categories}
        banner={banner}
        onChangeKeyword={this.onChangeKeyword}
        onSubmit={this.onSubmit}
        {...others}
      />
    );
  }
}

Homepage.propTypes = {
  Layout: PropTypes.func,
};

export default Homepage;
