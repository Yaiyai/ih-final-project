import React, { Component } from 'react'

import DashNav from './../../ui/dashNav/DashNav'

class Dashboard extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<h1>Dashboard</h1>
				<DashNav {...this.props} setTheUser={this.props.setTheUser} />
			</>
		)
	}
}

export default Dashboard
