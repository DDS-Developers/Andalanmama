/**
 * containers/Root/index.js
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container, Root } from 'native-base';

import Loader from '../../components/Loader';
import WelcomeScreen from '../../components/WelcomeScreen';
import { makeSelectLoading, makeSelectWelcomeScreen } from '../../store/App/selectors';
import { makeSelectLoggedIn } from '../../store/Auth/selectors';
import { loadAuth } from '../../store/Auth/actions';
import Routes from './Routes';
import Alert from './Alert';
// import TourGuide from '../TourGuide';
// import DialogDebugger from './DialogDebugger';

export class AppRoot extends Component {
  state = {
    onboarding: true,
  };

  componentDidMount = async () => {
    try {
      const val = await AsyncStorage.getItem('onboarding');
      if (val !== null) {
        this.setState({ onboarding: false });
      }
    } catch (e) {
      // console.log(e);
    }
    this.props.onLoadAuth();
  };

  onBoardingDone = async () => {
    try {
      await AsyncStorage.setItem('onboarding', 'false');
      this.setState({ onboarding: false });
    } catch (e) {
      // console.log(e);
    }
  };

  render() {
    const { loading } = this.props;
    const { onboarding } = this.state;

    if (onboarding === true) {
      return <WelcomeScreen onDone={this.onBoardingDone} />;
    }

    return (
      <Container>
        <Root>
          <Routes />
        </Root>
        <Alert />
        {/*<TourGuide />*/}
        <Loader visible={loading} />
      </Container>
    );
  }
}

AppRoot.propTypes = {
  loading: PropTypes.bool,
  // dialogDebugging: PropTypes.func,
  onLoadAuth: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadAuth: () => dispatch(loadAuth()),
  };
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  welcomeScreen: makeSelectWelcomeScreen(),
  loggedIn: makeSelectLoggedIn(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppRoot);
