import React from 'react';
import { Link as Route } from 'react-router-dom';
// import { KeyboardArrowUp } from '@material-ui/icons';

import Text from '../Text';
// import ButtonCircle from '../Button/ButtonCircle';
import LeftWrapper from './LeftWrapper';
import CenterWrapper from './CenterWrapper';
// import RightWrapper from './RightWrapper';
import Wrapper from './Wrapper';
import Products from './products.png';
import Facebook from './logo-facebook.svg';
import Instagram from './logo-instagram.svg';
import Youtube from './logo-youtube.svg';

const Footer = props => (
  <Wrapper {...props}>
    <LeftWrapper>
      <div className="_inner">
        <img src={Products} alt="" />
      </div>
    </LeftWrapper>
    <CenterWrapper>
      <div className="_inner">
        <div className="_content">
          <p>
            <Route to="/privacy">
              <Text as="span" size={200}>
                Kebijakan Privasi
              </Text>
            </Route>
          </p>
          <p>
            <Route to="/terms">
              <Text as="span" size={200}>
                Syarat & Ketentuan
              </Text>
            </Route>
          </p>
          <p>
            <a href="https://www.facebook.com/andalanmama.id/" target="_blank">
              <img src={Facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/andalanmama.id/" target="_blank">
              <img src={Instagram} alt="" />
            </a>
            <a href="https://www.youtube.com/andalanmamabyfilma" target="_blank">
              <img src={Youtube} alt="" />
            </a>
          </p>
        </div>
      </div>
    </CenterWrapper>
    {/* <RightWrapper>
      <div className="_inner">
        <Text as="span" size={200}>
          Back To Top
        </Text>
        <ButtonCircle
          type="button"
          variant="secondary"
          boxShadow="4px 2px 4px 0 rgba(0,0,0,.2)"
          onClick={e => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <KeyboardArrowUp style={{ fontSize: 30 }} />
        </ButtonCircle>
      </div>
    </RightWrapper> */}
  </Wrapper>
);

// function scrollToTop() {
//   let timeout;
//   if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
//     window.scrollBy(0, -50);
//     timeout = setTimeout(() => scrollToTop(), 10);
//   } else {
//     clearTimeout(timeout);
//   }
// }

export default Footer;
