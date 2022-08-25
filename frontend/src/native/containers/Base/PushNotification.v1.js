/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-destructuring */
/**
 * containers/Base/PushNotification.js
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

import NavigationService from '../../helpers/NavigationService';
import { withApp } from '../../providers/App';
import { withAuth } from '../../providers/Auth';
import { withMyMessage } from '../../providers/MyMessage';
// import Debugger from '../../helpers/Debugger';

// eslint-disable-next-line react/prefer-stateless-function
export class PushNotification extends Component {
  componentDidMount() {
    this.initFirebase();
  }

  async componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
    this.messageListener();
  }

  //
  // Init Firebase
  //
  initFirebase = async () => {
    const channel = new firebase.notifications.Android.Channel(
      'insider',
      'insider channel',
      firebase.notifications.Android.Importance.Max,
    );
    firebase.notifications().android.createChannel(channel);
    this.checkPermission();
    this.createNotificationListeners();
  };

  //
  // Check firebase permisson
  //
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      await this.getToken();
    } else {
      try {
        await firebase.messaging().requestPermission();
        await firebase.messaging().registerForNotifications();
        this.getToken();
      } catch (error) {
        // console.log(error);
      }
    }
  }

  //
  // Get firebase token
  //
  getToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      // user has a device token
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  };

  //
  // Create firebase notification listener
  //
  createNotificationListeners = async () => {
    /*
     * Triggered when a particular notification has been received in foreground
     */
    this.notificationListener = firebase.notifications().onNotification(notification => {
      // console.log('notificationListener');
      // console.log(notification);
      firebase.notifications().displayNotification(notification);
      const newnotif = this.createNewNotification(notification);
      if (newnotif) {
        this.saveNotification(newnotif, () => this.showNotification(newnotif));
      }
    });

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        // console.log('onNotificationOpened');
        // console.log(notificationOpen);
        const newnotif = this.createNewNotification(notificationOpen.notification);
        if (newnotif) {
          this.saveNotification(newnotif, () => this.goToDetail(newnotif));
        }
      });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    firebase
      .notifications()
      .getInitialNotification()
      .then(notificationOpen => {
        // console.log('onNotificationClosed');
        // console.log(notificationOpen);
        if (notificationOpen) {
          const newnotif = this.createNewNotification(notificationOpen.notification);
          if (newnotif) {
            this.saveNotification(newnotif, () => this.goToDetail(newnotif));
          }
        }
      });

    // Subscribe a topic
    try {
      await firebase.messaging().subscribeToTopic('general');
    } catch (error) {
      // console.log(error);
    }

    /*
     * Triggered for data only payload in foreground
     * */
    // eslint-disable-next-line no-unused-vars
    this.messageListener = firebase.messaging().onMessage(message => {
      // console.log('messageListener');
      // console.log(message);
      // process data message
    });
  };

  //
  // Create new notification
  //
  createNewNotification = data => {
    let newnotif = false;
    const title = this.getNotifTitle(data);
    const body = this.getNotifBody(data);
    if (title && body) {
      let id = 0;
      let schedule = null;
      if (typeof data.data.id !== 'undefined' && data.data.id) {
        // eslint-disable-next-line prefer-destructuring
        id = data.data.id;
      }
      if (typeof data.data.schedule !== 'undefined' && data.data.schedule) {
        schedule = JSON.parse(data.data.schedule);
      }
      newnotif = {
        id,
        title,
        message: body,
        created_at: moment().format(),
        read_at: null,
        schedule,
      };
    }
    return newnotif;
  };

  //
  // Save notification to storage
  //
  saveNotification = async (data, CB = null) => {
    let notifications = await AsyncStorage.getItem('ANDALAN_NOTIFICATIONS');
    if (!notifications) {
      notifications = [];
    } else {
      notifications = JSON.parse(notifications);
    }

    await notifications.unshift(data);
    await AsyncStorage.setItem('ANDALAN_NOTIFICATIONS', JSON.stringify(notifications));

    // Add notif to store
    await this.props.addMessage(data);

    // this.props.addNotificationCount();
    // Run callback
    if (CB) {
      await CB();
    }

    return data;
  };

  showNotification = notif => {
    if (notif.schedule) {
      this.handleShowSchedule(notif);
    } else {
      this.props.showAppAlert(notif.content, notif.title, {
        label: 'Detail',
        callback: () => this.goToDetail(notif),
      });
    }
  };

  // eslint-disable-next-line no-unused-vars
  handleShowSchedule = notif => {
    // console.log(notif);
  };

  //
  // Get notif title
  //
  goToDetail = notif => {
    if (notif.schedule) {
      NavigationService.navigate('MySchedule', { id: notif.schedule.id });
    } else {
      NavigationService.navigate('MyMessageDetail', { message: notif });
    }
  };

  //
  // Get notif title
  //
  getNotifTitle = notif => {
    let title = false;
    if (typeof notif.title !== 'undefined' && notif.title !== '') {
      title = notif.title;
    } else if (typeof notif.data.title !== 'undefined' && notif.data.title !== '') {
      title = notif.data.title;
    }
    return title;
  };

  //
  // Get notif body
  //
  getNotifBody = notif => {
    let body = false;
    if (typeof notif.body !== 'undefined' && notif.body !== '') {
      body = notif.body;
    } else if (typeof notif.data.body !== 'undefined' && notif.data.body !== '') {
      body = notif.data.body;
    }
    return body;
  };

  render() {
    return <React.Fragment />;
  }
}

PushNotification.propTypes = {
  showAppAlert: PropTypes.func,
  addMessage: PropTypes.func,
};

export default compose(
  withApp,
  withAuth,
  withMyMessage,
)(PushNotification);
