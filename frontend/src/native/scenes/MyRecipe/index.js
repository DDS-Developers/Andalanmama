/**
 * scenes/MyRecipe/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image } from 'react-native';
import { Container, View, Icon } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import { withTourGuide } from '../../providers/TourGuide';
import { withAuth } from '../../providers/Auth';
import { withMyRecipe } from '../../providers/MyRecipe';
import { withMyRecipeList } from '../../providers/MyRecipeList';
import AuthRoot from '../../containers/AuthRoot';
import { withExplore } from '../../providers/Explore';

import IconCampaign from '../Explore/Campaign/icon';
import ListRecipe from '../../components/ListRecipe';
import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';
import Text from '../../components/Text';
import IconCooking from '../../images/icon-cooking.png';
import Filter from './Filter';
import RecipeItem from './RecipeItem';
import ButtonCreateWrapper from './ButtonCreateWrapper';
import IconCreateWrapper from './IconCreateWrapper';
import EmptyWrapper from './EmptyWrapper';

export class MyRecipeScene extends PureComponent {
  static navigationOptions = {
    title: 'Resep Saya',
  };

  state = {
    showDeleteConfirm: false,
    deletedId: 0,
  };

  componentDidMount() {
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
      this.checkSkipped();
      this.props.loadMyRecipes();
    }
  };

  onUnfocusScene = () => {
    const { setVisible } = this.props;
    this.props.changeMyRecipeFilterStatus('all');
    this.props.changeMyRecipeFilterLabel('Semua');
    setVisible(false);
  };

  checkSkipped = async () => {
    const { skipped, setStep, setVisible } = this.props;
    const myRecSkipped = await AsyncStorage.getItem('ANDALAN_TOUR_GUIDE_MY_RECIPE');

    if (!skipped && !myRecSkipped) {
      setVisible(true);
      setStep(16);
    } else {
      setVisible(false);
    }
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
          <RecipeItem
            key={`recipe-${item.get('id')}`}
            recipe={item}
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
          this.props.loadMoreMyRecipes();
        }}
        onRefresh={() => {
          this.props.loadMyRecipes();
        }}
        onRenderEmpty={this.renderEmpty}
      />
    );
  };

  renderButtonCreate = () => {
    const { listItems, navigation } = this.props;

    return (
      <ButtonCreateWrapper onPress={() => navigation.navigate('MyRecipeCreate')}>
        {!listItems || listItems.count() < 1 ? <Text>Buat Resep Saya</Text> : null}
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
        {'Kamu belum punya Resep Andalan. Ayo buat sekarang!'}
      </Paragraph>
    </EmptyWrapper>
  );

  renderDeleteConfirm = () => {
    const { showDeleteConfirm } = this.state;

    return (
      <Dialog
        visible={showDeleteConfirm}
        title="Apakah kamu setuju?"
        message="Yakinkah anda akan menghapus resep ini?"
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
                this.props.deleteMyRecipe(this.state.deletedId);
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
      <AuthRoot>
        <Container>
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
          <View style={{ flex: 1, backgroundColor: '#efefef', position: 'relative' }}>
            <Loader visible={listLoading} />
            <View style={{ flex: 1, zIndex: 1 }}>{this.renderList()}</View>
          </View>
          {this.renderButtonCreate()}
          {this.renderDeleteConfirm()}
        </Container>
        <IconCampaign {...this.props}/>
      </AuthRoot>
    );
  }
}

MyRecipeScene.propTypes = {
  loadMyRecipes: PropTypes.func,
  loadMoreMyRecipes: PropTypes.func,
  deleteMyRecipe: PropTypes.func,
  setListPaged: PropTypes.func,
  setVisible: PropTypes.func,
  changeMyRecipeFilterStatus: PropTypes.func,
  changeMyRecipeFilterLabel: PropTypes.func,
  listLoading: PropTypes.bool,
  listItems: PropTypes.object,
  navigation: PropTypes.object,
  loggedIn: PropTypes.bool,
  filterLabel: PropTypes.string,
  campaign: PropTypes.object,
  webviewCampaign: PropTypes.func,
};

export default compose(
  withAuth,
  withMyRecipeList,
  withMyRecipe,
  withTourGuide,
  withExplore,
)(MyRecipeScene);
