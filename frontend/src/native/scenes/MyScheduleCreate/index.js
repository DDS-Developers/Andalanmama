/**
 * scenes/MySchedule/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withAuth } from '../../providers/Auth';
import Main from './Main';
import { withMyScheduleItem } from '../../providers/MyScheduleItem';

export class MyScheduleCreateScene extends PureComponent {
  static navigationOptions = {
    title: 'Buat Jadwal Masak',
    header: null,
  };

  componentDidMount() {
    const { loggedIn, navigation } = this.props;
    if (!loggedIn) {
      navigation.navigate('Login');
    }
    this.props.resetData();
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    return <Main sceneTitle="Buat Jadwal Masak" />;
  }
}
MyScheduleCreateScene.propTypes = {
  navigation: PropTypes.object,
  loggedIn: PropTypes.bool,
  resetData: PropTypes.func,
};

export default compose(
  withAuth,
  withMyScheduleItem,
)(MyScheduleCreateScene);
