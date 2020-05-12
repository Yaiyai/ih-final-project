import React, { Component } from 'react'

import DashNav from './../../ui/dashNav/DashNav'

import './Dashboard.css'

import { Switch, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Dashboard extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<main className='dashPage'>
					<DashNav {...this.props} setTheUser={this.props.setTheUser} loggedInDash={this.props.loggedInUser} />

					<Row className='dashInfo' as='section'>
						<article className='welcomeBox'>
							<div>
								<h4>Bienvenid@ {this.props.loggedInUser.username}</h4>
								<p>Este es tu dashboard de usuario. En él encontrarás todos los portfolios creados hasta el momento.</p>
								<p>¡Recuerda añadir tus trabajos para tener el portfolio a la última!</p>
							</div>
							<figure>
								<img src='/imgs/dashboard/img-welcome.svg' alt='Cuentame más' />{' '}
							</figure>
						</article>
					</Row>
				</main>
				<Switch>
					<Route to='/dasboard'></Route>
				</Switch>
			</>
		)
	}
}

export default Dashboard
