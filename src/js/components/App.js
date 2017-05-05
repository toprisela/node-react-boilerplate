import React, { Component } from 'react';

import Navigation from 'Components/navigation/Navigation';
import Routes from 'Components/Routes';

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