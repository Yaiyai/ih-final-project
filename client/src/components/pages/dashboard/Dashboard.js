import React, { Component } from 'react'

import DashNav from './../../ui/dashNav/DashNav'
import Profile from './profile/Profile'
import HomeDash from './homedash/HomeDash'

import './Dashboard.css'

import { Switch, Route } from 'react-router-dom'

class Dashboard extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<main className='dashPage'>
					<DashNav {...this.props} setTheUser={this.props.setTheUser} loggedInDash={this.props.loggedInUser} />

					<Switch>
						<Route exact path='/dashboard' render={() => <HomeDash {...this.props} loggedInDash={this.props.loggedInUser} />} />
						<Route path='/dashboard/profile' render={() => <Profile {...this.props} loggedInDash={this.props.loggedInUser} />} />
					</Switch>
				</main>
			</>
		)
	}
}

export default Dashboard
