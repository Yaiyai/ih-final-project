import React, { Component } from 'react'
import './HomeNav.css'
import AuthServices from './../../../service/auth.service'

import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.authServices = new AuthServices()
	}

	logout = () => {
		this.authServices
			.logout()
			.then(() => this.props.setTheUser(false))
			.then(() => this.props.history.push('/login'))
			.catch((err) => new Error(err))
	}

	render() {
		return (
			<>
				<div className='menu'>
					<Container className='flex-container'>
						<Link className='to-link' to='/'>
							¿Cómo funciona?
						</Link>
						<div>
							{this.props.loggedInHome ? (
								<>
									<Link className='to-link' to='/dashboard'>
										Mi perfil
									</Link>
									<button onClick={this.logout} className='to-link' to='/login'>
										Cerrar Sesión
									</button>
								</>
							) : (
								<>
									<Link className='to-link' to='/signup'>
										Registrarme
									</Link>
									<Link className='to-link' to='/login'>
										Iniciar sesión
									</Link>
								</>
							)}
						</div>
					</Container>
				</div>
			</>
		)
	}
}

export default NavBar
