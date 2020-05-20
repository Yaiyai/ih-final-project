import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './DashNav.css'
import AuthService from './../../../service/auth.service'
import CvService from '../../../service/cv.service'

class DashNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cv: '',
		}
		this.authServices = new AuthService()
		this.cvService = new CvService()
	}

	logout = () => {
		this.authServices
			.logout()
			.then(() => this.props.setTheUser(false))
			.then(() => this.props.history.push('/login'))
			.catch((err) => new Error(err))
	}

	getMyCv = () => {
		this.cvService
			.findMyCvs(this.props.loggedInDash._id)
			.then((response) => this.setState({ ...this.state, cv: response.data }))
			.catch((err) => new Error(err))
	}

	componentDidMount = () => {
		this.getMyCv()
	}

	render() {
		return (
			<>
				<nav className='lat-navbar'>
					<div className='personal-info'>
						<figure className='logo-dash'>
							<Link to='/'>
								<img src='/imgs/dashboard/logo-dash.svg' alt='Cuentame más' />
							</Link>
						</figure>
						<figure className='logo-profile'>
							{this.props.loggedInDash.avatar ? <img src={this.props.loggedInDash.avatar} alt='Cuentame más' /> : <img src='/imgs/ic/ic-signup.svg' alt='Cuentame más' />}
						</figure>
						{this.props.loggedInDash.name ? <p className='dash-name'>{`${this.props.loggedInDash.name} ${this.props.loggedInDash.lastName}`}</p> : <p className='dashName'>Añade nombre</p>}

						<p className='dash-email'>{this.props.loggedInDash.email}</p>
						<Link to='/dashboard/profile' className='my-button mini'>
							Editar perfil
						</Link>
					</div>

					<div className='button-group'>
						<Link className='dash-link' to='/dashboard'>
							dashboard <img src='/imgs/ic/ic-dashboard.svg' alt='' />
						</Link>
						{this.state.cv && (
							<Link className='dash-link' to={`/dashboard/cv/${this.state.cv[0]._id}`}>
								experiencia <img src='/imgs/ic/ic-cv.svg' alt='' />
							</Link>
						)}
						<Link className='dash-link' to='/dashboard/portfolio'>
							portfolios <img src='/imgs/ic/ic-addnew.svg' alt='' />
						</Link>
					</div>
					<button className='dash-link' onClick={this.logout}>
						Cerrar Sesión <img src='/imgs/ic/ic-close.svg' alt='' />
					</button>
				</nav>
			</>
		)
	}
}

export default DashNav
