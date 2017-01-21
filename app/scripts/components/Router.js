import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import Main from './Main';
import Login from './Login';
import Add from './Add';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main}/>
			<Route path="login" component={Login}/>
			<Route path="add" component={Add}/>
		</Route>
	</Router>
);
