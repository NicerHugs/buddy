import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import CalendarView from './CalendarView';
import UserView from './UserView';
import Login from './Login';
import Add from './Add';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={CalendarView}/>
			<Route path="login" component={Login}/>
			<Route path="add" component={Add}/>
			<Route path=":username" component={UserView}/>
		</Route>
	</Router>
);
