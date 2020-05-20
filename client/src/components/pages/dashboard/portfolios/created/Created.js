import React, { Component } from 'react'
import UrlServices from '../../../../../service/url.service'
import { Link } from 'react-router-dom'
import HomeNav from './../../../../ui/homeNav/HomeNav'

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
		console.log('holi')
		return (
			<>
				<HomeNav loggedInHome={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
				<main className='portfolio-page'>
					{!this.state.portfolio ? (
						<h1>cargando...</h1>
					) : (
						<Container className='portfolio-info'>
							<section className='section-bkg'>
								<h2>
									{this.state.portfolio.owner.name} {this.state.portfolio.owner.lastName}
								</h2>
								<h6>
									{this.state.portfolio.owner.phone} <span className='bar'>|</span> {this.state.portfolio.owner.email}
								</h6>

								{!this.state.portfolio.socialMedia.length === 0 ? null : (
									<article className='social-section'>
										<span className='bar'>|</span>
										{this.state.portfolio.socialMedia.map((sm, idx) => (
											<>
												<p className='social-tag' key={idx}>
													{sm}
												</p>
												<span className='bar'>|</span>
											</>
										))}
									</article>
								)}

								{!this.state.portfolio.skills.length === 0 ? null : (
									<article className='skill-section'>
										{this.state.portfolio.skills.map((skill, idx) => (
											<p key={idx} className='skill-tag'>
												{skill}
											</p>
										))}
									</article>
									) }
									
							</section>

							{this.state.portfolio.education.length === 0 ? null : (
								<section className='section-bkg'>
									<h3>Educación</h3>
									{this.state.portfolio.education.map((ed, idx) => (
										<article className='ed-tag' key={idx}>
											<h6>{ed.place}</h6>
											<small>{ed.duration}</small>
											<p>{ed.experienceInfo}</p>
										</article>
									))}
								</section>
							)}

							{this.state.portfolio.experience.length === 0 ? null : (
								<section className='section-bkg'>
									<h3>Trayectoria profesional</h3>
									{this.state.portfolio.experience.map((job, idx) => (
										<article className='job-tag' key={idx}>
											<h6>{job.place}</h6>
											<small>{job.duration}</small>
											<p>{job.experienceInfo}</p>
										</article>
									))}
								</section>
							)}

							{this.state.portfolio.works.length === 0 ? null : (
								<section className='section-bkg'>
									<h3>Mis trabajos</h3>
									<article className='work-section'>
										{this.state.portfolio.works.map((work, idx) => (
											<figure key={idx} className='work-tag'>
												<img src={work} alt='' />
											</figure>
										))}
									</article>
								</section>
							)}
						</Container>
					)}
				</main>
			</>
		)
	}
}

export default Created
