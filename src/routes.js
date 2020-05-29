  
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';

const Routes = () => (
    <BrowserRouter>
		<Switch>
        	<Route exact path="/" component={Home}/>
			<Route path="/contato" component={Contact}/>
		</Switch>
    </BrowserRouter>
);

export default Routes