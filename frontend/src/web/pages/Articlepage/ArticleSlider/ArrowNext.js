import React from 'react';
import PropTypes from 'prop-types';
import { ArrowForward } from '@material-ui/icons';
import Button from '../../../components/Button';

const ArrowNext = props => {
  const { onClick } = props;

  return (
    <Button
      className="button-arrow-next"
      type="button"
      variant="primary"
      color="#ef3648"
      bgColor="transparent"
      hoverColor="#ef3648"
      hoverBgColor="transparent"
      activeColor="#ef3648"
      activeBgColor="transparent"
      paddingLeft="10px"
      paddingRight="10px"
      height="35px"
      onClick={onClick}
    >
      <ArrowForward style={{ fontSize: 36, color: '#ffffff' }} />
    </Button>
  );
};

ArrowNext.propTypes = {
  onClick: PropTypes.func,
};

export default ArrowNext;
