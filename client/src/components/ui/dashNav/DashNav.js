import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './DashNav.css'
import AuthService from './../../../service/auth.service'

class DashNav extends Component {
	constructor(props) {
		super(props)
		this.authServices = new AuthService()
	}

	logout = () => {
		this.props.setTheUser(false)
		this.props.history.push('/')
		this.authServices.logout()
	}

	render() {
		return (
			<>
				<nav className='latNavBar'>
					<div className='personalInfo'>
						<figure className='logoDash'>
							<img src='/imgs/dashboard/logo-dash.svg' alt='Cuentame más' />{' '}
						</figure>
						<figure className='logoProfile'>
							<img src='/imgs/ic/ic-signup.svg' alt='Cuentame más' />{' '}
						</figure>
						<p className='dashName'>{this.props.loggedInDash.name}Yaiza del Río</p>
						<p className='dashEmail'>{this.props.loggedInDash.email}user@email.com</p>
					</div>

					<div className='buttonGroup'>
						<Link className='dashLink' to='/'>
							dashboard <img src='/imgs/ic/ic-dashboard.svg' alt='' />
						</Link>
						<Link className='dashLink' to='/'>
							perfil <img src='/imgs/ic/ic-profile.svg' alt='' />
						</Link>
						<Link className='dashLink' to='/'>
							experiencia <img src='/imgs/ic/ic-cv.svg' alt='' />
						</Link>
						<Link className='dashLink' to='/'>
							portfolios <img src='/imgs/ic/ic-addnew.svg' alt='' />
						</Link>
					</div>
					<button className='dashLink' onClick={this.logout}>
						Cerrar Sesión <img src='/imgs/ic/ic-close.svg' alt='' />
					</button>
				</nav>
			</>
		)
	}
}

export default DashNav
