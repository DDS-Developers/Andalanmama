/**
 * helpers/Debugger.js
 *
 */
import Reactotron from 'reactotron-react-native';
export default function(log) {
  // eslint-disable-next-line no-undef
  if (__DEV__) {
    Reactotron.log(log);
  }
}
