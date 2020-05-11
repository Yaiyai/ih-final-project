import React, { Component } from 'react'

import './DashNav.css'
import AuthServices from './../../../service/auth.service'

import { Link } from 'react-router-dom'

class DashNav extends Component {
	constructor() {
		super()
		this.state = {}
		this.authServices = new AuthServices()
	}

	logout = () => this.authServices.logout()

	render() {
		return (
			<>
				<button onClick={this.logout}>Cerrar Sesión</button>
			</>
		)
	}
}

export default DashNav
