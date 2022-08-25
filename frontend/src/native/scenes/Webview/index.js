import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { compose } from 'redux';
import { withAuth } from '../../providers/Auth';

import Header from '../../components/Header';
import Loader from '../../components/Loader';

export const getQueryData = (string) => {
  const query = string.split('?');

  let arrKey = (query[1] || '').split('&');

  let result = {};

  for (let i = 0; i < arrKey.length; i++) {
    let valueSplit = arrKey[i].split('=');

    if (valueSplit[0] && valueSplit[1]) {
      if (valueSplit[0] !== 'share') {
        result[valueSplit[0]] = decodeURIComponent(valueSplit[1]);
      }
    }
  }

  return result;
};

const Webview = p => {
  const navigationState = (event) => {
    if (event.url.includes('unauthorize=true')) {
          callback: () => navigation.navigate('Login', { redirect }),

      p.navigation.navigate('Login', {
        redirect: {
          name: 'WebviewCampaign',
          params: {
            url: event.url.replace('?unauthorize=true', ''),
            title: p.route.params.title
          }
        }
      });
    }

    if (event.url.includes('share=true')) {
      onShare(getQueryData(event.url));
    }
  }

  const onShare = async (par) => {
    try {
      const result = await Share.share(par);

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const { loggedIn, authData } = p;

  const pref = p.route.params.url.includes('?') ? '&' : '?';
  const query = loggedIn ? '?token=' + authData.getIn(['token']) : '?clearToken=true';

  return (
    <View style={styles.page}>
      <Header title={p.route.params.title} leftSettings={{ type: 'back' }}/>
      <WebView
          startInLoadingState={true}
          source={{uri: p.route.params.url + query}}
          allowFileAccess={true}
          onNavigationStateChange={navigationState}
          renderLoading={() => <Loader visible={true} />}
      />
    </View>
  );
};

Webview.propTypes = {
  authData: PropTypes.object,
  loggedIn: PropTypes.bool,
};

export default compose(
  withAuth,
)(Webview);


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
})
