/**
 * scenes/RecipeBook/RecipeBookItem/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

import { BaseUrl } from '../../services/http';
import { withApp } from '../../providers/App';
import CardRecipe from '../../components/CardRecipe';

export class RecipeBookItem extends PureComponent {
  download = async recipe => {
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
          description: 'Mengunduh buku resep.',
        },
      })
        .fetch('GET', apiUrl)
        .then(() => {
          // Show Alert
          this.props.showAppAlert(`The file saved to ${path}`, 'Berhasil mengunduh buku resep');
        })
        // Something went wrong:
        .catch(() => {
          // error handling
          // console.log(errorMessage);
          // console.log(statusCode);
          // Show Alert
          this.props.showAppAlert(
            `Gagal mengunduh buku resep, silahkan coba sekali lagi.`,
            'Download Failed',
          );
        });
    } else {
      // Show Alert
      this.props.showAppAlert(
        `Gagal mengunduh buku resep, silahkan coba sekali lagin.`,
        'Download Failed',
      );
    }
  };

  share = recipeBook => {
    const shareOptions = {
      title: 'Bagikan Buku Resep',
      message: `Buku resep andalan: ${recipeBook.get('title')}`,
      failOnCancel: false,
      url: `http://andalanmama.com/recipe-book/detail/${recipeBook.get('id')}`,
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

  render() {
    const { recipeBook } = this.props;
    const image = recipeBook.get('recipes');
    const title = recipeBook.get('title');
    const id = recipeBook.get('id');

    const actions = {
      settings: {
        options: ['Ubah', 'Hapus', 'Batal'],
        // options: ['Edit', 'Share', 'Download Recipe Book', 'Delete', 'Cancel'],
        cancelButtonIndex: 2,
        destructiveButtonIndex: 1,
      },
      handler: buttonIndex => {
        if (buttonIndex === 0) {
          this.props.navigation.navigate('RecipeBookEdit', { recipeBook });
        } else if (buttonIndex === 1) {
          this.props.onDelete(id);
        }
      },
    };

    return <CardRecipe image={image} title={title} id={id} actions={actions} />;
  }
}

RecipeBookItem.propTypes = {
  recipeBook: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  navigation: PropTypes.object,
  showAppAlert: PropTypes.func,
};

const NavigationWrapper = props => {
  const navigation = useNavigation();

  return <RecipeBookItem {...props} navigation={navigation} />;
};

export default withApp(NavigationWrapper);
