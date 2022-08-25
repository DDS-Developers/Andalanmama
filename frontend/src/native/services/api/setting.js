import { Http } from '../http';

export default {
  getSettings() {
    return Http.get('settings');
  },

  updateSettings(formData) {
    return Http.post('settings', formData, {
      'Content-Type': 'application/json;charset=utf-8',
    });
  },
};
