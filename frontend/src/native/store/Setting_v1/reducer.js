import { fromJS } from 'immutable';
import {
  SET_LOADING,
  SET_SETTINGS,
  CHANGE_SETTING_NEWSLATTER,
  CHANGE_SETTING_NOTIFICATION,
  CHANGE_FORM_DATA,
} from './constants';

export const initialState = fromJS({
  loading: false,
  formData: {
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
      const notification = setting.get('notification');
      const newsletter = setting.get('newsletter');
      return state
        .set(
          'formData',
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
