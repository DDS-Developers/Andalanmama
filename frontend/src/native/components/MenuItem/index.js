/**
 * components/MenuItem/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Right } from 'native-base';
import Text from '../Text';
import ItemActive from './ItemActive';
import ItemDisable from './ItemDisable';

const MenuItem = props => {
  const { disabled, target, callback, ...others } = props;

  if (!disabled) {
    return (
      <ItemActive target={target} callback={callback}>
        <MenuItemContent {...others} />
      </ItemActive>
    );
  }
  return (
    <ItemDisable>
      <MenuItemContent {...others} />
    </ItemDisable>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  target: PropTypes.string,
  disabled: PropTypes.bool,
};

const MenuItemContent = props => (
  <React.Fragment>
    <Icon type={props.type || 'MaterialIcons'} name={props.icon} style={{ color: '#e83249' }} />
    <Text>{props.label}</Text>
    <Right style={{ flex: 1 }}>
      <Icon type="MaterialIcons" name="arrow-forward" />
    </Right>
  </React.Fragment>
);

MenuItemContent.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default MenuItem;
