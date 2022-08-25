/**
 * scenes/RecipeBookItems/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { Container, View } from 'native-base';
import { compose } from 'redux';
import { fromJS } from 'immutable';

import ListHelper from '../../helpers/List';
import { withAuth } from '../../providers/Auth';
import { withRecipeSelect } from '../../providers/RecipeSelect';
import ListRecipe from '../../components/ListRecipe';

import Content from '../../components/Content';
import Paragraph from '../../components/Paragraph';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Pane from '../../components/Pane';
import Text from '../../components/Text';

import IconCooking from '../../images/icon-cooking.png';
import MenuWrapper from './MenuWrapper';
import NavWrapper from './NavWrapper';
import EmptyWrapper from './EmptyWrapper';
import InfoWrapper from './InfoWrapper';
import TitleWrapper from './TitleWrapper';
import RecipeItem from './RecipeItem';

const initialState = {
  type: 'my_recipe',
  recipes: fromJS([]),
  recipeIds: fromJS([]),
  recipeBook: null,
};
const maxSelected = 10;

export class RecipeBookItems extends PureComponent {
  state = initialState;

  static navigationOptions = {
    title: 'Add Recipe',
    header: null,
  };

  componentDidMount() {
    const { loggedIn, navigation } = this.props;
    if (!loggedIn) {
      navigation.navigate('Login');
    }

    const recipeBook = navigation.getParam('recipeBook');
    if (!recipeBook) {
      navigation.navigate('RecipeBookCreate');
    }
    this.setState({
      recipeBook,
    });

    const recipes = navigation.getParam('recipes');
    if (recipes) {
      this.setRecipes(recipes);
    }

    this.props.clearItems();
    this.props.loadMyRecipes();
  }

  setRecipes = recipes => {
    const ids = [];
    recipes.forEach(item => ids.push(item.get('id')));
    this.setState({
      recipes,
      recipeIds: fromJS(ids),
    });
  };

  doSave = () => {
    const { navigation, recipeBook } = this.props;
    let target = 'RecipeBookCreate';
    if (recipeBook) {
      target = 'RecipeBookEdit';
    }
    navigation.navigate(target, {
      recipes: this.state.recipes,
      recipeBook: this.state.recipeBook,
    });
  };

  addRecipe = item => {
    let { recipes, recipeIds } = this.state;
    let dataItem = item;
    if (typeof item.get === 'undefined') {
      dataItem = fromJS(item);
    }
    recipes = recipes.push(dataItem);
    recipeIds = recipeIds.push(dataItem.get('id'));
    this.setState({
      recipes,
      recipeIds,
    });
  };

  removeRecipe = recipe => {
    const id = recipe.get('id');
    let { recipes, recipeIds } = this.state;
    recipes = ListHelper.removeItemById(id, recipes);
    recipeIds = recipeIds.filterNot(recipeId => recipeId === id);
    this.setState({
      recipes,
      recipeIds,
    });
  };

  renderList = () => {
    const { type, recipeIds, recipes } = this.state;
    const { items, loading } = this.props;
    const count = recipes.count();
    const errorMax = count >= maxSelected;

    let message = '';
    if (type === 'bookmark') {
      message =
        'Ditandai: Lengkapi buku resep kamu dari resep yang sudah kamu tandai (Maks.10 resep)';
    } else {
      message =
        'Resep Saya: Lengkapi buku resep  kamu dari resep yang sudah kamu buat (Maks.10 resep)';
    }

    return (
      <Pane column>
        <InfoWrapper>
          <TitleWrapper>
            <Text size={400}>{`${count} Resep`}</Text>
          </TitleWrapper>
          <Paragraph>{message}</Paragraph>
        </InfoWrapper>
        <ListRecipe
          listLoading={loading}
          items={items.toArray()}
          total={30}
          onRenderItem={item => (
            <RecipeItem
              recipe={item}
              disable={errorMax}
              selected={recipeIds.find(id => item.get('id') === id)}
              onAddRecipe={recipe => this.addRecipe(recipe)}
              onRemoveRecipe={recipe => this.removeRecipe(recipe)}
            />
          )}
          onLoadMore={paged => {
            this.props.setPaged(paged);
            if (this.state.type === 'bookmark') {
              this.props.loadMoreBookmarks();
            } else {
              this.props.loadMoreMyRecipes();
            }
          }}
          onRefresh={() => {
            if (this.state.type === 'bookmark') {
              this.props.loadBookmarks();
            } else {
              this.props.loadMyRecipes();
            }
          }}
        />
      </Pane>
    );
  };

  renderEmptyContent = message => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {message}
      </Paragraph>
    </EmptyWrapper>
  );

  renderEmpty = () => {
    const { type } = this.state;

    let message = '';
    if (type === 'bookmark') {
      message = 'Kamu belum mempunyai menu andalan favorit, tandai sekarang! ';
    } else {
      message = 'Kamu belum punya resep apapun di sini, ayo buat resep original kamu';
    }

    return this.renderEmptyContent(message);
  };

  renderMenu = () => {
    const { type } = this.state;
    const filters = [
      {
        title: 'My Recipe',
        value: 'my_recipe',
      },
      {
        title: 'Ditandai',
        value: 'bookmark',
      },
    ];

    let Component = <View />;

    return (
      <MenuWrapper>
        {filters.map(filter => {
          const settings = {
            active: false,
            first: filter.value === 'my_recipe',
            last: filter.value === 'bookmark',
          };
          if (type !== filter.value) {
            Component = (
              <TouchableOpacity
                first={filter.value === 'my_recipe'}
                last={filter.value === 'bookmark'}
                onPress={() => {
                  this.setState({
                    type: filter.value,
                  });
                  this.props.clearItems();
                  if (filter.value === 'my_recipe') {
                    this.props.loadMyRecipes();
                  } else if (filter.value === 'bookmark') {
                    this.props.loadBookmarks();
                  }
                }}
              />
            );
          } else {
            settings.active = true;
          }
          return (
            <NavWrapper key={`menu-filter-${filter.value}`} component={Component} {...settings}>
              <Text>{filter.title}</Text>
            </NavWrapper>
          );
        })}
      </MenuWrapper>
    );
  };

  render() {
    const { items, loading } = this.props;

    return (
      <Container>
        <Header
          title="Add Recipe"
          leftSettings={{ type: 'back' }}
          rightSettings={{ label: 'Done', handler: () => this.doSave() }}
        />
        {this.renderMenu()}
        <Content nospace>
          <View style={{ flex: 1, position: 'relative' }}>
            {items && items.count() > 0 ? this.renderList() : this.renderEmpty()}
            <Loader visible={loading} />
          </View>
        </Content>
      </Container>
    );
  }
}

RecipeBookItems.propTypes = {
  loggedIn: PropTypes.bool,
  items: PropTypes.object,
  loadMyRecipes: PropTypes.func,
  loadBookmarks: PropTypes.func,
  loadMoreMyRecipes: PropTypes.func,
  loadMoreBookmarks: PropTypes.func,
  setPaged: PropTypes.func,
  clearItems: PropTypes.func,
  loading: PropTypes.bool,
};

export default compose(
  withAuth,
  withRecipeSelect,
)(RecipeBookItems);
