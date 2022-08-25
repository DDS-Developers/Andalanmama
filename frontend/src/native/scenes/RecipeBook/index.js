/**
 * scenes/RecipeBook/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image } from 'react-native';
import { Container, View, Icon } from 'native-base';
import { withRecipeBook } from '../../providers/RecipeBook';
import { withAuth } from '../../providers/Auth';

import ListRecipe from '../../components/ListRecipe';
import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';
import Text from '../../components/Text';
import List, { withList } from '../../containers/List';
import IconCooking from '../../images/icon-cooking.png';

import Filter from './Filter';
import RecipeBookItem from './RecipeBookItem';
import ButtonCreateWrapper from './ButtonCreateWrapper';
import IconCreateWrapper from './IconCreateWrapper';
import EmptyWrapper from './EmptyWrapper';

export class RecipeBookScene extends PureComponent {
  static navigationOptions = {
    title: 'Buku Resep Saya',
    header: null,
  };

  state = {
    showDeleteConfirm: false,
    deletedId: 0,
  };

  componentDidMount() {
    const { loggedIn, navigation } = this.props;
    if (!loggedIn) {
      navigation.navigate('Login');
    }
    this.blurUnsubscribe = this.props.navigation.addListener('blur', () => {
      this.onUnfocusScene();
    });

    this.focusUnsubscribe = this.props.navigation.addListener('focus', () => {
      this.onFocusScene();
    });
  }

  onFocusScene = () => {
    const { loggedIn } = this.props;
    if (loggedIn) {
      this.props.loadRecipeBooks();
    }
  };

  onUnfocusScene = () => {
    this.props.changeFilterStatus('all');
    this.props.changeFilterLabel('Semua');
  };

  componentWillUnmount() {
    this.blurUnsubscribe();
    this.focusUnsubscribe();
  }

  renderList = () => {
    const { listLoading, listItems } = this.props;

    return (
      <ListRecipe
        listLoading={listLoading}
        items={listItems.toArray()}
        total={30}
        onRenderItem={item => (
          <RecipeBookItem
            key={`recipe-book-${item.get('id')}`}
            recipeBook={item}
            onDelete={id => {
              this.setState({
                showDeleteConfirm: true,
                deletedId: id,
              });
            }}
          />
        )}
        onLoadMore={paged => {
          this.props.setListPaged(paged);
          this.props.loadMoreRecipeBooks();
        }}
        onRefresh={() => {
          this.props.loadRecipeBooks();
        }}
        onRenderEmpty={this.renderEmpty}
      />
    );
  };

  renderButtonCreate = () => {
    const { listItems, navigation } = this.props;

    return (
      <ButtonCreateWrapper onPress={() => navigation.navigate('RecipeBookCreate')}>
        {!listItems || listItems.count() < 1 ? <Text>Buat Buku Resep</Text> : null}
        <IconCreateWrapper>
          <Icon style={{ color: '#ffffff' }} type="MaterialIcons" name="add" />
        </IconCreateWrapper>
      </ButtonCreateWrapper>
    );
  };

  renderEmpty = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {'Kamu belum memiliki Bu Resep, yuk buat Buku Resep mama sekarang!'}
      </Paragraph>
    </EmptyWrapper>
  );

  renderDeleteConfirm = () => {
    const { showDeleteConfirm } = this.state;

    return (
      <Dialog
        visible={showDeleteConfirm}
        title="Are You Sure?"
        message="Yakinkah anda akan menghapus koleksi resep ini?"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  showDeleteConfirm: false,
                });
              }}
            >
              Batal
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showDeleteConfirm: false,
                });
                this.props.deleteRecipeBook(this.state.deletedId);
              }}
            >
              Lanjutkan
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  render() {
    const { listLoading } = this.props;

    return (
      <Container>
        <Header title="Buku Resep Saya" leftSettings={{ type: 'back' }} />
        <Filter />
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            backgroundColor: '#efefef',
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{this.props.filterLabel}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#efefef' }}>
          <List>
            <Loader visible={listLoading} />
            <View style={{ flex: 1, zIndex: 1 }}>{this.renderList()}</View>
          </List>
        </View>
        {this.renderButtonCreate()}
        {this.renderDeleteConfirm()}
      </Container>
    );
  }
}

RecipeBookScene.propTypes = {
  loadRecipeBooks: PropTypes.func,
  loadMoreRecipeBooks: PropTypes.func,
  changeFilterStatus: PropTypes.func,
  changeFilterLabel: PropTypes.func,
  deleteRecipeBook: PropTypes.func,
  setListPaged: PropTypes.func,
  loggedIn: PropTypes.bool,
  listLoading: PropTypes.bool,
  listItems: PropTypes.object,
  navigation: PropTypes.object,
  filterLabel: PropTypes.string,
};

export default compose(
  withAuth,
  withList,
  withRecipeBook,
)(RecipeBookScene);
