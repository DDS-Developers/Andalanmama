/**
 * scenes/RecipeDetail/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, StatusBar, PermissionsAndroid, Modal, Linking } from 'react-native';
import { Container, Icon, Button, Footer, Text, View, Spinner, Form, Textarea } from 'native-base';
// import AsyncStorage from '@react-native-community/async-storage';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';
import { compose } from 'redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { withComments } from '../../providers/Comments';
import { BaseUrl } from '../../services/http';
import { withApp } from '../../providers/App';
import { withAuth } from '../../providers/Auth';
import { withRecipe } from '../../providers/Recipe';
import { withMyProfile } from '../../providers/MyProfile';
import AddBookmark from '../../containers/AddBookmark';
import HeaderLeft from '../../components/Header/Left';

import HeaderBody from '../../components/Header/BodyWrapper';
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';
import IconCooking from '../../images/icon-cooking.png';
import EmptyWrapper from './EmptyWrapper';
import DetailDesc from './DetailDesc';
import RecipeThumbnail from './Thumbnail';
import ButtonLike from './ButtonLike';
import ButtonComment from './ButtonComment';
import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
import Comments from './Comments';
import VideoModal from './VideoModal';
import defaultProfile from './Comments/baseline_person.png';
import FieldErrorInfo from '../../components/FieldErrorInfo';

export class RecipeDetailScene extends PureComponent {
  static navigationOptions = {
    title: 'RecipeDetail',
    header: null,
  };

  state = {
    headerBlock: false,
    downloadLoading: false,
    showDeleteConfirm: false,
    deletedId: 0,
    modalVisible: false,
    profile: null,
  };

  componentDidMount() {
    const { route, loadRecipe } = this.props;
    const { id, restricted } = route.params;

    if (id) {
      loadRecipe(id, restricted);
    }
  }

  shareRecipe = recipe => {
    const shareOptions = {
      title: 'Share Recipe',
      message: `Resep andalan: ${recipe.get('name')}`,
      failOnCancel: false,
      // url: 'https://play.google.com/store/apps/details?id=com.andalanmama'
      url: `http://andalanmama.com/recipe/detail/${recipe.get('id')}`,
    };

    Share.open(shareOptions).then(res => {
      if (typeof res.dismissedAction === 'undefined') {
        this.props.addSharePoint();
      }
    });
  };

  downloadRecipe = async recipe => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Example App',
        message: 'Example App access to your location ',
      },
    );

    if (granted) {
      // const apiUrl = `https://andalanmama.com/recipe/download/${recipe.get('id')}`;
      const apiUrl = `${BaseUrl}recipe/download/${recipe.get('id')}`;
      const date = new Date();
      const { config, fs } = RNFetchBlob;
      // eslint-disable-next-line prefer-destructuring
      const fileDir = fs.dirs.DownloadDir;
      const path = `${fileDir}/recipe_${Math.floor(date.getTime() + date.getSeconds() / 2)}.pdf`;

      // Show loader
      this.setState({ downloadLoading: true });

      await config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
          notification: true,
          path, // this is the path where your downloaded file will live in
          mime: 'application/pdf',
          title: recipe.get('name'),
          description: 'Mengunduh resep.',
        },
      })
        .fetch('GET', apiUrl)
        .then(() => {
          // Hide loader
          this.setState({ downloadLoading: false });
          // Show Alert
          this.props.showAppAlert(`The file saved to ${path}`, 'Berhasil mengunduh');
        })
        // Something went wrong:
        .catch(() => {
          // error handling
          // console.log(errorMessage);
          // console.log(statusCode);
          // Show Alert
          this.props.showAppAlert(
            `Gagal mengunduh resep, silahkan coba sekali lagi.`,
            'Gagal mengunduh',
          );
        });
    } else {
      // Show Alert
      this.props.showAppAlert(
        `Gagal mengunduh resep, silahkan coba sekali lagi.`,
        'Gagal mengunduh',
      );
    }
  };

  likeRecipe = evt => {
    const { loggedIn, navigation, showAppAlert, liked, recipe } = this.props;
    evt.preventDefault();

    if (!loggedIn) {
      showAppAlert(
        'Kamu harus daftar atau masuk untuk menggunakan atau mengakses fitur ini.',
        'Fitur ini belum bisa digunakan',
        {
          label: 'Ok',
          callback: () => navigation.navigate('Login'),
        },
      );
    } else if (liked) {
      this.props.removeLike(recipe.get('id'));
    } else {
      this.props.addLike(recipe.get('id'));
    }
  };

  optionsBar = () => {
    const { recipe, liked, likeCount, navigation } = this.props;
    if (recipe) {
      const marked = recipe.get('bookmarked');

      return (
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#efefef',
            paddingTop: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <ButtonLike
              handler={this.likeRecipe}
              likeCount={likeCount}
              status={recipe.get('status')}
              liked={liked}
            />
            <ButtonComment
              label="komentar"
              icon="forum"
              navigation={navigation}
              target="RecipeComment"
              recipeId={recipe.get('id')}
              total={recipe.get('comment_count')}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <AddBookmark recipe={recipe} recipeMarked={marked} />
            <Button transparent onPress={() => this.shareRecipe(recipe)}>
              <Icon
                name="share"
                type="MaterialIcons"
                style={{ color: '#000000', marginRight: 0 }}
              />
            </Button>
          </View>
        </View>
      );
    }
    return null;
  };

  renderEmpty = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        Resep tidak ditemukan
      </Paragraph>
    </EmptyWrapper>
  );

  renderDeleteConfirm = () => {
    const { showDeleteConfirm, deletedId } = this.state;
    return (
      <Dialog
        visible={showDeleteConfirm}
        title="Are You Sure?"
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
                this.props.deleteRecipeComment(deletedId);
              }}
            >
              Lanjutkan
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  checkInputError = fieldName => {
    const { inputErrors } = this.props;
    let isError = false;
    if (inputErrors.get(fieldName)) {
      isError = true;
    }
    return isError;
  };

  renderEditComment = () => {
    const { deletedId, profile } = this.state;
    const { inputErrors } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => {
          console.warn('Modal has been closed.');
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, .4)' }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 5,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(131, 131, 131, .25)',
              }}
            >
              <Button
                style={{ width: 45 }}
                transparent
                onPress={() => {
                  this.setState({
                    modalVisible: false,
                  });
                }}
              >
                <Icon
                  style={{ color: '#E83249', marginLeft: 0, marginRight: 0 }}
                  type="MaterialIcons"
                  name="arrow-back"
                />
              </Button>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#E83249',
                  marginRight: 45,
                  flex: 1,
                }}
              >
                Ubah Komentar
              </Text>
            </View>
            <View
              style={{
                paddingTop: 15,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              {profile ? (
                <Image
                  style={{ width: 40, height: 40, borderRadius: 40, marginRight: 15 }}
                  source={{ uri: profile }}
                  resizeMode="cover"
                />
              ) : (
                <Image
                  style={{ width: 40, height: 40, borderRadius: 40, marginRight: 15 }}
                  source={defaultProfile}
                  resizeMode="cover"
                />
              )}
              <Form style={{ flex: 1, flexDirection: 'column' }}>
                <Textarea
                  placeholder="Tambahkan Komentar…"
                  style={{
                    fontSize: 13,
                    height: 40,
                    borderWidth: 1,
                    borderColor: '#f4f4f4',
                    borderRadius: 6,
                    paddingVertical: 10,
                  }}
                  value={this.props.bodyComment}
                  error={this.checkInputError('bodyComment')}
                  onChangeText={value => this.props.changeBodyComment(value)}
                />
                <View>
                  <FieldErrorInfo message={inputErrors.get('bodyComment')} bottom />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginTop: 20,
                  }}
                >
                  <Button
                    style={{ marginRight: 15 }}
                    small
                    light
                    onPress={() => {
                      this.setState({
                        modalVisible: false,
                      });
                    }}
                  >
                    <Text style={{ fontSize: 12, textTransform: 'capitalize' }}> Batal </Text>
                  </Button>
                  {this.checkInputError('bodyComment') ? (
                    <Button small disabled>
                      <Text style={{ fontSize: 12, textTransform: 'capitalize' }}>Perbaharui</Text>
                    </Button>
                  ) : (
                    <Button
                      style={{ backgroundColor: '#E83249' }}
                      light
                      small
                      onPress={() => {
                        this.setState({
                          modalVisible: false,
                        });
                        this.props.recipeUpdateComment(deletedId);
                      }}
                    >
                      <Text style={{ color: '#ffffff', fontSize: 12, textTransform: 'capitalize' }}>
                        Perbaharui
                      </Text>
                    </Button>
                  )}
                </View>
              </Form>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  renderMain = () => {
    const { recipe } = this.props;
    return (
      <React.Fragment>
        <RecipeThumbnail />
        {this.optionsBar()}
        <DetailDesc />
        <Comments
          onDelete={id => {
            this.setState({
              showDeleteConfirm: true,
              deletedId: id,
            });
          }}
          onEdit={(id, text, profile) => {
            this.setState({
              modalVisible: true,
              deletedId: id,
              profile,
            });
            this.props.setBodyComment(text);
          }}
          recipeId={recipe.get('id')}
        />
      </React.Fragment>
    );
  };

  render() {
    const { recipe, detailLoading } = this.props;
    const { headerBlock } = this.state;
    return (
      <>
        <Container>
          <StatusBar backgroundColor="#e83249" barStyle="light-content" />
          <View
            style={{
              height: 50,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: headerBlock ? '#ffffff' : 'transparent',
            }}
          >
            <HeaderLeft type="back" color={headerBlock ? '#000000' : '#ffffff'} />
            <HeaderBody />
          </View>
          <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              onScroll={evt => {
                const { y } = evt.nativeEvent.contentOffset;
                if (y > 20) {
                  this.setState({ headerBlock: true });
                } else {
                  this.setState({ headerBlock: false });
                }
              }}
            >
              {recipe ? this.renderMain() : this.renderEmpty()}
            </ScrollView>
          </View>
          {recipe ? (
            <Footer>
              <Button
                block
                style={{ backgroundColor: '#e83249', flex: 1, height: '100%' }}
                // onPress={() => this.downloadRecipe(recipe)}
                onPress={() => Linking.openURL(recipe.get('downloadpdf'))}
              >
                {this.state.downloadLoading ? (
                  <Spinner color="white" />
                ) : (
                  <Text style={{ color: '#ffffff' }}>UNDUH RESEP</Text>
                )}
              </Button>
            </Footer>
          ) : null}
          <Loader visible={detailLoading} />
        </Container>
        {this.renderDeleteConfirm()}
        {this.renderEditComment()}
        {recipe ? <VideoModal /> : null}
      </>
    );
  }
}

RecipeDetailScene.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  detailLoading: PropTypes.bool,
  loadRecipe: PropTypes.func,
  recipe: PropTypes.object,
  showAppAlert: PropTypes.func,
  loggedIn: PropTypes.bool,
  liked: PropTypes.bool,
  likeCount: PropTypes.number,
  addLike: PropTypes.func,
  removeLike: PropTypes.func,
  deleteRecipeComment: PropTypes.func,
  setBodyComment: PropTypes.func,
  recipeUpdateComment: PropTypes.func,
  changeBodyComment: PropTypes.func,
  addSharePoint: PropTypes.func,
  bodyComment: PropTypes.string,
  inputErrors: PropTypes.object,
};

const NavigationWrapper = props => {
  const navigation = useNavigation();
  const route = useRoute();

  return <RecipeDetailScene {...props} navigation={navigation} route={route} />;
};

export default compose(
  withApp,
  withAuth,
  withRecipe,
  withComments,
  withMyProfile,
)(NavigationWrapper);
