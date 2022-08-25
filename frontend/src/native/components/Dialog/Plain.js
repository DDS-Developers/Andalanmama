/**
 * components/Dialog.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Wrapper from './Wrapper';

export class DialogPlain extends PureComponent {
  render() {
    const { visible, children } = this.props;
    if (visible) {
      return (
        <Wrapper style={{ paddingVertical: 20 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#ffffff',
              borderRadius: 5,
              width: '90%',
              maxWidth: 500,
            }}
          >
            {children}
          </View>
        </Wrapper>
      );
    }
    return null;
  }
}

DialogPlain.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default DialogPlain;
