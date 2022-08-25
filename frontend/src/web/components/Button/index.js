import React from 'react';
import PropTypes from 'prop-types';
import { Link as Route } from 'react-router-dom';
import Base from './Base';

const Button = props => {
  const { to, href, children, ...others } = props;
  let Component = <button type="button" />;
  if (to) {
    Component = <Route to={to} />;
  } else if (href) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    Component = <a href={href} />;
  }

  return (
    <Base component={Component} {...others}>
      {children}
    </Base>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
