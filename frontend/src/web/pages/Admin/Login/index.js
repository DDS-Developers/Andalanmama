import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import LoginContainer from '../../../../containers/Login';
import './style.scss';

export const LoginContent = withRouter(props => {
  const { onFormSubmit, history } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormLogin = async event => {
    event.preventDefault();
    try {
      await onFormSubmit({ email, password });
      history.push('/web-admin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form-signin" onSubmit={onFormLogin}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="email"
          className="form-control"
          id="username"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
});

LoginContent.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

const Login = props => <LoginContainer Layout={LoginContent} {...props} />;

export default Login;
