import React, { Component } from 'react'
import PortfolioService from '../../../../service/portfolio.service'

import './HomeDash.css'
import { Link } from 'react-router-dom'

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

	deletePortfolio = (idx, id) => {
		this.portfolioService
			.deletePortfolio(id)
			.then(() => {
				let portfolioCopy = [...this.state.portfolios]
				portfolioCopy.splice(idx, 1)
				this.setState({ ...this.state, portfolios: portfolioCopy })
			})
			.catch((err) => new Error(err))
	}

	componentDidMount = () => {
		this.getMyPortfolios()
	}

	render() {
		return (
			<>
				<section className='home-dash'>
					<Row as='article' className='welcome-box'>
						<div>
							<h4>Bienvenid@ {this.props.loggedInUser.name}</h4>
							<p>Este es tu dashboard de usuario. En él encontrarás todos los portfolios creados hasta el momento.</p>
							<p>¡Recuerda añadir tus trabajos y trayectoria en la sección "Experiencia" para tener el portfolio a la última!</p>
						</div>
						<figure>
							<img src='/imgs/dashboard/img-welcome.svg' alt='Cuentame más' />{' '}
						</figure>
					</Row>

					<Row as='article' className='home-portfolios'>
						<h4>Mis portfolios</h4>

						<Row as='article' className='every-portfolio'>
							{this.state.portfolios.map((portfolio, idx) => (
								<>
									<article className='each-portfolio'>
										<Link key={idx} to={`/sharing/${portfolio.url}`}>
											<article className='portfolio-link'>
												<figure>
													<img src='/imgs/ic/ic-signup.svg' alt='' />
												</figure>
												<p className='title-portfolio'>{portfolio.title}</p>
											</article>
										</Link>
										<button className='my-button mini outlined' onClick={() => this.deletePortfolio(idx, portfolio._id)}>
											borrar
										</button>
									</article>
								</>
							))}
							<Link to='/dashboard/portfolio'>
								<div className='each-portfolio add'>
									<figure>
										<img src='/imgs/ic/ic-addnew-portfolio.svg' alt='' />
									</figure>
									<p className='add-portfolio'>Nuevo Portfolio</p>
								</div>
							</Link>
						</Row>
					</Row>
				</section>
			</>
		)
	}
}

export default dashHome
