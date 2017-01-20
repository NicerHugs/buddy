import React from 'react';
import {browserHistory} from 'react-router'

import Nav from './Nav';
import AddButton from './AddButton';

export default React.createClass({
	changeTab(tab) {
		browserHistory.push({pathname: '/', query: {tab: tab.value}})
	},
	render() {
		let content;
		return (
			<div className="user-view">
				<h2>{this.props.params.username}</h2>
				<Nav
					selected={-1}
					changeTab={this.changeTab}/>
				{content || 'content'}
				<AddButton/>
			</div>
		)
	}
})
