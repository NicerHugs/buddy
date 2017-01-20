import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {browserHistory} from 'react-router';

export default React.createClass({
	selectUser(name) {
		browserHistory.push(name);
	},
	render() {
		let cards = ['jess', 'sylvia'].map(name=> {
			return (
				<Card key={name}>
					<CardTitle
						onClick={this.selectUser.bind(this, name)}
			      title={name}
			    />
				</Card>
			);
		});
			return (
			<div>
				{cards}
			</div>
			);
		}
	});
