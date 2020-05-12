import React, { Component } from 'react'

import './DashNav.css'
import AuthService from './../../../service/auth.service'

class DashNav extends Component {
	constructor(props) {
		super(props)
		this.authServices = new AuthService()
	}

	logout = () => {
		this.props.setTheUser(false)
		this.authServices.logout()
	}

	render() {
		return (
			<>
				<button onClick={this.logout}>Cerrar Sesión</button>
			</>
		)
	}
}

export default DashNav
