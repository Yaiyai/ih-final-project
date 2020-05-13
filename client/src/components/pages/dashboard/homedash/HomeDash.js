import React, { Component } from 'react'
import PortfolioService from '../../../../service/portfolio.service'

import './HomeDash.css'

import Row from 'react-bootstrap/Row'

class dashHome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			portfolios: [],
		}
		this.portfolioService = new PortfolioService()
	}

	getMyPortfolios = () => {
		console.log('username is', this.props.loggedInDash.username)
		console.log('user id', this.props.loggedInDash._id)
		this.portfolioService
			.findMyPortfolios(this.props.loggedInDash._id)
			.then((response) => this.setState({ portfolios: response.data }))
			.catch((err) => new Error(err))
	}

	componentDidMount = () => {
		this.getMyPortfolios()
	}

	render() {
		console.log(this.state.portfolios)
		return (
			<>
				<section className='homeDash'>
					<Row as='article' className='welcomeBox'>
						<div>
							<h4>Bienvenid@ {this.props.loggedInUser.name}</h4>
							<p>Este es tu dashboard de usuario. En él encontrarás todos los portfolios creados hasta el momento.</p>
							<p>¡Recuerda añadir tus trabajos para tener el portfolio a la última!</p>
						</div>
						<figure>
							<img src='/imgs/dashboard/img-welcome.svg' alt='Cuentame más' />{' '}
						</figure>
					</Row>
					<Row as='article' className='homePortfolios'>
						<p>
							dash home, aqui se verán los portfolios availables<br></br>
						</p>
						<p>-------</p>
						{this.state.portfolios.map((portfolio, idx) => (
							<p key={idx}>{portfolio.title}</p>
						))}
					</Row>
				</section>
			</>
		)
	}
}

export default dashHome
