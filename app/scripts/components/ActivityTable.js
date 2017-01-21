import React from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import moment from 'moment';

import data from '../data';

export default React.createClass({
	handleChange() {},
 	render() {
		let headers = [0,1,2,3,4,5,6].map(n => {
			let dateFormat = window.innerWidth > 560 ? 'dddd' : 'ddd'
			return (
				<TableHeaderColumn key={n}>
					{moment(this.props.date).day(n).format(dateFormat)}
				</TableHeaderColumn>
			);
		})
		let cells = data.map((activities, n) => {
			return (
				<TableRowColumn
					key={'activity'+ n}>
					{activities.map(activity=> {
						return (
							<Checkbox
								key={activity.description}
								label={activity.description}
								checked={activity.complete}/>
						)
					})}
				</TableRowColumn>
			);
		})
 		return (
 			<Table selectable={false}>
				<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
					<TableRow>
						{headers}
					</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={false}>
					<TableRow>
						{cells}
					</TableRow>
				</TableBody>
			</Table>
 		);
 	}
 });
