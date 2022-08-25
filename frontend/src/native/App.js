/**
 * App.js
 *
 */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Base from './containers/Base';
import { Http } from './services/http';

Http.init();

const App = () => <Base />;

export default App;
