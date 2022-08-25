import React from 'react';
import Container from '../../../components/Page/Container';
import CallToAction from '../../../components/CallToAction';
import CardVideo from '../../../components/CardVideo';
import ButtonGooglePlay from '../AppInfo/ButtonGooglePlay';
import Wrapper from './Wrapper';
import VideoWrapper from './VideoWrapper';
import LogoFilma from './logoFilma.png';
import LeafTop from './leafTop.png';
import LeafLeft from './leafLeft.png';
import LeafRight from './leafRight.png';

const Explore = () => (
  <Container className="_section--explore">
    <Wrapper>
      <VideoWrapper>
        <CardVideo
          className="_explore--video"
          thumbnail="https://placeimg.com/640/640/tech"
          videoId="2zXv_ZY6GzU"
          thumbnailRadius={false}
        />
        <img className="_deco--top" loading="lazy" src={LeafTop} alt="" />
        <img className="_deco--left" loading="lazy" src={LeafLeft} alt="" />
        <img className="_deco--right" loading="lazy" src={LeafRight} alt="" />
      </VideoWrapper>
      <CallToAction
        className="_info"
        align="center"
        title="Eksplor dan Temukan"
        description="Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts. Separated they
        live in Bookmarksgrove right at the coast of the Semantics, a large
        language ocean."
        ButtonAction={ButtonGooglePlay}
      />
      <div className="_bottom">
        <img src={LogoFilma} loading="lazy" alt="" />
      </div>
    </Wrapper>
  </Container>
);

export default Explore;
