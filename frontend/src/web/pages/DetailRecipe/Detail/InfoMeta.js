import React from 'react';
import PropTypes from 'prop-types';
import { PermIdentity, QueryBuilder } from '@material-ui/icons';
import Meta from '../../../components/Meta';
import MetaWrapper from './MetaWrapper';

const InfoMeta = props => {
  const { recipe } = props;
  const name = recipe.user.fullname;
  const time = `Durasi ${recipe.cookduration}`;

  return (
    <MetaWrapper>
      <Meta as="span" Icon={PermIdentity} label={`Oleh ${name}`} />
      <Meta as="span" Icon={QueryBuilder} label={time} />
    </MetaWrapper>
  );
};

InfoMeta.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      fullname: PropTypes.string.isRequired,
    }),
    approved_at: PropTypes.string.isRequired,
  }),
};

export default InfoMeta;
