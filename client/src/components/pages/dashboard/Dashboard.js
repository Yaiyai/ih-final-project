import React, { Component } from 'react'

import DashNav from './../../ui/dashNav/DashNav'

import './Dashboard.css'

import { Switch, Route } from 'react-router-dom'


import HomeDash from './homedash/HomeDash'

class Dashboard extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<main className='dashPage'>
					<DashNav {...this.props} setTheUser={this.props.setTheUser} loggedInDash={this.props.loggedInUser} />
					<HomeDash {...this.props} loggedInDash={this.props.loggedInUser} />
				</main>
				<Switch>
					<Route to='/dasboard'></Route>
				</Switch>
			</>
		)
	}
}

export default Dashboard
