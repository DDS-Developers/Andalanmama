import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onFormLogin } from '../store/actions/auth';

class Login extends React.PureComponent {
  state = {
    username: '',
  };

  onFormSubmit = data => {
    const { onFormSubmit } = this.props;
    return onFormSubmit(data);
  };

  render() {
    const { Layout } = this.props;
    return <Layout {...this.state} onFormSubmit={this.onFormSubmit} />;
  }
}

Login.propTypes = {
  Layout: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth || {},
});

const mapDispatchToProps = {
  onFormSubmit: onFormLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
