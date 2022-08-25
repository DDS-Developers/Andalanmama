import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import indo from 'date-fns/locale/id';
import { PermIdentity, QueryBuilder } from '@material-ui/icons';
// import { Parser } from 'html-to-react';
import Title from '../../../components/Title';
import SlideWrapper from './SlideWrapper';
import Meta from '../../../components/Meta';
import MetaWrapper from './MetaWrapper';
import ButtonLib from '../../../components/Button';
import Utils from '../../../helpers/utils';

const Slide = props => {
  const { title, user, image, time, permalink } = props;

  const createdAt = distanceInWordsToNow(new Date(Utils.convertDateForIos(time)), {
    addSuffix: true,
    locale: indo,
  });

  return (
    <SlideWrapper className="_slide">
      <div className="_inner">
        <div className="_info">
          <Title className="_info--title" size={400} color="primary">
            {title}
          </Title>
          <MetaWrapper>
            <Meta as="span" Icon={PermIdentity} label={`Oleh ${user}`} />
            <Meta as="span" Icon={QueryBuilder} label={createdAt} />
          </MetaWrapper>
          <ButtonLib to={permalink} className="read-more">
            Lebih Lanjut
          </ButtonLib>
        </div>
        <div className="_image">
          <img src={image} loading="lazy" alt="" />
        </div>
      </div>
    </SlideWrapper>
  );
};

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
};

export default Slide;
