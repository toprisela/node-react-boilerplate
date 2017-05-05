import React, { Component } from 'react';

import Navigation from './navigation/Navigation';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;