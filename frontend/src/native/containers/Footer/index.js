/**
 * components/Footer/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { withAuth } from '../../providers/Auth';
import FooterComponent from '../../components/Footer';

const menus = [
  {
    path: 'Explore',
    label: 'Telusuri',
    icon: 'explore',
    auth: false,
  },
  {
    path: 'MySchedule',
    label: 'Jadwal',
    icon: 'event',
    auth: true,
  },
  {
    path: 'MyRecipe',
    label: 'Resep Saya',
    icon: 'developer-board',
    auth: true,
  },
  {
    path: 'Bookmark',
    label: 'Ditandai',
    icon: 'bookmark',
    auth: true,
  },
  {
    path: 'MyAccount',
    label: 'Akun',
    icon: 'account-circle',
    auth: false,
  },
];

const Footer = props => {
  const { loggedIn } = props;
  const navigation = useNavigation();

  let currentScreen = 'unknown';
  if (typeof navigation.state.routeName !== 'undefined') {
    currentScreen = navigation.state.routeName;
  }

  return (
    <FooterComponent
      menus={menus}
      currentScreen={currentScreen}
      navigation={navigation}
      loggedIn={loggedIn}
    />
  );
};

Footer.propTypes = {
  loggedIn: PropTypes.bool,
};

export default withAuth(Footer);
