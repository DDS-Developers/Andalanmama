import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import Text from '../Text';
import Wrapper from './Wrapper';
import NavWrapper from './NavWrapper';
import LogoWrapper from './LogoWrapper';
import Logo from './logo.png';

const Header = props => {
  const { hideHeader, location, ...others } = props;

  return (
    <Wrapper {...others}>
      <NavWrapper>
        <ul>
          <li>
            <NavLink exact to="/">
              <Text as="span" size={300}>
                BERANDA
              </Text>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/recipe"
              className={classnames({
                active:
                  location.pathname === '/recipe/explore' ||
                  location.pathname.indexOf('/category') !== -1 ||
                  location.pathname.indexOf('/recipe/detail') !== -1,
              })}
            >
              <Text as="span" size={300}>
                RESEP
              </Text>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/article"
              className={classnames({
                active: location.pathname.indexOf('/article/detail') !== -1,
              })}
            >
              <Text as="span" size={300}>
                TIPS & ARTIKEL
              </Text>
            </NavLink>
          </li>
        </ul>
      </NavWrapper>
      {!hideHeader ? (
        <LogoWrapper>
          <img src={Logo} alt="" />
        </LogoWrapper>
      ) : null}
    </Wrapper>
  );
};

Header.propTypes = {
  hideHeader: PropTypes.bool,
  location: PropTypes.object,
};

export default withRouter(Header);
