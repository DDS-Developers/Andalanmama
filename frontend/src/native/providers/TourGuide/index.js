/**
 * providers/TourGuide/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setStep, nextStep, setSkipped, setVisible } from '../../store/TourGuide/actions';
import {
  makeSelectStep,
  makeSelectSkipped,
  makeSelectVisible,
} from '../../store/TourGuide/selectors';

export const TourGuideProvider = () => WrappedComponent => {
  class TourGuide extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  TourGuide.propTypes = {
    setStep: PropTypes.func,
    nextStep: PropTypes.func,
    setSkipped: PropTypes.func,
    setVisible: PropTypes.func,
    step: PropTypes.number,
    skipped: PropTypes.bool,
    visible: PropTypes.bool,
  };

  const mapStateToProps = createStructuredSelector({
    step: makeSelectStep(),
    skipped: makeSelectSkipped(),
    visible: makeSelectVisible(),
  });

  const TagConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TourGuide);

  return hoistNonReactStatics(TagConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    setStep: step => dispatch(setStep(step)),
    nextStep: () => dispatch(nextStep()),
    setSkipped: status => dispatch(setSkipped(status)),
    setVisible: status => dispatch(setVisible(status)),
  };
}

export const withTourGuide = TourGuideProvider();
