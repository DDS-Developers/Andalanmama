import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSetting = state => state.get('Setting', initialState);

const makeSelectLoading = () =>
  createSelector(
    selectSetting,
    SettingState => SettingState.get('loading'),
  );

const makeSelectSettingNotification = () =>
  createSelector(
    selectSetting,
    SettingState => SettingState.get('settingNotification'),
  );

const makeSelectSettingNewsletter = () =>
  createSelector(
    selectSetting,
    SettingState => SettingState.get('settingNewsletter'),
  );

const makeSelectFormData = () =>
  createSelector(
    selectSetting,
    SettingState => SettingState.get('formData'),
  );

export {
  selectSetting,
  makeSelectLoading,
  makeSelectSettingNotification,
  makeSelectSettingNewsletter,
  makeSelectFormData,
};
