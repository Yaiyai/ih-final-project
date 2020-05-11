import React, { Component } from 'react'

import DashNav from './../../ui/dashNav/DashNav'

class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<>
				<h1>Dashboard</h1>
				<DashNav />
			</>
		)
	}
}

export default Dashboard
