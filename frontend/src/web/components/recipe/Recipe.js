import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Recipe = props => {
  const { title, image, user } = props.recipe;
  const [flag, setFlag] = useState('bendera');

  return (
    <React.Fragment>
      <div className="col-6 col-md-4 article">
        <img className="img-fluid" src={image} alt={title} />
        <p className="title">{title}</p>
        <div className="meta">
          <p>{flag}</p>
          <button type="button" className="btn btn-primary" onClick={() => setFlag('Hangus')}>
            Change flag
          </button>
          <span className="author">{user.fullname}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      fullname: PropTypes.string.isRequired,
    }),
  }),
};

export default Recipe;
