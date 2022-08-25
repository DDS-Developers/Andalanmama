/**
 * components/Header/Right.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Right } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ButtonText from '../ButtonText';

const HeaderRight = props => {
  const { label, target, handler, ContentComponent, loading } = props;
  let content = null;
  if (!loading) {
    if (label && (target || handler)) {
      content = <ButtonText onPress={event => buttonHandler(props, event)}>{label}</ButtonText>;
    } else if (ContentComponent) {
      content = ContentComponent;
    }
  }
  return <Right style={{ position: 'absolute', right: 0 }}>{content}</Right>;
};

HeaderRight.propTypes = {
  label: PropTypes.string,
  target: PropTypes.string,
  handler: PropTypes.func,
  ContentComponent: PropTypes.node,
  loading: PropTypes.bool,
};

const buttonHandler = (props, event) => {
  const { target, handler, navigation } = props;

  if (handler) {
    handler(event);
  } else if (target) {
    navigation.navigate(target);
  } else {
    navigation.goBack();
  }
};

export default function(props) {
  const navigation = useNavigation();

  return <HeaderRight {...props} navigation={navigation} />;
}
