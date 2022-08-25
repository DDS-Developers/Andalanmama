/* eslint-disable prefer-destructuring */
/**
 * containers/Base/PushNotification.js
 *
 */
import { useEffect, useState } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

import * as NavigationService from '../../helpers/NavigationService';
import { withApp } from '../../providers/App';
import { withAuth } from '../../providers/Auth';
import { withMyMessage } from '../../providers/MyMessage';
import { withMySchedule } from '../../providers/MySchedule';
// import Debugger from '../../helpers/Debugger';

// Register background handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   Debugger('Message handled in the background!');
//   Debugger(remoteMessage);
// });

import ReactNativeAN from 'react-native-alarm-notification';

const {RNAlarmNotification} = NativeModules;
const RNEmitter = new NativeEventEmitter(RNAlarmNotification);

const PushNotification = props => {
  const [ alarmData, setAlarm ] = useState([])
  const [ callAlarm, setCallAlarm ] = useState(false)

  useEffect(() => {
    props.loadMySchedules()

    //untuk test alarm
    // saveAlarm({
    //   id: 154,
    //   notif_time: new Date(Date.now() + 60000)
    // })
  }, [])

  useEffect(() => {
    const setSchedulesAlarm = () => {
      let newData = []

      for (let key of props.allSchedule) {
        const sch = key.get('schedules')

        for (let i of sch) {
          newData.push({
            id: i.get('id'),
            notif_time: new Date(i.get('notif_time')),
            type: 'kickoff'
          })

          const notifTime = new Date(i.get('notif_time'));
          const prepareTime = new Date(notifTime.setMinutes(notifTime.getMinutes() - 30));

          newData.push({
            id: i.get('id'),
            notif_time: prepareTime,
            type: 'prepare'
          })
        }
      }

      if (newData.length > 0 && alarmData.length === 0) {
        setAlarm(newData)
      }
    }


    setSchedulesAlarm()

  }, [props.allSchedule])

  useEffect(() => {
    if (alarmData.length > 0 && !callAlarm) {
      ReactNativeAN.removeAllFiredNotifications();

      for (let item of alarmData) {
        if (isDate(item.notif_time)) {
          saveAlarm(item)
        }
      }

      setCallAlarm(true)
    }
  }, [alarmData])

  const isDate = (value) => {
    return value instanceof Date;
  }

  const saveAlarm = async data => {
    const alarmNotifData = {
      title: data.type === "kickoff" ? "Waktu masak Mama sudah tiba!" : "Waktu masak Mama hampir tiba!",
      message: data.type === "kickoff" ? "Sudah waktunya masak nih! yuk kita lihat resepnya" : "30 menit lagi waktunya Mama masak, yuk kita lihat resepnya",
      channel: "my_channel_id",
      small_icon: "ic_launcher",
      data: data
    };

    const fireDate = ReactNativeAN.parseDate(data.notif_time);

    const alarm = await ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: fireDate });
  }

  useEffect(() => {
    const _subscribeDismiss = RNEmitter.addListener(
      'OnNotificationDismissed',
      () => {
        ReactNativeAN.stopAlarmSound();
      },
    );

    const _subscribeOpen = RNEmitter.addListener(
      'OnNotificationOpened',
      (data) => {
        const obj = JSON.parse(data);

        NavigationService.navigate('MySchedule', { id: obj.id });

        ReactNativeAN.stopAlarmSound();
      },
    );

    return function cleanup() {
      _subscribeDismiss.remove();
      _subscribeOpen.remove();
    };
  });

  useEffect(() => {
    // Get FCM token
    getFcmToken();

    // Setup notification listerners
    setupNotificationListeners();

    // Listen foreground notifications
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage && remoteMessage.notification) {
        const newnotif = createNewNotification(remoteMessage.notification);
        if (newnotif) {
          saveNotification(newnotif, () => showNotification(newnotif));
        }
      }
    });

    return unsubscribe;
  }, []);

  /**
   * Get fcm token
   */
  const getFcmToken = () => {
    messaging()
      .getToken()
      .then(async token => {
        await AsyncStorage.setItem('fcmToken', token);
        return token;
      });
  };

  /**
   * Setup notification listerners
   */
  const setupNotificationListeners = () => {
    // On Open
    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage && remoteMessage.notification) {
        const newnotif = createNewNotification(remoteMessage.notification);
        if (newnotif) {
          saveNotification(newnotif, () => showNotification(newnotif));
        }
      }
    });

    // On Open
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage && remoteMessage.notification) {
          const newnotif = createNewNotification(remoteMessage.notification);
          if (newnotif) {
            saveNotification(newnotif, () => showNotification(newnotif));
          }
        }
      });
  };

  //
  // Create new notification
  //
  const createNewNotification = data => {
    let newnotif = false;
    const title = getNotifTitle(data);
    const body = getNotifBody(data);
    if (title && body) {
      let id = 0;
      let schedule = null;
      if (
        typeof data.data !== 'undefined' &&
        data.data &&
        typeof data.data.id !== 'undefined' &&
        data.data.id
      ) {
        // eslint-disable-next-line prefer-destructuring
        id = data.data.id;
      }
      if (
        typeof data.data !== 'undefined' &&
        data.data &&
        typeof data.data.schedule !== 'undefined' &&
        data.data.schedule
      ) {
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
  const saveNotification = async (data, CB = null) => {
    let notifications = await AsyncStorage.getItem('ANDALAN_NOTIFICATIONS');
    if (!notifications) {
      notifications = [];
    } else {
      notifications = JSON.parse(notifications);
    }

    await notifications.unshift(data);
    await AsyncStorage.setItem('ANDALAN_NOTIFICATIONS', JSON.stringify(notifications));

    // Add notif to store
    await props.addMessage(data);

    // this.props.addNotificationCount();
    // Run callback
    if (CB) {
      await CB();
    }

    return data;
  };

  //
  // Show notification to storage
  //
  const showNotification = notif => {
    if (notif.schedule) {
      // this.handleShowSchedule(notif);
    } else {
      props.showAppAlert(notif.message, notif.title, {
        label: 'Detail',
        callback: () => goToDetail(notif),
      });
    }
  };

  //
  // Get notif title
  //
  const goToDetail = notif => {
    if (notif.schedule) {
      NavigationService.navigate('MySchedule', { id: notif.schedule.id });
    } else {
      NavigationService.navigate('MyMessageDetail', { message: notif });
    }
  };

  //
  // Get notif title
  //
  const getNotifTitle = notif => {
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
  const getNotifBody = notif => {
    let body = false;
    if (typeof notif.body !== 'undefined' && notif.body !== '') {
      body = notif.body;
    } else if (typeof notif.data.body !== 'undefined' && notif.data.body !== '') {
      body = notif.data.body;
    }
    return body;
  };

  return null;
};

PushNotification.propTypes = {
  showAppAlert: PropTypes.func,
  addMessage: PropTypes.func,
  loggedIn: PropTypes.bool,
  allSchedule: PropTypes.object
};

export default compose(
  withApp,
  withAuth,
  withMyMessage,
  withMySchedule
)(PushNotification);
