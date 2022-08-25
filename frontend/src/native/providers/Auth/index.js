/**
 * providers/Auth/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoggedIn, makeSelectAuthData } from '../../store/Auth/selectors';
import {
  doLogin,
  doRegister,
  doForgotPassword,
  doLogout,
  doResetPassword,
  doChangePassword,
  doVerify,
  setAuth,
  resetAuth,
  setRedirect,
  doLoginGoogle,
  doLoginFacebook,
} from '../../store/Auth/actions';

export const AuthProvider = () => WrappedComponent => {
  class Auth extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Auth.propTypes = {
    loggedIn: PropTypes.bool,
    authData: PropTypes.object,
    doLogin: PropTypes.func,
    doLoginGoogle: PropTypes.func,
    doLoginFacebook: PropTypes.func,
    doRegister: PropTypes.func,
    doLogout: PropTypes.func,
    doForgotPassword: PropTypes.func,
    doResetPassword: PropTypes.func,
    doVerify: PropTypes.func,
    doChangePassword: PropTypes.func,
    setAuth: PropTypes.func,
    resetAuth: PropTypes.func,
    setRedirect: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    loggedIn: makeSelectLoggedIn(),
    authData: makeSelectAuthData(),
  });

  const AuthConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Auth);

  return hoistNonReactStatics(AuthConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    doLogin: () => dispatch(doLogin()),
    doLoginGoogle: () => dispatch(doLoginGoogle()),
    doLoginFacebook: () => dispatch(doLoginFacebook()),
    doRegister: () => dispatch(doRegister()),
    doLogout: () => dispatch(doLogout()),
    doChangePassword: () => dispatch(doChangePassword()),
    doForgotPassword: () => dispatch(doForgotPassword()),
    doResetPassword: () => dispatch(doResetPassword()),
    doVerify: () => dispatch(doVerify()),
    setAuth: authData => dispatch(setAuth(authData)),
    resetAuth: () => dispatch(resetAuth()),
    setRedirect: redirect => dispatch(setRedirect(redirect)),
  };
}

export const withAuth = AuthProvider();
