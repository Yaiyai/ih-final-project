import React, { Component } from 'react'

import './App.css'
import { Switch, Route } from 'react-router-dom'

import AuthServices from '../service/auth.service'

// import User from './pages/user-list/User-list'
import Home from './pages/home/Home'
import Signup from './pages/signup/signup'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import PortfolioOne from './pages/dashboard/portfolios/created/templateOne/One'
import PortfolioTwo from './pages/dashboard/portfolios/created/templateTwo/Two'
import PortfolioThree from './pages/dashboard/portfolios/created/templateThree/Three'

class App extends Component {
	constructor() {
		super()
		this.state = { loggedInUser: null }
		this.authService = new AuthServices()
	}

	setTheUser = (userObj) => this.setState({ loggedInUser: userObj })

	fetchUser = () => {
		if (this.state.loggedInUser === null) {
			this.authService
				.isLoggedIn()
				.then((response) => this.setTheUser(response.data))
				.catch(() => this.setTheUser(false))
		}
	}

	render() {
		this.fetchUser()

		return (
			<>
				<Switch>
					<Route path='/' exact render={(props) => <Home {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
					<Route path='/signup' render={(props) => <Signup {...props} setTheUser={this.setTheUser} />} />
					<Route path='/login' render={(props) => <Login {...props} setTheUser={this.setTheUser} />} />
					<Route
						path='/dashboard'
						render={(props) =>
							this.state.loggedInUser ? <Dashboard {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> : <Login {...props} setTheUser={this.setTheUser} />
						}
					/>
					<Route path='/sharing/t1/:url' render={(props) => <PortfolioOne {...props} loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} />} />
					<Route path='/sharing/t2/:url' render={(props) => <PortfolioTwo {...props} loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} />} />
					<Route path='/sharing/t3/:url' render={(props) => <PortfolioThree {...props} loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} />} />
				</Switch>
			</>
		)
	}
}

export default App
