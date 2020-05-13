import React, { Component } from 'react'
import PortfolioService from '../../../../service/portfolio.service'
import CvService from '../../../../service/cv.service'

import './HomeDash.css'
import {Link} from 'react-router-dom'

import Row from 'react-bootstrap/Row'

class dashHome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			portfolios: [],
			cvs: [],
		}
		this.portfolioService = new PortfolioService()
		this.cvService = new CvService()
	}

	getMyPortfolios = () => {
		// console.log('username is', this.props.loggedInDash.username)
		// console.log('user id', this.props.loggedInDash._id)
		this.portfolioService
			.findMyPortfolios(this.props.loggedInDash._id)
			.then((response) => this.setState({ portfolios: response.data }))
			.catch((err) => new Error(err))
	}
	getMyCv = () => {
		this.cvService
			.findMyCvs(this.props.loggedInDash._id)
			.then((response) => this.setState({ cvs: response.data }))
			.catch((err) => new Error(err))
	}

	componentDidMount = () => {
		this.getMyPortfolios()
		this.getMyCv()
	}

	render() {
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

					<Row as='article' className='homeCv'>
						
						<h4>Mis CV</h4>

						<Row as='article' className='everyCv'>
							{this.state.cvs.map((cv, idx) => (
								<Link key={idx} to={`/dashboard/cv/${cv._id}`}>
									<article className='eachCv'>
										<figure>
											<img src='/imgs/ic/ic-signup.svg' alt='' />
										</figure>
										<p className='titleCv'>{cv.title}</p>
									</article>
								</Link>
							))}

							<div className='eachCv add'>
								<figure>
									<img src='/imgs/ic/ic-addnew-portfolio.svg' alt='' />
								</figure>
								<p className='addCv'>Nuevo Cv</p>
							</div>
						</Row>
					</Row>
				</section>
			</>
		)
	}
}

export default dashHome
