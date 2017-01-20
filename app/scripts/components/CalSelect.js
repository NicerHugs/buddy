import React from 'react';
import IconButton from 'material-ui/IconButton';
import Next from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Prev from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

export default React.createClass({
	previous() {
		console.log('previous');
	},
	next() {
		console.log('next');
	},
	render() {
		return (
			<h2 className="cal-select">
				<IconButton onClick={this.previous}><Prev/></IconButton>
				Calendar Select
				<IconButton onClick={this.next}><Next/></IconButton>
			</h2>
		)
	}
})
