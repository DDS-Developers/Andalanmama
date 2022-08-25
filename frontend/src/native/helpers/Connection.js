/**
 * helpers/Connection.js
 *
 */
import { NetInfo } from 'react-native';

export default function(onlineCB, offlineCB) {
  NetInfo.getConnectionInfo().then(connectionInfo => {
    if (connectionInfo.type !== 'none') {
      onlineCB();
    } else {
      offlineCB();
    }
  });
}
