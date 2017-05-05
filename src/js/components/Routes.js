import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'Components/pages/Home';
import About from 'Components/pages/About';
import NotFound from 'Components/errors/NotFound';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;