/**
 * providers/App/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  showAlert,
  setLoading,
  setWelcomeScreen,
  hideAlert,
  dialogDebugging,
  setScrollViewRef,
} from '../../store/App/actions';
import {
  makeSelectAlert,
  makeSelectAlertVisible,
  makeSelectLoading,
  makeSelectWelcomeScreen,
  makeSelectDebugContent,
  makeSelectScrollViewRef,
} from '../../store/App/selectors';

export const AppProvider = () => WrappedComponent => {
  class App extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  App.propTypes = {
    appAlert: PropTypes.object,
    appAlertVisible: PropTypes.bool,
    appLoading: PropTypes.bool,
    welcomeScreen: PropTypes.bool,
    showAppAlert: PropTypes.func,
    hideAppAlert: PropTypes.func,
    setAppLoading: PropTypes.func,
    setWelcomeScreen: PropTypes.func,
    debugContent: PropTypes.object,
  };

  const mapStateToProps = createStructuredSelector({
    appAlert: makeSelectAlert(),
    appAlertVisible: makeSelectAlertVisible(),
    appLoading: makeSelectLoading(),
    welcomeScreen: makeSelectWelcomeScreen(),
    debugContent: makeSelectDebugContent(),
    scrollViewRef: makeSelectScrollViewRef(),
  });

  const AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App);

  return hoistNonReactStatics(AppConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    showAppAlert: (message, title, actionContinue, actionCancel) =>
      dispatch(showAlert(message, title, actionContinue, actionCancel)),
    hideAppAlert: () => dispatch(hideAlert()),
    setAppLoading: status => dispatch(setLoading(status)),
    setWelcomeScreen: status => dispatch(setWelcomeScreen(status)),
    dialogDebugging: message => dispatch(dialogDebugging(message)),
    setScrollViewRef: ref => dispatch(setScrollViewRef(ref)),
  };
}

export const withApp = AppProvider();
