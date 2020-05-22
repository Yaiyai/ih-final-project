import React, { Component } from 'react'
import UrlServices from '../../../../../../service/url.service'
import HomeNav from '../../../../../ui/homeNav/HomeNav'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

import { Link } from 'react-router-dom'


import './One.css'

class One extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalShow: false,
			modalId: '',
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
				theme: '',
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
	handleModal = (visible, modalId) => this.setState({ modalShow: visible, modalId: modalId })
	displayModal = () => {
		if (this.state.modalShow) {
			return (
				<figure className='modal-show-img'>
					<img src={this.state.modalId} />
				</figure>
			)
		}
	}

	render() {
		return (
			<>
				<HomeNav loggedInHome={this.props.loggedInUser} setTheUser={this.props.setTheUser} />
				<main className='portfolio-one'>
					{!this.state.portfolio ? (
						<h1>cargando...</h1>
					) : (
						<div className={this.state.portfolio.theme}>
							<Container className='portfolio-info'>
								<Modal className='my-portfolio-modal' show={this.state.modalShow}>
									{this.displayModal(this.state.modalId)}

									<button className='mini-link' onClick={() => this.handleModal(false)}>
										cerrar
									</button>
								</Modal>

								<section className='section-bkg'>
									<h2>
										{this.state.portfolio.owner.name} {this.state.portfolio.owner.lastName}
									</h2>
									<h6>
										{this.state.portfolio.owner.phone} <span className='bar'>|</span> {this.state.portfolio.owner.email}
									</h6>

									{!this.state.portfolio.socialMedia.length === 0 ? null : (
										<article className='social-section'>
											{this.state.portfolio.socialMedia.map((sm, idx) => (
												<>
													<a href={sm}>
														<p className='social-tag' key={idx}>
															{sm}
														</p>
													</a>
													<span className='bar'></span>
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
									)}
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
												<>
													<Link onClick={() => this.handleModal(true, work)}>
														<figure key={idx} className='work-tag'>
															<img src={work} alt='' />
														</figure>
													</Link>
												</>
											))}
										</article>
									</section>
								)}
							</Container>
						</div>
					)}
				</main>
			</>
		)
	}
}

export default One
