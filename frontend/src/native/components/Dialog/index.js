/**
 * components/Dialog.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import Text from '../Text';
import TitleWrapper from './TitleWrapper';
import BoxWrapper from './BoxWrapper';
import Wrapper from './Wrapper';
import ActionWrapper from './ActionWrapper';

export class Dialog extends PureComponent {
  renderTitle = () => {
    const { title } = this.props;
    if (title !== '') {
      return <TitleWrapper>{title}</TitleWrapper>;
    }
    return null;
  };

  renderAction = () => {
    const { actions } = this.props;
    if (actions) {
      return <ActionWrapper>{actions}</ActionWrapper>;
    }
    return null;
  };

  render() {
    const { visible, message } = this.props;
    if (visible) {
      return (
        <Wrapper>
          <BoxWrapper>
            <View style={{ marginBottom: 35 }}>
              {this.renderTitle()}
              <Text>{message}</Text>
            </View>
            {this.renderAction()}
          </BoxWrapper>
        </Wrapper>
      );
    }
    return null;
  }
}

Dialog.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  actions: PropTypes.node,
  message: PropTypes.string.isRequired,
};

export default Dialog;
