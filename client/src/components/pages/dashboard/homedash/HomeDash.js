import React, { Component } from 'react'
import PortfolioService from '../../../../service/portfolio.service'

import './HomeDash.css'
import {Link} from 'react-router-dom'

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
		this.portfolioService
			.findMyPortfolios(this.props.loggedInDash._id)
			.then((response) => this.setState({ portfolios: response.data }))
			.catch((err) => new Error(err))
	}

	componentDidMount = () => {
		this.getMyPortfolios()
	}

	render() {
		return (
			<>
				<section className='homeDash'>
					<Row as='article' className='welcomeBox'>
						<div>
							<h4>Bienvenid@ {this.props.loggedInUser.name}</h4>
							<p>Este es tu dashboard de usuario. En él encontrarás todos los portfolios creados hasta el momento.</p>
							<p>¡Recuerda añadir tus trabajos y trayectoria en la sección "Experiencia" para tener el portfolio a la última!</p>
						</div>
						<figure>
							<img src='/imgs/dashboard/img-welcome.svg' alt='Cuentame más' />{' '}
						</figure>
					</Row>

					<Row as='article' className='homePortfolios'>
						
						<h4>Mis portfolios</h4>

						<Row as='article' className='everyPortfolio'>
							{this.state.portfolios.map((portfolio, idx) => (
								<Link key={idx} to=''>
									<article className='eachPortfolio'>
										<figure>
											<img src='/imgs/ic/ic-signup.svg' alt='' />
										</figure>
										<p className='titlePortfolio'>{portfolio.title}</p>
									</article>
								</Link>
							))}

							<div className='eachPortfolio add'>
								<figure>
									<img src='/imgs/ic/ic-addnew-portfolio.svg' alt='' />
								</figure>
								<p className='addPortfolio'>Nuevo Portfolio</p>
							</div>
						</Row>
					</Row>

				</section>
			</>
		)
	}
}

export default dashHome
