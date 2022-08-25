import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';
import { PlayArrow } from '@material-ui/icons';

import CallToAction from '../../../components/CallToAction';
import InfoMeta from './InfoMeta';
import Button from './Button';
import Wrapper from './Wrapper';

const Detail = props => {
  const { recipe } = props;
  const [open, setOpen] = useState(false);
  const youtubeID = recipe.youtube
    ? recipe.youtube.replace('https://www.youtube.com/embed/', '')
    : '';

  return (
    <Wrapper className="_section--detail">
      <div className="_inner">
        <div className="_info">
          <CallToAction
            title={recipe.name}
            description={recipe.description}
            InfoMeta={() => <InfoMeta recipe={recipe} />}
            ButtonAction={() => <Button recipe={recipe} />}
          />
        </div>
        <div className="_thumbnail">
          <div className="_thumbnail--main">
            <img src={recipe.image} loading="lazy" alt="" />
            {recipe.youtube && (
              <React.Fragment>
                <div className="_thumbnail--icon">
                  <PlayArrow style={{ fontSize: 160 }} onClick={() => setOpen(true)} />
                </div>
                <ModalVideo
                  channel="youtube"
                  isOpen={open}
                  videoId={youtubeID}
                  onClose={() => setOpen(false)}
                />
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

Detail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    youtube: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      fullname: PropTypes.string.isRequired,
    }),
    approved_at: PropTypes.string.isRequired,
  }),
};

export default Detail;
