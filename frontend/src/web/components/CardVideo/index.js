import React from 'react';
import PropTypes from 'prop-types';
import { Link as Route } from 'react-router-dom';
import { PermIdentity, QueryBuilder, PlayArrow } from '@material-ui/icons';

import Meta from '../Meta';
import Title from '../Title';
import VideoWrapper from './VideoWrapper';
import VideoDetail from './VideoDetail';
import TitleWrapper from './TitleWrapper';
import InfoWrapper from './InfoWrapper';
import MetaWrapper from './MetaWrapper';
import Wrapper from './Wrapper';

// eslint-disable-next-line react/prefer-stateless-function
class CardVideo extends React.Component {
  state = {
    popupVisibility: false,
  };

  showVideoPopup = e => {
    e.preventDefault();
    this.setState({
      popupVisibility: true,
    });
  };

  renderInfo = () => {
    const { info } = this.props;
    const { title, permalink, user, time } = info;

    return (
      <InfoWrapper>
        <div>
          <TitleWrapper>
            <Title size={300}>
              <Route to={permalink}>{title}</Route>
            </Title>
          </TitleWrapper>
          <MetaWrapper>
            <Meta as="span" Icon={PermIdentity} label={user} />
            <Meta as="span" Icon={QueryBuilder} label={time} />
          </MetaWrapper>
        </div>
      </InfoWrapper>
    );
  };

  render() {
    const {
      info,
      thumbnail,
      thumbnailRadius,
      videoId,
      iconSize,
      videoPopupProps,
      ...others
    } = this.props;

    let size = 20;
    if (iconSize) {
      size = iconSize;
    }

    return (
      <React.Fragment>
        <Wrapper {...others}>
          {videoId ? (
            <VideoWrapper iconSize={size} borderRadius={thumbnailRadius}>
              <div className="_thumbnail">
                <img src={thumbnail} loading="lazy" alt="" />
              </div>
              <div className="_action">
                <button type="button" onClick={this.showVideoPopup}>
                  <PlayArrow style={{ fontSize: size, color: '#ffffff' }} />
                </button>
              </div>
            </VideoWrapper>
          ) : (
            <VideoWrapper borderRadius={thumbnailRadius}>
              <div className="_thumbnail">
                <img src={thumbnail} loading="lazy" alt="" />
              </div>
            </VideoWrapper>
          )}
          {info ? this.renderInfo() : null}
        </Wrapper>
        {videoId ? (
          <VideoDetail
            visible={this.state.popupVisibility}
            thumbnail={thumbnail}
            videoId={videoId}
            onClosePopup={() => {
              this.setState({
                popupVisibility: false,
              });
            }}
            {...videoPopupProps}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

CardVideo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
  thumbnail: PropTypes.string.isRequired,
  thumbnailRadius: PropTypes.bool,
  videoId: PropTypes.string,
  iconSize: PropTypes.number,
  videoPopupProps: PropTypes.object,
};

export default CardVideo;
