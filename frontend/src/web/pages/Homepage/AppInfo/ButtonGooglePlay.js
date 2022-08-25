import React from 'react';
import ButtonWrapper from './ButtonWrapper';
import IconGooglePlay from './iconGooglePlay.png';

const ButtonGooglePlay = () => (
  <ButtonWrapper href="http://googleplay.com">
    <img src={IconGooglePlay} alt="" />
  </ButtonWrapper>
);

export default ButtonGooglePlay;
