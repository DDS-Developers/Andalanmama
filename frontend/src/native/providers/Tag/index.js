/**
 * providers/Tag/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setLoading, loadTags, setTags } from '../../store/Tag/actions';
import { makeSelectLoading, makeSelectTags, makeSelectSilent } from '../../store/Tag/selectors';

export const TagProvider = () => WrappedComponent => {
  class Tag extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Tag.propTypes = {
    loadTags: PropTypes.func,
    setTags: PropTypes.func,
    tagLoading: PropTypes.bool,
    tagProcessSilent: PropTypes.bool,
    tags: PropTypes.object,
  };

  const mapStateToProps = createStructuredSelector({
    tagLoading: makeSelectLoading(),
    tagProcessSilent: makeSelectSilent(),
    tags: makeSelectTags(),
  });

  const TagConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Tag);

  return hoistNonReactStatics(TagConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    setTagLoading: status => dispatch(setLoading(status)),
    loadTags: () => dispatch(loadTags()),
    setTags: tags => dispatch(setTags(tags)),
  };
}

export const withTag = TagProvider();
