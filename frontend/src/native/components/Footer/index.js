/**
 * components/Footer/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Footer, FooterTab } from 'native-base';
import ButtonDefault from './ButtonDefault';
import ButtonActive from './ButtonActive';
import ButtonDisable from './ButtonDisable';

const FooterComponent = props => {
  const { navigation, menus, currentScreen, loggedIn } = props;

  return (
    <Footer>
      <FooterTab style={{ backgroundColor: '#e83249' }}>
        {menus.map(menu => {
          if (menu.auth && !loggedIn) {
            return <ButtonDisable key={menu.path} label={menu.label} icon={menu.icon} />;
          }
          if (currentScreen === menu.path) {
            return <ButtonActive key={menu.path} label={menu.label} icon={menu.icon} />;
          }
          return (
            <ButtonDefault
              key={menu.path}
              label={menu.label}
              icon={menu.icon}
              navigation={navigation}
              target={menu.path}
            />
          );
        })}
      </FooterTab>
    </Footer>
  );
};

FooterComponent.propTypes = {
  navigation: PropTypes.object,
  menus: PropTypes.array,
  currentScreen: PropTypes.string,
  loggedIn: PropTypes.bool,
};

export default FooterComponent;
