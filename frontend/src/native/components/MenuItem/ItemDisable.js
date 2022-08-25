/**
 * components/MenuItem/ItemDisable.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { CardItem } from 'native-base';

const ItemDisable = props => (
  <CardItem bordered style={{ opacity: 0.4 }}>
    {props.children}
  </CardItem>
);

ItemDisable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemDisable;
