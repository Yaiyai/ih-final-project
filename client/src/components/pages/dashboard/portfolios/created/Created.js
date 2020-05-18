import React, { Component } from 'react'
import UrlServices from '../../../../../service/url.service'
import { Link } from 'react-router-dom'


import Container from 'react-bootstrap/Container'

import './Created.css'

class Created extends Component {
	constructor(props) {
		super(props)
		this.state = {
			portfolio: {
				title: '',
				skills: [],
				socialMedia: [],
				companyName: '',
				companyAvatar: '',
				education: [],
				experience: [],
				works: [],
				avatar: '',
				url: '',
				owner: {},
			},
		}
		this.url = this.props.match.params.url
		this.urlService = new UrlServices()
	}

	getThisPortfolio() {
		this.urlService
			.createPublicUrl(this.url)
			.then((response) => this.setState({ portfolio: response.data }))
			.catch((err) => new Error(err))
	}
	componentDidMount() {
		this.getThisPortfolio()
	}

	render() {
		return (
			<>
				{this.props.loggedInUser && <Link to="/dashboard" className="myButton">Volver al dashboard</Link>}
				<main className='portfolioPage'>
					<Container className='portfolioInfo'>
						<h1>
							Hola {this.state.portfolio.owner.name} Soy tu portfolio id {this.state.portfolio._id} que quieres enviarle a la empresa {this.state.portfolio.companyName}
						</h1>
						<section className='ownerData'></section>
						{this.state.portfolio.owner.avatar && (
							<figure className='ownerAvatar'>
								<img src={this.state.portfolio.owner.avatar} alt='' />
							</figure>
						)}
					</Container>
				</main>
				{/* {this.state.portfolio.experience &&
					this.state.portfolio.experience.map((job, idx) => (
						<article key={idx}>
							<p>{job.place}</p>
							<p>{job.duration}</p>
							<p>{job.experienceInfo}</p>
						</article>
					))}
				{this.state.portfolio.education &&
					this.state.portfolio.education.map((ed, idx) => (
						<article key={idx}>
							<p>{ed.place}</p>
							<p>{ed.duration}</p>
							<p>{ed.experienceInfo}</p>
						</article>
					))}
				{this.state.portfolio.profile &&
					this.state.portfolio.profile.map((elm, idx) => (
						<article key={idx}>
							<p>{elm}</p>
						</article>
					))} */}
			</>
		)
	}
}

export default Created
