import { Http } from '../http';

export default {
  login(userData) {
    return Http.post('login', userData);
  },

  logout(userData) {
    return Http.post('logout', userData);
  },

  socialAuthenticate(userData) {
    return Http.post('authenticate', userData);
  },

  register(userData) {
    return Http.post('register', userData);
  },

  forgotPassword(email) {
    return Http.post('forgot-password', email);
  },

  changePassword(formData) {
    return Http.post('profile/changepwd', formData);
  },

  resetPassword(formData) {
    return Http.post('change-password', formData);
  },

  verify(formData) {
    return Http.post('verify', formData);
  },
};
