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
import Inner from './Inner';
import Wrapper from './Wrapper';

const Card = props => {
  const { image, title, permalink, user, time, column, ...others } = props;

  return (
    <Wrapper column={column} {...others}>
      <Inner>
        <ImageWrapper className="card-image">
          <img src={image} loading="lazy" alt="" />
        </ImageWrapper>
        <InfoWrapper className="card-info">
          <div>
            <TitleWrapper>
              <Title size={300}>
                <Route to={permalink}>{title}</Route>
              </Title>
            </TitleWrapper>
            <MetaWrapper>
              <Meta as="span" Icon={PermIdentity} label={`Oleh ${user}`} />
              <Meta as="span" Icon={QueryBuilder} label={time} />
            </MetaWrapper>
          </div>
        </InfoWrapper>
      </Inner>
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
