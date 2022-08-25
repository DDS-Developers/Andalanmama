/*
 * Auth.js
 */
import AsyncStorage from '@react-native-community/async-storage';

const Auth = {
  async logout() {
    await AsyncStorage.removeItem('ANDALAN_USER');
    await AsyncStorage.removeItem('ANDALAN_USER_TOKEN');
  },

  async loggedIn() {
    const isLoggedIn = await !!AsyncStorage.getItem('ANDALAN_USER_TOKEN');
    return isLoggedIn;
  },

  async userToken() {
    let token = await AsyncStorage.getItem('ANDALAN_USER_TOKEN');
    if (token && typeof token !== 'undefined') {
      token = await JSON.parse(token);
    }
    return token;
  },

  async userData() {
    let userData = await AsyncStorage.getItem('ANDALAN_USER');
    if (userData && typeof userData !== 'undefined') {
      userData = await JSON.parse(userData);
    }
    return userData;
  },

  async setUserData(userData) {
    if (typeof userData.user !== 'undefined') {
      await AsyncStorage.setItem('ANDALAN_USER', JSON.stringify(userData.user));
    }
    if (typeof userData.token !== 'undefined') {
      await AsyncStorage.setItem('ANDALAN_USER_TOKEN', userData.token);
    }
  },
};

export default Auth;
