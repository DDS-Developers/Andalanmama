/**
 * containers/Root/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as NavigationService from '../../helpers/NavigationService';

import Dialog from '../../components/Dialog';
import Button from '../../components/Dialog/Button';
import { makeSelectAlert } from '../../store/App/selectors';
import { hideAlert } from '../../store/App/actions';
import { resetAuth } from '../../store/Auth/actions';

export class Alert extends PureComponent {
  renderActions = () => (
    <React.Fragment>
      {this.renderActionCancel()}
      {this.renderActionContinue()}
    </React.Fragment>
  );

  renderActionContinue = () => {
    const { alert } = this.props;
    const action = alert.get('actionContinue');
    if (action) {
      const { label } = action;
      return <Button onPress={() => this.buttonHandler(action)}>{label}</Button>;
    }
    return <Button onPress={() => this.closeAlert()}>Ok</Button>;
  };

  renderActionCancel = () => {
    const { alert } = this.props;
    const action = alert.get('actionCancel');
    if (action) {
      const { label } = action;
      return <Button onPress={() => this.buttonHandler(action)}>{label}</Button>;
    }
    return null;
  };

  closeAlert = () => {
    const { alert } = this.props;
    const errorType = alert.get('errorType');

    if (errorType === 'auth') {
      this.props.onResetAuth();
    }
    this.props.onHideAlert();
  };

  buttonHandler = action => {
    const { target, callback } = action;
    if (target) {
      this.closeAlert();
      NavigationService.redirect(target);
    } else if (callback) {
      callback();
      this.closeAlert();
    } else {
      this.closeAlert();
    }
  };

  render() {
    const { alert } = this.props;
    const title = alert.get('title', '');
    const message = alert.get('message', '');
    const visible = alert.get('visible');

    return (
      <Dialog visible={visible} title={title} message={message} actions={this.renderActions()} />
    );
  }
}

Alert.propTypes = {
  alert: PropTypes.object,
  onHideAlert: PropTypes.func,
  onResetAuth: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onHideAlert: () => dispatch(hideAlert()),
    onResetAuth: () => dispatch(resetAuth()),
  };
}
const mapStateToProps = createStructuredSelector({
  alert: makeSelectAlert(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
