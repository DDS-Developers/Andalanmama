/**
 * containers/List/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListProvider } from '../../providers/List';

export const withList = ListProvider();

export class ListContainer extends PureComponent {
  componentWillUnmount() {
    this.props.clearList();
  }

  render() {
    const { children } = this.props;

    return <React.Fragment>{children}</React.Fragment>;
  }
}

ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  clearList: PropTypes.func,
};

export default withList(ListContainer);
