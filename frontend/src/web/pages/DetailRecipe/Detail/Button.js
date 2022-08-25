import React from 'react';
import PropTypes from 'prop-types';
import ButtonLib from '../../../components/Button';

const Button = () => (
  <ButtonLib
    type="button"
    onClick={() => {
      const section = document.querySelector('._section--ingredient');
      section.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Bahan utama
  </ButtonLib>
);

Button.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      fullname: PropTypes.string.isRequired,
    }),
    created_at: PropTypes.string.isRequired,
  }),
};

export default Button;
