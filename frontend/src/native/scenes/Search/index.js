/**
 * scenes/Search/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Container } from 'native-base';
import { withSearch } from '../../providers/Search';
import { withFilter } from '../../providers/Filter';
import Content from '../../components/Content';
import Header from '../ExploreFilter/Header';
import FilterCategory from '../ExploreFilter/FilterCategory';
import Filter from './Filter';
import Wrapper from './Wrapper';
import List from './List';
import {
  FILTER_STATUS_ALL,
  FILTER_STATUS_RECIPE,
  FILTER_STATUS_BOOK,
  FILTER_STATUS_ACCOUNT,
} from '../../store/Search/constants';

export class SearchScene extends PureComponent {
  static navigationOptions = {
    title: 'Search',
    header: null,
  };

  componentDidMount() {
    this.onLoadResults();
  }

  onLoadResults = () => {
    this.props.loadRecipes();
    this.props.loadBooks();
    this.props.loadAccounts();
  };

  render() {
    const { filterStatus } = this.props;

    return (
      <Container>
        <Header
          searchHandler={() => {
            this.onLoadResults();
          }}
        />
        <Filter />
        <Content nospace clean>
          <Wrapper>
            {filterStatus === FILTER_STATUS_ALL || filterStatus === FILTER_STATUS_RECIPE ? (
              <List
                title="Resep Terbaru"
                type="recipe"
                items={this.props.searchRecipes}
                loading={this.props.recipeLoading}
              />
            ) : null}

            {filterStatus === FILTER_STATUS_ALL || filterStatus === FILTER_STATUS_BOOK ? (
              <List
                title="Buku Resep Terbaru"
                type="recipe_book"
                items={this.props.searchBooks}
                loading={this.props.bookLoading}
              />
            ) : null}

            {filterStatus === FILTER_STATUS_ALL || filterStatus === FILTER_STATUS_ACCOUNT ? (
              <List
                title="Akun Terbaru"
                type="account"
                items={this.props.searchAccounts}
                loading={this.props.accountLoading}
              />
            ) : null}
          </Wrapper>
        </Content>
        <FilterCategory
          onSubmit={() => {
            this.props.setFilterDialog(false);
            this.props.navigation.navigate('ExploreFilter');
          }}
        />
      </Container>
    );
  }
}

SearchScene.propTypes = {
  navigation: PropTypes.object,
  filterStatus: PropTypes.string,
  searchRecipes: PropTypes.object,
  searchBooks: PropTypes.object,
  searchAccounts: PropTypes.object,
  recipeLoading: PropTypes.bool,
  bookLoading: PropTypes.bool,
  accountLoading: PropTypes.bool,
  loadRecipes: PropTypes.func,
  loadBooks: PropTypes.func,
  loadAccounts: PropTypes.func,
  setFilterDialog: PropTypes.func,
};

export default compose(
  withSearch,
  withFilter,
)(SearchScene);
