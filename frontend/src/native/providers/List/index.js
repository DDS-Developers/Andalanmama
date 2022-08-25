/**
 * providers/List/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  setItems,
  addItems,
  addItem,
  updateItem,
  removeItem,
  clearList,
  setLoading,
  setTotal,
  setPaged,
} from '../../store/List/actions';
import {
  makeSelectItems,
  makeSelectSelected,
  makeSelectSelectedId,
  makeSelectLoading,
  makeSelectTotal,
  makeSelectPaged,
} from '../../store/List/selectors';

export const ListProvider = () => WrappedComponent => {
  class List extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  List.propTypes = {
    listItems: PropTypes.object,
    listSelectedId: PropTypes.number,
    listSelected: PropTypes.object,
    listLoading: PropTypes.bool,
    listTotal: PropTypes.number,
    listPaged: PropTypes.number,
    setListItems: PropTypes.func,
    addListItems: PropTypes.func,
    addListItem: PropTypes.func,
    updateListItem: PropTypes.func,
    removeListItem: PropTypes.func,
    setListLoading: PropTypes.func,
    clearList: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    listItems: makeSelectItems(),
    listSelectedId: makeSelectSelectedId(),
    listSelected: makeSelectSelected(),
    listLoading: makeSelectLoading(),
    listTotal: makeSelectTotal(),
    listPaged: makeSelectPaged(),
  });

  const ListConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(List);

  return hoistNonReactStatics(ListConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    setListItems: items => dispatch(setItems(items)),
    addListItems: items => dispatch(addItems(items)),
    addListItem: item => dispatch(addItem(item)),
    updateListItem: (id, data) => dispatch(updateItem(id, data)),
    removeListItem: id => dispatch(removeItem(id)),
    setListTotal: total => dispatch(setTotal(total)),
    setListPaged: paged => dispatch(setPaged(paged)),
    setListLoading: status => dispatch(setLoading(status)),
    clearList: () => dispatch(clearList()),
  };
}

export const withList = ListProvider();
