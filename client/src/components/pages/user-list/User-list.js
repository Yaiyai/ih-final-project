import React, { Component } from 'react'
import UserService from '../../../service/user.service'

import Container from 'react-bootstrap/Container'

class User extends Component {
	constructor() {
		super()
		this.state = {
			users: [],
		}
		this.userService = new UserService()
	}

	getAllUsers = () => {
		this.userService
			.getUsers()
			.then((response) => this.setState({ users: response.data }))
			.catch((err) => console.log(err))
	}

	componentDidMount = () => {
		this.getAllUsers()
	}

	render() {
		console.log(this.state.users)
		return (
			<>
				<Container>
					{this.state.users.map((user) => (
						<h1>{user.username}</h1>
					))}
				</Container>
			</>
		)
	}
}

export default User
