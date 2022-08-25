/**
 * index.js
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from '@sentry/react-native';
import configureStore from './store';

// Dynamically call from spesific platform
// if platform is ios, then react native will call ./app/App.ios.js
// but if the platform is android then react-native will call ./app/App.android.js
import App from './App';

Sentry.init({
  dsn: 'https://646eea18f68c41c69028c03d6af22f5b@sentry.io/5186094',
});

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./ReactotronConfig').then(() => {
    console.log('configured');
  });
}

// eslint-disable-next-line no-undef
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    assert: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {},
    time: () => {},
    timeEnd: () => {},
  };
}

const store = configureStore();

class AppWrapper extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppWrapper;
