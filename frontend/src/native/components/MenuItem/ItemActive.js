/**
 * components/MenuItem/ItemDisable.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { CardItem } from 'native-base';

const ItemActive = props => (
  <CardItem
    bordered
    button
    onPress={() => {
      if (props.callback) {
        return props.callback();
      }
      if (props.target) {
        return props.navigation.navigate(props.target);
      }
      return false;
    }}
  >
    {props.children}
  </CardItem>
);

ItemActive.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  callback: PropTypes.func,
  navigation: PropTypes.object.isRequired,
};

export default function(props) {
  const navigation = useNavigation();

  return <ItemActive {...props} navigation={navigation} />;
}
