/**
 * providers/MyProfile/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectLoading,
  makeSelectProfile,
  makeSelectProfileAccount,
} from '../../store/MyProfile/selectors';
import {
  loadProfile,
  setLoading,
  updateProfile,
  getProfile,
  loadProfileAccount,
  addSharePoint,
} from '../../store/MyProfile/actions';

export const MyProfileProvider = () => WrappedComponent => {
  class MyProfile extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  MyProfile.propTypes = {
    loading: PropTypes.bool,
    updateProfile: PropTypes.func,
    addSharePoint: PropTypes.func,
    getProfile: PropTypes.func,
    profile: PropTypes.object,
    profileAccount: PropTypes.object,
  };

  const mapStateToProps = createStructuredSelector({
    loading: makeSelectLoading(),
    profile: makeSelectProfile(),
    profileAccount: makeSelectProfileAccount(),
  });

  const MyProfileConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MyProfile);

  return hoistNonReactStatics(MyProfileConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadProfile: () => dispatch(loadProfile()),
    loadProfileAccount: () => dispatch(loadProfileAccount()),
    setLoading: status => dispatch(setLoading(status)),
    updateProfile: () => dispatch(updateProfile()),
    addSharePoint: () => dispatch(addSharePoint()),
    getProfile: () => dispatch(getProfile()),
  };
}

export const withMyProfile = MyProfileProvider();
