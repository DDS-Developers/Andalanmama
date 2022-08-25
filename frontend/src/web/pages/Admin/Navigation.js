import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ match }) => (
  <div className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <Link to={`${match.url}`} className="navbar-brand">
      Home
    </Link>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={`${match.url}/user`} className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`${match.url}/blog`} className="nav-link">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`${match.url}/recipe`} className="nav-link">
            Recipe
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

Navbar.propTypes = {
  match: PropTypes.object,
};

export default Navbar;
