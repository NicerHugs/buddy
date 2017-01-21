import React from 'react';
import {browserHistory} from 'react-router';
import moment from 'moment';
import {Card, CardTitle} from 'material-ui/Card';

import DateSelect from './DateSelect';
import ActivityTable from './ActivityTable';
import Tabs from './Tabs';

export default React.createClass({
	changeDate(date) {
		browserHistory.push({query: {date}});
	},
	render() {
		let content;
		return (
			<main className="calendar-view">
				<DateSelect
					date={this.props.location.query.date || moment().day(0).toISOString()}
					changeDate={this.changeDate}/>
				<Card className="user-card">
					<CardTitle title="Jess"/>
					<ActivityTable date={this.props.location.query.date || moment().day(0).toISOString()}/>
				</Card>
				<Card className="user-card">
					<CardTitle title="Sylva"/>
					<ActivityTable date={this.props.location.query.date || moment().day(0).toISOString()}/>
				</Card>
			</main>
		)
	}
})
