/**
 * providers/Community/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadCommunityHighlight,
  setLoadingHighlight,
  loadCommunityThread,
  setLoadingThread,
  loadCommunityDetail,
  setLoadingDetail,
  addCommunityReply,
  setLoadingReply,
} from '../../store/Community/actions';
import {
  makeSelectCommunityHighlight,
  makeSelectLoadingHighlight,
  makeSelectCommunityThread,
  makeSelectLoadingThread,
  makeSelectCommunityDetail,
  makeSelectLoadingDetail,
  makeSelectLoadingReply,
} from '../../store/Community/selectors';

export const CommunityProvider = () => WrappedComponent => {
  class Community extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Community.propTypes = {
    communityHighlight: PropTypes.object,
    loadingHighlight: PropTypes.bool,
    communityThread: PropTypes.object,
    loadingThread: PropTypes.bool,
    communityDetail: PropTypes.object,
    loadingDetail: PropTypes.bool,
    loadingReply: PropTypes.bool,
  };

  const mapStateToProps = createStructuredSelector({
    communityHighlight: makeSelectCommunityHighlight(),
    loadingHighlight: makeSelectLoadingHighlight(),
    communityThread: makeSelectCommunityThread(),
    loadingThread: makeSelectLoadingThread(),
    communityDetail: makeSelectCommunityDetail(),
    loadingDetail: makeSelectLoadingDetail(),
    loadingReply: makeSelectLoadingReply(),
  });

  const CommunityConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Community);

  return hoistNonReactStatics(CommunityConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadCommunityHighlight: () => dispatch(loadCommunityHighlight()),
    setLoadingHighlight: status => dispatch(setLoadingHighlight(status)),
    loadCommunityThread: () => dispatch(loadCommunityThread()),
    setLoadingThread: status => dispatch(setLoadingThread(status)),
    loadCommunityDetail: id => dispatch(loadCommunityDetail(id)),
    setLoadingDetail: status => dispatch(setLoadingDetail(status)),
    addCommunityReply: reply => dispatch(addCommunityReply(reply)),
    setLoadingReply: status => dispatch(setLoadingReply(status)),
  };
}

export const withCommunity = CommunityProvider();
