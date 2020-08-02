  
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Benefits from './Pages/Benefits';
import Benefit from './Pages/Benefit';

const Routes = () => (
    <BrowserRouter>
		<Switch>
        	<Route path="/" exact component={Home}/>
					<Route path="/contato" component={Contact}/>
					<Route path="/convenios" exact component={Benefits}/>
					<Route path="/convenios/:id" exact component={Benefit}/>
		</Switch>
    </BrowserRouter>
);

export default Routes