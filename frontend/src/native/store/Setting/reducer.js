import { fromJS } from 'immutable';
import {
  SET_LOADING,
  SET_SETTINGS,
  CHANGE_SETTING_NEWSLATTER,
  CHANGE_SETTING_NOTIFICATION,
  CHANGE_FORM_DATA,
  CHANGE_SETTING,
} from './constants';

export const initialState = fromJS({
  loading: false,
  formData: {
    notification: false,
    newsletter: false,
  },
  settings: {
    notification: false,
    newsletter: false,
  },
  settingNotification: false,
  settingNewsletter: false,
});

function SettingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SETTINGS: {
      const setting = fromJS(action.data);
      const notifData = setting.get('notification');
      const newsData = setting.get('newsletter');
      const notification = notifData === 1;
      const newsletter = newsData === 1;
      return state
        .set(
          'formData',
          fromJS({
            newsletter,
            notification,
          }),
        )
        .set(
          'settings',
          fromJS({
            newsletter,
            notification,
          }),
        )
        .set('settingNotification', notification)
        .set('settingNewsletter', newsletter);
    }
    case CHANGE_FORM_DATA: {
      const { name, value } = action;
      return state.setIn(['formData', name], value);
    }
    case CHANGE_SETTING: {
      const { name, value } = action;
      return state.setIn(['settings', name], value);
    }
    case CHANGE_SETTING_NOTIFICATION:
      return state.set('settingNotification', action.status);
    case CHANGE_SETTING_NEWSLATTER:
      return state.set('settingNewsletter', action.status);
    case SET_LOADING:
      return state.set('loading', action.status);
    default:
      return state;
  }
}

export default SettingReducer;
