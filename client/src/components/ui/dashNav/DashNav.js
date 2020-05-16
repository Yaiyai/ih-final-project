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
		this.authServices
			.logout()
			.then(() => this.props.setTheUser(false))
			.then(() => this.props.history.push('/login'))
			.catch((err) => new Error(err))
	}

	render() {
		return (
			<>
				<nav className='latNavBar'>
					<div className='personalInfo'>
						<figure className='logoDash'>
							<img src='/imgs/dashboard/logo-dash.svg' alt='Cuentame más' />
						</figure>
						<figure className='logoProfile'>
							{this.props.loggedInDash.avatar ? <img src={this.props.loggedInDash.avatar} alt='Cuentame más' /> : <img src='/imgs/ic/ic-signup.svg' alt='Cuentame más' />}
						</figure>
						{this.props.loggedInDash.name ? <p className='dashName'>{`${this.props.loggedInDash.name} ${this.props.loggedInDash.lastName}`}</p> : <p className='dashName'>Añade nombre</p>}

						<p className='dashEmail'>{this.props.loggedInDash.email}</p>
						<Link to='/dashboard/profile' className='myButton mini'>
							Editar perfil
						</Link>
					</div>

					<div className='buttonGroup'>
						<Link className='dashLink' to='/dashboard'>
							dashboard <img src='/imgs/ic/ic-dashboard.svg' alt='' />
						</Link>
						<Link className='dashLink' to='/dashboard/cv'>
							experiencia <img src='/imgs/ic/ic-cv.svg' alt='' />
						</Link>
						<Link className='dashLink' to='#'>
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
