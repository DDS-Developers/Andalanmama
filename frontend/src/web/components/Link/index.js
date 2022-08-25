import React from 'react';
import PropTypes from 'prop-types';
import { Link as Route } from 'react-router-dom';
import Base from './Base';
import Icon from '../Icon';
import TextLink from './TextLink';

const Link = props => {
  const { to, children, textProps, icon, iconProps, ...others } = props;
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  let Component = <a href={to} />;
  if (to) {
    Component = <Route to={to} />;
  }

  let TextComponent = props.children;
  if (textProps) {
    TextComponent = (
      <TextLink className="_label" {...textProps}>
        {props.children}
      </TextLink>
    );
  }

  const IconProp = icon;
  let IconComponent = null;
  if (IconProp && typeof IconProp === 'string') {
    IconComponent = (
      <Icon className="_icon" {...iconProps}>
        {IconProp}
      </Icon>
    );
  } else if (IconProp && typeof IconProp === 'object') {
    IconComponent = <IconProp className="_icon" {...iconProps} />;
  }

  return (
    <Base component={Component} {...others}>
      {IconComponent}
      {TextComponent}
    </Base>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  textProps: PropTypes.object,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconPosition: PropTypes.string,
  iconProps: PropTypes.object,
  to: PropTypes.string,
};

export default Link;
