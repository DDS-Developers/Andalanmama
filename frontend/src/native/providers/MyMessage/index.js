/**
 * providers/MyMessage/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  setMessages,
  addMessages,
  addMessage,
  removeMessage,
  clearList,
  setLoading,
  setTotal,
  setPaged,
  loadMessages,
  loadMoreMessages,
  setMessage,
  doDeleteMessage,
} from '../../store/MyMessage/actions';
import {
  makeSelectMessages,
  makeSelectLoading,
  makeSelectTotal,
  makeSelectPaged,
  makeSelectMessage,
  makeSelectMessageId,
} from '../../store/MyMessage/selectors';

export const MyMessageProvider = () => WrappedComponent => {
  class MyMessage extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  MyMessage.propTypes = {
    message: PropTypes.object,
    messageId: PropTypes.number,
    messages: PropTypes.object,
    listLoading: PropTypes.bool,
    listTotal: PropTypes.number,
    listPaged: PropTypes.number,
    loadMessages: PropTypes.func,
    loadMoreMessages: PropTypes.func,
    doDeleteMessage: PropTypes.func,
    setMessage: PropTypes.func,
    setMessages: PropTypes.func,
    addMessages: PropTypes.func,
    addMessage: PropTypes.func,
    removeMessage: PropTypes.func,
    setListLoading: PropTypes.func,
    clearList: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    message: makeSelectMessage(),
    messageId: makeSelectMessageId(),
    messages: makeSelectMessages(),
    listLoading: makeSelectLoading(),
    listTotal: makeSelectTotal(),
    listPaged: makeSelectPaged(),
  });

  const ListConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MyMessage);

  return hoistNonReactStatics(ListConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadMessages: () => dispatch(loadMessages()),
    loadMoreMessages: page => dispatch(loadMoreMessages(page)),
    doDeleteMessage: messageId => dispatch(doDeleteMessage(messageId)),
    setMessage: message => dispatch(setMessage(message)),
    setMessages: messages => dispatch(setMessages(messages)),
    addMessages: messages => dispatch(addMessages(messages)),
    addMessage: message => dispatch(addMessage(message)),
    removeMessage: id => dispatch(removeMessage(id)),
    setListTotal: total => dispatch(setTotal(total)),
    setListPaged: paged => dispatch(setPaged(paged)),
    setListLoading: status => dispatch(setLoading(status)),
    clearList: () => dispatch(clearList()),
  };
}

export const withMyMessage = MyMessageProvider();
