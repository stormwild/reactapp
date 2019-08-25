import React from 'react';
import ReactDOM from 'react-dom';

import browserHistory from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <App name="world" />
  </Router>,
  document.getElementById('app')
)
