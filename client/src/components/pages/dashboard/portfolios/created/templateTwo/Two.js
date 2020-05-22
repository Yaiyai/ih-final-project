import React, { Component } from 'react'
import UrlServices from './../../../../../../service/url.service'
import HomeNav from '../../../../../ui/homeNav/HomeNav'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

import './Two.css'
import { Link } from 'react-router-dom'

class Two extends Component {
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
				<main className='portfolio-two'>
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

								<section className='owner'>
									{this.state.portfolio.avatar && (
										<figure className='owner-avatar'>
											<img src={this.state.portfolio.avatar} alt='owner' />
										</figure>
									)}
									<article className='owner-info'>
										<h6>
											¡Hola <span className='pink'>{this.state.portfolio.companyName}</span>!
										</h6>
										<h2 className='owner-name'>
											Soy{' '}
											<span className='pink'>
												{this.state.portfolio.owner.name} {this.state.portfolio.owner.lastName}
											</span>
										</h2>
										<h6>Puedes contactar conmigo así</h6>
										<article className='social-media'>
											<div>
												<div className='sm'>
													<figure>
														<img src='/imgs/portfolio/ic-phone.svg' alt='' />
													</figure>
													<p>{this.state.portfolio.owner.phone}</p>
												</div>
												<div className='sm'>
													<figure>
														<img src='/imgs/portfolio/ic-email.svg' alt='' />
													</figure>
													<p>{this.state.portfolio.owner.email}</p>
												</div>
											</div>
										</article>
									</article>
									</section>
									
								{this.state.portfolio.socialMedia.length === 0 ? null : (
									<section className='section-bkg skills'>
										<h6>mis redes sociales</h6>
										<article className='skill-section'>
											{this.state.portfolio.socialMedia.map((social, idx) => (
												<p key={idx} className='skill-tag'>
													{social}
												</p>
											))}
										</article>
									</section>
									) }
									
								{this.state.portfolio.skills.length === 0 ? null : (
									<section className='section-bkg skills'>
										<h6>me especializo en</h6>
										<article className='skill-section'>
											{this.state.portfolio.skills.map((skill, idx) => (
												<p key={idx} className='skill-tag'>
													{skill}
												</p>
											))}
										</article>
									</section>
								)}

								<section className='life-experience'>
									{this.state.portfolio.education.length === 0 ? null : (
										<article className='section-bkg education'>
											<h6>mi educación</h6>
											{this.state.portfolio.education.map((ed, idx) => (
												<article key={idx}>
													<p className='place'>{ed.place}</p>
													<small className='duration'>{ed.duration}</small>
													<p className='experience-text'>{ed.experienceInfo}</p>
												</article>
											))}
										</article>
									)}
									{this.state.portfolio.experience.length === 0 ? null : (
										<article className='section-bkg experience'>
											<h6>mi experiencia</h6>

											{this.state.portfolio.experience.map((job, idx) => (
												<article key={idx}>
													<p className='place'>{job.place}</p>
													<small className='duration'>{job.duration}</small>
													<p className='experience-text'>{job.experienceInfo}</p>
												</article>
											))}
										</article>
									)}
								</section>
								{this.state.portfolio.works.length === 0 ? null : (
									<section className='section-bkg works'>
										<h6>mis trabajos</h6>
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

export default Two
