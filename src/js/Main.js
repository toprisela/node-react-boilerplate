import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './components/App'

require('../css/index.scss');

ReactDOM.render(
  <App />,
  document.getElementById('container')
)