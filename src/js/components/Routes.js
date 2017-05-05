import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'Components/pages/Home';
import About from 'Components/pages/About';
import NotFound from 'Components/errors/NotFound';

const Routes = () =>
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={About} path='/about' />
		<Route component={NotFound} />
	</Switch>;

export default Routes;
