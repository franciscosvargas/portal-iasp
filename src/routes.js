  
import React from 'react';
import { Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Benefits from './Pages/Benefits';
import Benefit from './Pages/Benefit';
import About from './Pages/About';

const Routes = () => (
    <HashRouter>
		<Switch>
        	<Route path="/" exact component={Home}/>
					<Route path="/contato" component={Contact}/>
					<Route path="/quem-somos" component={About}/>
					<Route path="/convenios" exact component={Benefits}/>
					<Route path="/convenios/:id" exact component={Benefit}/>
		</Switch>
    </HashRouter>
);

export default Routes