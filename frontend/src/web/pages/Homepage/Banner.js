import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Button from '../../components/Button';
import BannerWrapper from './BannerWrapper';
import FloatingBanner from './floating-banner.png';

const Banner = props => {
  const [bannerShow, setBannerShow] = useState(true);

  return (
    <React.Fragment>
      {bannerShow ? (
        <BannerWrapper className="_floating-banner">
          <Button className="_close-icon" onClick={() => setBannerShow(false)}>
            <CloseIcon />
          </Button>
          <a href={props.banner.url || 'https://filma.id/'} target="_blank">
            <img src={props.banner.image || FloatingBanner} alt={props.banner.title || 'Filma'} />
          </a>
        </BannerWrapper>
      ) : null}
    </React.Fragment>
  );
};

Banner.propTypes = {
  banner: PropTypes.object,
};

export default Banner;
