import React from 'react';
import { func } from 'prop-types';
import qs from 'query-string';

import ApiRecipe from '../services/api/recipe';
import Loading from '../web/components/Loading';

class Search extends React.Component {
  state = {
    query: '',
    name: '',
    loading: true,
    recipe: {
      current_page: 1,
      data: [],
      last_page: 1,
    },
  };

  componentDidMount() {
    const url = qs.parse(this.props.location.search);
    this.setState({ query: url.query, name: url.query });
    setTimeout(() => {
      this.fetch();
    }, 100);
  }

  fetch = () => {
    ApiRecipe.search(this.state.query)
      .then(response => {
        this.setState({ recipe: response.data, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  nextPage = () => {
    const { recipe } = this.state;
    recipe.current_page += 1;
    this.setState({ recipe, loading: true });

    this.fetch();
  };

  onChangeKeyword = value => {
    this.setState({ query: value });
  };

  onSubmit = () => {
    const { query } = this.state;
    this.setState({ loading: true, name: query });
    this.props.history.push(`/search?query=${query}`);
    this.fetch();
  };

  render() {
    const { Layout, ...other } = this.props;
    const { loading, recipe, query, name } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <Layout
        recipe={recipe}
        query={query}
        name={name}
        onChangeKeyword={this.onChangeKeyword}
        onSubmit={this.onSubmit}
        nextPage={this.nextPage}
        {...other}
      />
    );
  }
}

Search.propTypes = {
  Layout: func,
};

export default Search;
