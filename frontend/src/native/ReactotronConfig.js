import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NativeModules } from 'react-native';

let scriptHostname = null;

const { scriptURL } = NativeModules.SourceCode;
// eslint-disable-next-line prefer-destructuring
scriptHostname = scriptURL.split('://')[1].split(':')[0];

Reactotron.configure({ host: scriptHostname }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .setAsyncStorageHandler(AsyncStorage)
  .connect(); // let's connect!
