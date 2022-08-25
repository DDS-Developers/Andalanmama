/**
 * scenes/MyScheduleRecipeMain/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { Container, View } from 'native-base';
import { compose } from 'redux';

import { withAuth } from '../../providers/Auth';
import { withRecipeSelect } from '../../providers/RecipeSelect';
import { withMyScheduleItem } from '../../providers/MyScheduleItem';
import ListRecipe from '../../components/ListRecipe';

import Paragraph from '../../components/Paragraph';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Text from '../../components/Text';

import IconCooking from '../../images/icon-cooking.png';
import MenuWrapper from '../RecipeBookItems/MenuWrapper';
import NavWrapper from '../RecipeBookItems/NavWrapper';
import EmptyWrapper from '../RecipeBookItems/EmptyWrapper';
import InfoWrapper from '../RecipeBookItems/InfoWrapper';
import TitleWrapper from '../RecipeBookItems/TitleWrapper';
import RecipeItem from '../RecipeBookItems/RecipeItem';

const initialState = {
  type: 'my_recipe',
};

export class MyScheduleRecipeMain extends PureComponent {
  state = initialState;

  static navigationOptions = {
    title: 'Pilih Menu Andalan',
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
    const { navigation, schedule } = this.props;
    let target = 'MyScheduleCreate';
    if (schedule) {
      target = 'MyScheduleEdit';
    }
    navigation.navigate(target);
  };

  renderList = () => {
    const { items, loading, recipeMain } = this.props;
    let count = 0;
    if (recipeMain) {
      count = 1;
    }
    const errorMax = count > 0;
    let selectedId = 0;
    if (recipeMain) {
      selectedId = recipeMain.get('id');
    }

    return (
      <View style={{ flex: 1 }}>
        <InfoWrapper>
          <TitleWrapper>
            <Text size={400}>{`${count} Resep`}</Text>
          </TitleWrapper>
        </InfoWrapper>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
          <ListRecipe
            listLoading={loading}
            items={items.toArray()}
            total={30}
            onRenderItem={item => (
              <RecipeItem
                recipe={item}
                disable={errorMax}
                selected={selectedId === item.get('id')}
                onAddRecipe={recipe => this.props.changeRecipeMain(recipe)}
                onRemoveRecipe={() => this.props.changeRecipeMain(null)}
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
        </View>
      </View>
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
    const { loading } = this.props;

    return (
      <Container>
        <Header
          title="Select Main Recipe"
          leftSettings={{ type: 'back' }}
          rightSettings={{ label: 'Simpan', handler: () => this.doSave() }}
        />
        {this.renderMenu()}
        <View style={{ flex: 1, position: 'relative', backgroundColor: '#efefef' }}>
          <Loader visible={loading} />
          {this.renderList()}
        </View>
      </Container>
    );
  }
}

MyScheduleRecipeMain.propTypes = {
  loggedIn: PropTypes.bool,
  schedule: PropTypes.object,
  loadMyRecipes: PropTypes.func,
  loadBookmarks: PropTypes.func,
  loadMoreMyRecipes: PropTypes.func,
  loadMoreBookmarks: PropTypes.func,
  changeRecipeMain: PropTypes.func,
  setPaged: PropTypes.func,
  clearItems: PropTypes.func,
  loading: PropTypes.bool,
};

export default compose(
  withAuth,
  withMyScheduleItem,
  withRecipeSelect,
)(MyScheduleRecipeMain);
