import React from 'react';
import PropTypes from 'prop-types';
import IconLib from '../Icon';
import Text from '../Text';
import Wrapper from './Wrapper';

const Meta = props => {
  const { label, Icon, color, ...others } = props;

  return (
    <Wrapper {...others}>
      {Icon && typeof Icon === 'object' ? (
        <Icon style={{ fontSize: 16, marginRight: 6 }} />
      ) : (
        <IconLib size={16} marginRight="6px" color={color}>
          {Icon}
        </IconLib>
      )}
      <Text as="span" size={100} color={color}>
        {label}
      </Text>
    </Wrapper>
  );
};

Meta.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
};

export default Meta;
