import React from 'react';
import {browserHistory} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default React.createClass({
	clickAdd() {
		browserHistory.push('add');
	},
	render() {
		return (
			<FloatingActionButton onClick={this.clickAdd}>
				<ContentAdd />
			</FloatingActionButton>
		);
	}
})
