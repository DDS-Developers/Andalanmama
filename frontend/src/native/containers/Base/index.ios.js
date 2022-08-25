/**
 * containers/Base/index.ios.js
 *
 */
import React, { Component } from 'react';
import General from './General';
import Root from '../Root';

// eslint-disable-next-line react/prefer-stateless-function
export class BaseIos extends Component {
  render() {
    return (
      <General>
        <Root />
      </General>
    );
  }
}

export default BaseIos;
