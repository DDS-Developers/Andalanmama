/**
 * scenes/RecipeBookItems/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { Container, View } from 'native-base';
import { compose } from 'redux';

import { withAuth } from '../../providers/Auth';
import { withRecipeSelect } from '../../providers/RecipeSelect';
import { withRecipeBook } from '../../providers/RecipeBook';
import ListRecipe from '../../components/ListRecipe';

// import Content from '../../components/Content';
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

    this.props.clearItems();
    this.props.loadMyRecipes();
  }

  doSave = () => {
    const { navigation, recipeBook } = this.props;
    let target = 'RecipeBookCreate';
    if (recipeBook) {
      target = 'RecipeBookEdit';
    }
    navigation.navigate(target);
  };

  renderList = () => {
    const { type } = this.state;
    const { items, loading, bookRecipeIds, bookRecipes } = this.props;
    const count = bookRecipes.count();
    const errorMax = count >= maxSelected;

    return (
      <Pane column>
        <InfoWrapper>
          <TitleWrapper>
            <Text size={400}>{`${count} Resep`}</Text>
          </TitleWrapper>
          {type === 'bookmark' ? (
            <View>
              <Text>Lengkapi buku resep kamu dari resep yang sudah kamu tandai</Text>
              <Text textDecorationLine="underline">(Maks.10 resep)</Text>
            </View>
          ) : (
            <View>
              <Text>Lengkapi buku resep kamu dari resep yang sudah kamu buat</Text>
              <Text textDecorationLine="underline">(Maks.10 resep)</Text>
            </View>
          )}
        </InfoWrapper>
        <ListRecipe
          listLoading={loading}
          items={items.toArray()}
          total={30}
          onRenderItem={item => (
            <RecipeItem
              recipe={item}
              disable={errorMax}
              selected={bookRecipeIds.find(id => item.get('id') === id)}
              onAddRecipe={recipe => this.props.addBookRecipe(recipe)}
              onRemoveRecipe={recipeId => this.props.removeBookRecipe(recipeId)}
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
      message = 'Kamu belum mempunyai menu andalan favorit, tandai sekarang!';
    } else {
      message = 'Kamu belum punya resep apapun di sini, ayo buat resep original kamu';
    }

    return this.renderEmptyContent(message);
  };

  renderMenu = () => {
    const { type } = this.state;
    const filters = [
      {
        title: 'Resep Saya',
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
          rightSettings={{ label: 'Simpan', handler: () => this.doSave() }}
        />
        {this.renderMenu()}
        <View style={{ flex: 1, position: 'relative', backgroundColor: '#efefef' }}>
          {items && items.count() > 0 ? this.renderList() : this.renderEmpty()}
          <Loader visible={loading} />
        </View>
      </Container>
    );
  }
}

RecipeBookItems.propTypes = {
  loggedIn: PropTypes.bool,
  bookRecipes: PropTypes.object,
  bookRecipeIds: PropTypes.object,
  recipeBook: PropTypes.object,
  loadMyRecipes: PropTypes.func,
  loadBookmarks: PropTypes.func,
  loadMoreMyRecipes: PropTypes.func,
  loadMoreBookmarks: PropTypes.func,
  addBookRecipe: PropTypes.func,
  removeBookRecipe: PropTypes.func,
  setPaged: PropTypes.func,
  clearItems: PropTypes.func,
  loading: PropTypes.bool,
};

export default compose(
  withAuth,
  withRecipeBook,
  withRecipeSelect,
)(RecipeBookItems);
