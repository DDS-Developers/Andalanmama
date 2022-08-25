/**
 * components/Profile/Tabs/index.js
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { ScrollView, View, Image, PermissionsAndroid } from 'react-native';
import { Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

import { BaseUrl } from '../../../services/http';
import { withApp } from '../../../providers/App';
import { withUser } from '../../../providers/User';

import Paragraph from '../../../components/Paragraph';
import IconCooking from '../../../images/icon-cooking.png';
import CardRecipe from '../../../components/CardRecipe';
import TabWrapper from './TabWrapper';
import Loader from '../../../components/Loader';
import EmptyWrapper from './EmptyWrapper';

// eslint-disable-next-line react/prefer-stateless-function
export class ProfileTabs extends Component {
  componentDidMount() {
    const { userId } = this.props;
    if (userId) {
      this.props.loadUserRecipeBook(userId);
      this.props.loadUserRecipes(userId);
    }
  }

  renderTabRecipe = () => {
    const { recipes } = this.props;
    return (
      <TabHeading style={{ backgroundColor: '#ffffff', marginRight: 1 }}>
        <Icon
          style={{ fontSize: 24, color: '#000000' }}
          type="MaterialIcons"
          name="developer-board"
        />
        {recipes && recipes.count() > 0 ? (
          <Text style={{ fontSize: 11, color: '#000000' }}>{recipes.get('total')} Resep Saya</Text>
        ) : null}
      </TabHeading>
    );
  };

  renderTabRecipeBook = () => {
    const { recipeBook } = this.props;
    return (
      <TabHeading style={{ backgroundColor: '#ffffff', marginLeft: 1 }}>
        <Icon style={{ fontSize: 24, color: '#000000' }} type="MaterialIcons" name="book" />
        {recipeBook && recipeBook.count() > 0 ? (
          <Text style={{ fontSize: 11, color: '#000000' }}>
            {recipeBook.get('total')} Buku Resep Saya
          </Text>
        ) : null}
      </TabHeading>
    );
  };

  renderRecipes = () => {
    const { recipes } = this.props;
    return (
      <TabWrapper>
        {recipes.get('data').map(item => {
          const actions = {
            settings: {
              options: ['Bagikan', 'Unduh Resep', 'Batal'],
              cancelButtonIndex: 2,
              // destructiveButtonIndex: 2,
            },
            handler: buttonIndex => {
              if (buttonIndex === 0) {
                this.shareRecipe(item);
              } else if (buttonIndex === 1) {
                this.downloadRecipe(item);
              }
            },
          };
          return (
            <View key={`recipe-${item.get('id')}`}>
              <CardRecipe
                image={item.get('image')}
                title={item.get('name')}
                id={item.get('id')}
                actions={actions}
                showCount
                likeCount={item.get('like_count')}
                commentCount={item.get('comment_count')}
              />
            </View>
          );
        })}
      </TabWrapper>
    );
  };

  renderRecipeBookList = () => {
    const { recipeBook } = this.props;
    return (
      <TabWrapper>
        {recipeBook.get('data').map(item => {
          // const actions = {
          //   settings: {
          //     options: ['Share', 'Cancel'],
          //     cancelButtonIndex: 1,
          //     // destructiveButtonIndex: 1,
          //   },
          //   handler: buttonIndex => {
          //     if (buttonIndex === 0) {
          //       this.shareRecipeBook(item);
          //     }
          //   },
          // };
          const actions = null;

          return (
            <View key={`recipe-book-${item.get('id')}`}>
              <CardRecipe
                image={item.get('recipes')}
                title={item.get('title')}
                id={item.get('id')}
                actions={actions}
              />
            </View>
          );
        })}
      </TabWrapper>
    );
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
          // Show Alert
          this.props.showAppAlert(`The file saved to ${path}`, 'Berhasil mengunduh resep');
        })
        // Something went wrong:
        .catch(() => {
          // error handling
          // console.log(errorMessage);
          // console.log(statusCode);
          // Show Alert
          this.props.showAppAlert(
            `Gagal mengunduh resep, silahkan coba sekali lagi.`,
            'Download Failed',
          );
        });
    } else {
      // Show Alert
      this.props.showAppAlert(
        `Gagal mengunduh resep, silahkan coba sekali lagi.`,
        'Download Failed',
      );
    }
  };

  shareRecipe = recipe => {
    const shareOptions = {
      title: 'Bagikan Resep',
      message: `Resep Andalan: ${recipe.get('name')}`,
      failOnCancel: false,
      url: `http://andalanmama.com/recipe/detail/${recipe.get('id')}`,
    };

    Share.open(shareOptions);
  };

  shareRecipeBook = recipeBook => {
    const shareOptions = {
      title: 'Bagikan Buku Resep',
      message: `Buku resep andalan: ${recipeBook.get('title')}`,
      failOnCancel: false,
      url: `http://andalanmama.com/recipe-book/detail/${recipeBook.get('id')}`,
    };

    Share.open(shareOptions);
  };

  renderEmptyRecipeBook = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {'empty recepbook list'}
      </Paragraph>
    </EmptyWrapper>
  );

  renderEmptyRecipes = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {'empty recep list'}
      </Paragraph>
    </EmptyWrapper>
  );

  render() {
    const { recipeBook, recipes, loadingRecipeBook } = this.props;
    return (
      <Tabs
        initialPage={0}
        tabBarUnderlineStyle={{ backgroundColor: '#E83249' }}
        tabContainerStyle={{ elevation: 0, backgroundColor: '#EFEFEF' }}
      >
        <Tab heading={this.renderTabRecipe()}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {recipes && recipes.count() > 0 ? this.renderRecipes() : this.renderEmptyRecipes()}
          </ScrollView>
        </Tab>
        <Tab heading={this.renderTabRecipeBook()}>
          <Loader visible={loadingRecipeBook} />
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {recipeBook && recipeBook.count() > 0
              ? this.renderRecipeBookList()
              : this.renderEmptyRecipeBook()}
          </ScrollView>
        </Tab>
      </Tabs>
    );
  }
}

ProfileTabs.propTypes = {
  userId: PropTypes.number,
  loadUserRecipeBook: PropTypes.func,
  recipeBook: PropTypes.object,
  loadingRecipeBook: PropTypes.bool,
  loadUserRecipes: PropTypes.func,
  recipes: PropTypes.object,
  showAppAlert: PropTypes.func,
};

export default compose(
  withApp,
  withUser,
)(ProfileTabs);
