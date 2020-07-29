  
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Benefits from './Pages/Benefits';

const Routes = () => (
    <BrowserRouter>
		<Switch>
        	<Route exact path="/" component={Home}/>
					<Route path="/contato" component={Contact}/>
					<Route path="/convenios" component={Benefits}/>
		</Switch>
    </BrowserRouter>
);

export default Routes