import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from 'Components/App';

require('../css/index.scss');

ReactDOM.render(
   <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('container')
)