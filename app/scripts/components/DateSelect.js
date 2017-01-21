import React from 'react';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Next from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Prev from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import moment from 'moment';

export default React.createClass({
	previous() {
		this.props.changeDate(moment(this.props.date).day(-7).toISOString());
	},
	next() {
		this.props.changeDate(moment(this.props.date).day(7).toISOString());
	},
	today() {
		this.props.changeDate(moment().day(0).toISOString());
	},
	render() {
		return (
			<div className="cal-select">
				<h2>
					<IconButton onClick={this.previous}><Prev/></IconButton>
					{moment(this.props.date).format('MMMM Do')} - {moment(this.props.date).day(6).format('MMMM Do')}
					<IconButton onClick={this.next}><Next/></IconButton>
				</h2>
				<RaisedButton label="Today" onClick={this.today}/>
			</div>
		)
	}
})
