import React from 'react';
import PropTypes from 'prop-types';
import { Link as Route } from 'react-router-dom';
// import Icon from '../Icon'
import { PermIdentity, QueryBuilder } from '@material-ui/icons';
import Meta from '../Meta';
import Title from '../Title';
import ImageWrapper from './ImageWrapper';
import TitleWrapper from './TitleWrapper';
import InfoWrapper from './InfoWrapper';
import MetaWrapper from './MetaWrapper';
import Wrapper from './Wrapper';

const Card = props => {
  const { image, title, permalink, user, time, column, ...others } = props;

  return (
    <Wrapper column={column} {...others}>
      <ImageWrapper>
        <img src={image || 'https://picsum.photos/200/200/?blur'} loading="lazy" alt="" />
      </ImageWrapper>
      <InfoWrapper>
        <TitleWrapper>
          <Title size={300} marginBottom="0">
            <Route to={permalink}>
              {title.length > 33 ? title.substring(0, 33).concat('...') : title}
            </Route>
          </Title>
        </TitleWrapper>
        <MetaWrapper>
          <Meta as="span" Icon={PermIdentity} label={`Oleh ${user}`} />
          <Meta as="span" Icon={QueryBuilder} label={time} />
        </MetaWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

Card.propTypes = {
  column: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Card;
