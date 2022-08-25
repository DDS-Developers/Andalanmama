import React from 'react';
import PropTypes from 'prop-types';
import { ArrowForward } from '@material-ui/icons';
// import Icon from '../Icon';
import ButtonCircle from '../Button/ButtonCircle';

const ArrowNext = props => {
  const { onClick } = props;

  return (
    <ButtonCircle
      className="button-arrow-next"
      type="button"
      variant="primary"
      boxShadow="2px 1px 4px 0 rgba(0,0,0,.2)"
      onClick={onClick}
    >
      <ArrowForward style={{ fontSize: 36, color: '#ffffff' }} />
    </ButtonCircle>
  );
};

ArrowNext.propTypes = {
  onClick: PropTypes.func,
};

export default ArrowNext;
