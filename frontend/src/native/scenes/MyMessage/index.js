/**
 * scenes/MyMessage/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Container } from 'native-base';
import { View } from 'react-native';

import { withAuth } from '../../providers/Auth';
import { withMyMessage } from '../../providers/MyMessage';
import AuthRoot from '../../containers/AuthRoot';

import Header from '../../components/Header';
import Loader from '../../components/Loader';

import List from './List';

export class MyMessageScene extends PureComponent {
  static navigationOptions = {
    title: 'Pesan',
    header: null,
  };

  componentDidMount() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      this.props.loadMessages();
    }
  }

  renderList = () => {
    const { listLoading, messages } = this.props;

    return (
      <List
        listLoading={listLoading}
        items={messages.toArray()}
        total={30}
        onLoadMore={paged => {
          this.props.loadMoreMessages(paged);
        }}
        onRefresh={() => {
          this.props.loadMessages();
        }}
      />
    );
  };

  render() {
    const { listLoading } = this.props;

    return (
      <AuthRoot>
        <Container>
          <Header title="Pesan" leftSettings={{ type: 'back' }} />
          <View style={{ flex: 1, backgroundColor: '#efefef', position: 'relative' }}>
            <Loader visible={listLoading} />
            <View style={{ flex: 1, zIndex: 1 }}>{this.renderList()}</View>
          </View>
        </Container>
      </AuthRoot>
    );
  }
}

MyMessageScene.propTypes = {
  listLoading: PropTypes.bool,
  messages: PropTypes.object,
  loggedIn: PropTypes.bool,
  loadMessages: PropTypes.func,
  loadMoreMessages: PropTypes.func,
};

export default compose(
  withAuth,
  withMyMessage,
)(MyMessageScene);
