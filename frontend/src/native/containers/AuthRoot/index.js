/**
 * containers/AuthRoot/index.js
 *
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { withApp } from '../../providers/App';
import { withAuth } from '../../providers/Auth';
// import Debugger from '../../helpers/Debugger';

const AuthRoot = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const { loggedIn, showAppAlert } = props;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // console.log('checkAuth');
      checkAuth();
    });

    return unsubscribe;
  });

  const checkAuth = () => {
    const { state } = navigation;
    const { params } = route;
    let { redirect } = props;

    if (!redirect && state) {
      if (typeof params !== 'undefined') {
        redirect = {
          name: state.routeName,
          params,
        };
      } else {
        redirect = state.routeName;
      }
    }

    if (!loggedIn) {
      showAppAlert(
        'Kamu harus daftar atau masuk untuk menggunakan atau mengakses fitur ini.',
        'Fitur ini belum bisa digunakan',
        {
          label: 'Ok',
          callback: () => navigation.navigate('Login', { redirect }),
        },
      );
    }
  };

  return <React.Fragment>{props.children}</React.Fragment>;
};

AuthRoot.propTypes = {
  children: PropTypes.node,
  loggedIn: PropTypes.bool,
  redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showAppAlert: PropTypes.func,
};

export default compose(
  withApp,
  withAuth,
)(AuthRoot);
