/**
 * containers/Base/General.js
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { Http } from '../../services/http';
import { withAuth } from '../../providers/Auth';
// import Debugger from '../../helpers/Debugger';

// eslint-disable-next-line react/prefer-stateless-function
export class General extends Component {
  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = async () => {
    const auth = await AsyncStorage.getItem('ANDALAN_USER');
    if (auth) {
      await this.props.setAuth(JSON.parse(auth));
      await Http.setupToken();
    } else {
      // await this.props.resetAuth();
      await Http.resetToken();
    }
  };

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

General.propTypes = {
  children: PropTypes.node,
  setAuth: PropTypes.func,
  // resetAuth: PropTypes.func,
};

export default withAuth(General);
