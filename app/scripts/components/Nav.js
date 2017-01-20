import React from 'react';
import {browserHistory} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';

import DayTab from './tabs/Day';
import WeekTab from './tabs/Week';
import MonthTab from './tabs/Month';

export default React.createClass({
	handleTab(a,b,tab) {
		this.props.changeTab(tab.props);
	},
	render() {
		return(
			<nav>
				<Tabs
					initialSelectedIndex={this.props.selected}
					onChange={this.handleTab}>
					<Tab value="day" label="Day"><DayTab/></Tab>
					<Tab value="week" label="Week"><WeekTab/></Tab>
					<Tab value="month" label="Month"><MonthTab/></Tab>
				</Tabs>
			</nav>
		);
	}
})
