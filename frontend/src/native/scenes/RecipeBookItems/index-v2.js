/**
 * scenes/RecipeBookItems/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Image, TouchableOpacity } from 'react-native';
import { Container, View } from 'native-base';

import { loadRecipes, changeFilterStatus } from '../../store/MyRecipe/actions';
import { clearList } from '../../store/List/actions';
import { loadBookmarks } from '../../store/Bookmark/actions';
import { addRecipe } from '../../store/RecipeBook/actions';
import { makeSelectLoggedIn } from '../../store/Auth/selectors';
import { makeSelectLoading, makeSelectItems, makeSelectTotal } from '../../store/List/selectors';
import List from '../../containers/List';

import Content from '../../components/Content';
import Paragraph from '../../components/Paragraph';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Pane from '../../components/Pane';
import Text from '../../components/Text';

import IconCooking from '../../images/icon-cooking.png';
import ListWrapper from '../MyRecipe/ListWrapper';
import MenuWrapper from './MenuWrapper';
import NavWrapper from './NavWrapper';
import EmptyWrapper from './EmptyWrapper';
import InfoWrapper from './InfoWrapper';
import TitleWrapper from './TitleWrapper';
import RecipeItem from './RecipeItem';

const initialState = {
  type: 'my_recipe',
};

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
    this.props.clearList();
    this.props.loadMyRecipes();
  }

  renderList = () => {
    const { listTotal } = this.props;
    // const { type } = this.state;
    const message =
      'Lengkapi buku resep kamu dari resep yang sudah kamu simpan atau buat (Maks.10 resep)';

    return (
      <Pane column>
        <InfoWrapper>
          <TitleWrapper>
            <Text size={400}>{`${listTotal} Resep`}</Text>
          </TitleWrapper>
          <Paragraph>{message}</Paragraph>
        </InfoWrapper>
        <ListWrapper>
          {this.props.listItems.map(item => (
            <RecipeItem
              key={`recipe-${item.get('id')}`}
              recipe={item}
              onAddRecipe={recipe => this.props.addRecipe(recipe)}
            />
          ))}
        </ListWrapper>
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
                  this.props.clearList();
                  if (filter.value === 'my_recipe') {
                    this.props.changeMyRecipeFilterStatus('all');
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
    const { navigation, listItems, listLoading } = this.props;

    return (
      <Container>
        <Header
          title="Add Recipe"
          leftSettings={{ type: 'back' }}
          rightSettings={{ label: 'Done', handler: () => navigation.goBack() }}
        />
        {this.renderMenu()}
        <Content nospace>
          <List>
            <View style={{ flex: 1, position: 'relative' }}>
              {listItems && listItems.count() > 0 ? this.renderList() : this.renderEmpty()}
              <Loader visible={listLoading} />
            </View>
          </List>
        </Content>
      </Container>
    );
  }
}

RecipeBookItems.propTypes = {
  loggedIn: PropTypes.bool,
  navigation: PropTypes.object,
  listLoading: PropTypes.bool,
  listItems: PropTypes.object,
  listTotal: PropTypes.number,
  loadMyRecipes: PropTypes.func,
  clearList: PropTypes.func,
  changeMyRecipeFilterStatus: PropTypes.func,
  loadBookmarks: PropTypes.func,
  addRecipe: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadMyRecipes: () => dispatch(loadRecipes()),
    changeMyRecipeFilterStatus: status => dispatch(changeFilterStatus(status)),
    clearList: () => dispatch(clearList()),
    loadBookmarks: () => dispatch(loadBookmarks()),
    addRecipe: recipe => dispatch(addRecipe(recipe)),
  };
}

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
  listItems: makeSelectItems(),
  listTotal: makeSelectTotal(),
  listLoading: makeSelectLoading(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeBookItems);
