import React, { Component } from 'react'

import './App.css'
import { Switch, Route } from 'react-router-dom'

import AuthServices from '../service/auth.service'

// import User from './pages/user-list/User-list'
import Home from './pages/home/Home'
import Signup from './pages/signup/signup'

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
					<Route path='/' exact render={() => <Home />} />
					<Route path='/signup' render={(props) => <Signup {...props} setTheUser={this.setTheUser} />} />
				</Switch>
			</>
		)
	}
}

export default App
