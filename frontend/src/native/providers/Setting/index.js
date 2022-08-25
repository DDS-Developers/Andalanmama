import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadSettings,
  setSettings,
  updateSettings,
  setLoading,
  changeSettingNotification,
  changeSettingNewsletter,
  changeFormData,
} from '../../store/Setting/actions';
import {
  makeSelectLoading,
  makeSelectSettingNotification,
  makeSelectSettingNewsletter,
  makeSelectFormData,
} from '../../store/Setting/selectors';

export const SettingProvider = () => WrappedComponent => {
  class Setting extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Setting.propTypps = {
    loadSettings: PropTypes.func,
    setSetting: PropTypes.func,
    updateSettings: PropTypes.func,
    changeSettingNotification: PropTypes.func,
    changeSettingNewsletter: PropTypes.func,
    changeFormData: PropTypes.func,
    setSettingLoading: PropTypes.func,
    settingNotification: PropTypes.bool,
    settingNewsletter: PropTypes.bool,
    settingLoading: PropTypes.bool,
    settingFormData: PropTypes.object,
  };

  const mapStateToProps = createStructuredSelector({
    settingNotification: makeSelectSettingNotification(),
    settingNewsletter: makeSelectSettingNewsletter(),
    settingLoading: makeSelectLoading(),
    settingFormData: makeSelectFormData(),
  });

  const SettingConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Setting);

  return hoistNonReactStatics(SettingConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadSettings: () => dispatch(loadSettings()),
    updateSettings: data => dispatch(updateSettings(data)),
    setSetting: data => dispatch(setSettings(data)),
    changeSettingNotification: status => dispatch(changeSettingNotification(status)),
    changeSettingNewsletter: status => dispatch(changeSettingNewsletter(status)),
    changeFormData: (name, value) => dispatch(changeFormData(name, value)),
    setSettingLoading: status => dispatch(setLoading(status)),
  };
}

export const withSetting = SettingProvider();
