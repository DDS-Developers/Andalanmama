/**
 * components/Header/Left.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Left } from 'native-base';
import ButtonIcon from '../ButtonIcon';

const HeaderLeft = props => {
  const { type, ContentComponent, loading, ...others } = props;
  let content = null;
  if (!loading) {
    if (type) {
      if (type === 'back') {
        content = (
          <ButtonIcon
            iconType="MaterialIcons"
            iconName="arrow-back"
            handler={event => buttonHandler(props, event)}
            iconStyles={{ ...others }}
          />
        );
      } else if (type === 'close') {
        content = (
          <ButtonIcon
            iconType="MaterialIcons"
            iconName="close"
            handler={event => buttonHandler(props, event)}
            iconStyles={{ ...others }}
          />
        );
      }
    } else if (ContentComponent) {
      content = <ContentComponent />;
    }
  }
  return <Left style={{ position: 'absolute', left: 0 }}>{content}</Left>;
};

HeaderLeft.propTypes = {
  type: PropTypes.string,
  ContentComponent: PropTypes.node,
  loading: PropTypes.bool,
  // color: PropTypes.object,
};

const buttonHandler = (props, event) => {
  const { callback, target, navigation } = props;
  // console.log(navigation);

  if (callback) {
    callback(event);
  } else if (target) {
    navigation.navigate(target);
  } else {
    navigation.goBack();
  }
};

export default function(props) {
  const navigation = useNavigation();

  return <HeaderLeft {...props} navigation={navigation} />;
}
