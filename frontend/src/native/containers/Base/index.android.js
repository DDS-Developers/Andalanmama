/**
 * containers/Base/index.android.js
 *
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withAuth } from '../../providers/Auth';

import PushNotification from './PushNotification';
import General from './General';
import Root from '../Root';

const BaseAndroid = ({ loggedIn }) => (
  <General>
    {loggedIn ? <PushNotification /> : null}
    <Root />
  </General>
);

BaseAndroid.propTypes = {
  loggedIn: PropTypes.bool,
};

export default withAuth(BaseAndroid);
