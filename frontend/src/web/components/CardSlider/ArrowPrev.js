import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBack } from '@material-ui/icons';
// import Icon from '../Icon';
import ButtonCircle from '../Button/ButtonCircle';

const ArrowPrev = props => {
  const { onClick } = props;

  return (
    <ButtonCircle
      className="button-arrow-prev"
      type="button"
      variant="primary"
      boxShadow="2px 1px 4px 0 rgba(0,0,0,.2)"
      onClick={onClick}
    >
      <ArrowBack style={{ fontSize: 36, color: '#ffffff' }} />
    </ButtonCircle>
  );
};

ArrowPrev.propTypes = {
  onClick: PropTypes.func,
};

export default ArrowPrev;
