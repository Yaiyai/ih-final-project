import React from 'react'

import DashNav from './../../ui/dashNav/DashNav'
import Profile from './profile/Profile'
import HomeDash from './homedash/HomeDash'
import Cv from './cv/CvDets'
import T1 from './portfolios/templates/Template1'
import PortfolioCreator from './portfolios/Portfolio'

import './Dashboard.css'

import { Switch, Route } from 'react-router-dom'

const Dashboard = (props) => {
	return (
		<>
			<main className='dashPage'>
				<DashNav setTheUser={props.setTheUser} loggedInDash={props.loggedInUser} />

				<Switch>
					<Route exact path='/dashboard' render={() => <HomeDash {...props} loggedInDash={props.loggedInUser} />} />
					<Route path='/dashboard/profile' render={() => <Profile {...props} setTheUser={props.setTheUser} loggedInDash={props.loggedInUser} />} />
					<Route path='/dashboard/cv/:id' render={(props) => <Cv {...props} />} />
					<Route exact path='/dashboard/portfolio' render={() => <PortfolioCreator {...props} loggedInDash={props.loggedInUser} />} />
					<Route path='/dashboard/portfolio/t1' render={(props) => <T1 {...props} />} />
				</Switch>
			</main>
		</>
	)
}

export default Dashboard
