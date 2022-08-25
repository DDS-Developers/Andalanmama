import React from 'react';
import Wrapper from './Wrapper';
import Inner from './Inner';
import Container from '../../../components/Page/Container';
import CallToAction from '../../../components/CallToAction';
import Thumbnail from './Thumbnail';
import Info from './Info';
import ImagesWrapper from './ImagesWrapper';
import ButtonGooglePlay from './ButtonGooglePlay';
import ImageA from './imageA.png';
import ImageB from './imageB.png';
import ImageC from './imageC.png';
import DecoLeft from './decoLeft.png';
import DecoRight from './decoRight.png';

const AppInfo = () => (
  <Wrapper className="_section--app-info">
    <img className="_deco-left" loading="lazy" src={DecoLeft} alt="" />
    <img className="_deco-right" loading="lazy" src={DecoRight} alt="" />
    <Container>
      <Inner>
        <Thumbnail>
          <img src={ImageA} loading="lazy" alt="" />
        </Thumbnail>
        <Info>
          <CallToAction
            title="Cari dan Berbagi Resep Lebih Mudah"
            description="Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts away. Far far
            away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts away."
            ButtonAction={ButtonGooglePlay}
          />
          <ImagesWrapper>
            <img src={ImageB} loading="lazy" alt="" />
            <img src={ImageC} loading="lazy" alt="" />
          </ImagesWrapper>
        </Info>
      </Inner>
    </Container>
  </Wrapper>
);

export default AppInfo;
