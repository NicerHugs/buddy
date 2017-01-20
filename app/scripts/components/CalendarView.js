import React from 'react';
import {browserHistory} from 'react-router';

import CalSelect from './CalSelect';
import Nav from './Nav';
import AddButton from './AddButton';

const tabMap={day: 0, week: 1, month: 2}

export default React.createClass({
	changeTab(tab) {
		browserHistory.push({query: {tab: tab.value}});
	},
	render() {
		let content;
		return (
			<div className="calendar-view">
				<CalSelect/>
				<Nav
					selected={tabMap[this.props.location.query.tab]}
					changeTab={this.changeTab}/>
				<AddButton/>
			</div>
		)
	}
})
