import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

export default React.createClass({
	render() {
		return (
			<MuiThemeProvider>
				<div className="accountabilibuddy">
					<AppBar
						title="AccountabiliBuddy"/>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
});
