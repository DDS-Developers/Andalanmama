/**
 * components/FieldErrorInfo/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import Paragraph from '../Paragraph';

const FieldErrorInfo = props => {
  const { message, center, top, bottom, ...others } = props;

  let style = {};
  if (top) {
    style = { marginBottom: 15 };
  } else if (bottom) {
    style = { marginTop: 5 };
  }

  if (message) {
    return (
      <View style={style} {...others}>
        <Paragraph
          marginBottom={false}
          center={center}
          textStyles={{ color: '#e83249', size: 200 }}
        >
          {message}
        </Paragraph>
      </View>
    );
  }
  return null;
};

FieldErrorInfo.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  center: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
};

export default FieldErrorInfo;
