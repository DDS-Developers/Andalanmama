import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBack } from '@material-ui/icons';
import Button from '../../../components/Button';
import ButtonCircle from '../../../components/Button/ButtonCircle';

const ArrowPrev = props => {
  const { onClick, className } = props;
  if (window.innerWidth <= 480) {
    return (
      <Button
        className={`button-arrow-prev ${className}`}
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
        <ArrowBack style={{ fontSize: 36, color: '#ffffff' }} />
      </Button>
    );
  }

  return (
    <ButtonCircle
      className={`button-arrow-prev ${className}`}
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
  className: PropTypes.string,
};

export default ArrowPrev;
