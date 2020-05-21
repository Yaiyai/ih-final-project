import React, { Component } from 'react'
import './Portfolio.css'

import CvServices from '../../../../service/cv.service'
import InfoServices from '../../../../service/info.service'
import PortfolioServices from '../../../../service/portfolio.service'
import UrlServices from '../../../../service/url.service'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

class PortfolioCreator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalShow: false,
			modalId: '',
			cv: '',
			education: '',
			experience: '',
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
				template: '',
			},
		}
		this.cvServices = new CvServices()
		this.infoServices = new InfoServices()
		this.portfolioServices = new PortfolioServices()
		this.urlServices = new UrlServices()
	}
	getMyThings() {
		this.cvServices
			.findOne(this.props.loggedInDash._id)
			.then((response) => this.setState({ cv: response.data }))
			.then(() => this.infoServices.findJobs(this.state.cv._id))
			.then((jobs) => this.setState({ experience: jobs.data }))
			.then(() => this.infoServices.findEducations(this.state.cv._id))
			.then((educations) => this.setState({ education: educations.data }))
			.catch((err) => new Error(err))
	}

	componentDidMount() {
		this.getMyThings()
		this.handleModal(true, 'needed')
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ ...this.state, [name]: value })
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({
			portfolio: {
				...this.state.portfolio,
				title: this.state.portfolioTitle,
				companyName: this.state.companyName,
				url: `${this.props.loggedInDash.name}-for-${this.state.companyName}`,
			},
		})
		this.handleModal(true, 'pick')
	}

	//Drag and Drop Methods
	drop = (e) => {
		e.preventDefault()
		const tag = e.dataTransfer.getData('card_id')
		const card = document.getElementById(tag)

		card.style.display = 'block'
		e.target.appendChild(card)
	}

	dragOverReceptor = (e) => {
		e.preventDefault()
	}

	dragStartAvatar = (e) => {
		const target = e.target
		e.dataTransfer.setData('card_id', target.id)

		setTimeout(() => {
			target.style.display = 'none'
			target.className = 'newAvatar'
			this.setState({
				portfolio: {
					...this.state.portfolio,
					avatar: target.id,
				},
			})
		}, 0)
	}

	dragStartWork = (e) => {
		const target = e.target
		e.dataTransfer.setData('card_id', target.id)

		setTimeout(() => {
			target.style.display = 'none'
			target.className = 'new-add'
			this.setState({
				portfolio: {
					...this.state.portfolio,
					works: [...this.state.portfolio.works, target.id],
				},
			})
		}, 0)
	}

	dragStartSkill = (e) => {
		const target = e.target
		e.dataTransfer.setData('card_id', target.id)

		setTimeout(() => {
			target.style.display = 'none'
			target.className = 'new-add'
			this.setState({
				portfolio: {
					...this.state.portfolio,
					skills: [...this.state.portfolio.skills, target.id],
				},
			})
		}, 0)
	}

	dragStartSocial = (e) => {
		const target = e.target
		e.dataTransfer.setData('card_id', target.id)

		setTimeout(() => {
			target.style.display = 'none'
			target.className = 'new-add'
			this.setState({
				portfolio: {
					...this.state.portfolio,
					socialMedia: [...this.state.portfolio.socialMedia, target.id],
				},
			})
		}, 0)
	}

	dragStartEducation = (e) => {
		const target = e.target
		e.dataTransfer.setData('card_id', target.id)

		setTimeout(() => {
			target.style.display = 'none'
			target.className = 'new-add'
			this.setState({
				portfolio: {
					...this.state.portfolio,
					education: [...this.state.portfolio.education, target.id],
				},
			})
		}, 0)
	}
	dragStartJob = (e) => {
		const target = e.target
		e.dataTransfer.setData('card_id', target.id)

		setTimeout(() => {
			target.style.display = 'none'
			target.className = 'new-add'
			this.setState({
				portfolio: {
					...this.state.portfolio,
					experience: [...this.state.portfolio.experience, target.id],
				},
			})
		}, 0)
	}

	dragOver = (e) => {
		e.stopPropagation()
	}

	handleModal = (visible, modalId) => this.setState({ modalShow: visible, modalId: modalId })

	displayModal = (modalId) => {
		if (this.state.modalShow) {
			switch (modalId) {
				case 'needed':
					return (
						<>
							<h3>¡Importante!</h3>
							<p>
								Es <strong>muy importante</strong> que introduzcas un título para tu portfolio y la empresa a la que lo vas a enviar, porque el link que les enviarás depende de estos datos.
							</p>
							<Form onSubmit={this.handleSubmit}>
								<Form.Label className='form-label'>Introduce el título de tu portfolio</Form.Label>
								<Form.Control name='portfolioTitle' onChange={this.handleChange} className='form-input' type='text' placeholder='Título' required />

								<Form.Label className='form-label'>Empresa a la que le vas a enviar el portfolio</Form.Label>
								<Form.Control name='companyName' onChange={this.handleChange} className='form-input' type='text' placeholder='Empresa' required />
								<button type='submit' className='form-button'>
									guardar datos
								</button>
							</Form>
						</>
					)
				case 'pick':
					return (
						<>
							<p>Elige la template que más te guste. Una vez le des al botón "Crear Portfolio", todos los datos que hayas añadido, serán ordenados en la template elegida.
							</p>

							<button className='my-button' onClick={() => this.setPortfolio('t1')}>
								Template 1
							</button>
							<button className='my-button' onClick={() => this.setPortfolio('t2')}>
								Template 2
							</button>
							<button className='my-button' onClick={() => this.setPortfolio('t3')}>
								Template 3
							</button>
						</>
					)
				default:
					return <h1>Bug!</h1>
			}
		}
	}

	setPortfolio = (template) => {
		switch (template) {
			case 't1':
				this.setState({ ...this.state, portfolio: { ...this.state.portfolio, template: 't1' } }, () => this.handleModal(false))
				break
			case 't2':
				this.setState({ ...this.state, portfolio: { ...this.state.portfolio, template: 't2' } }, () => this.handleModal(false))
				break
			case 't3':
				this.setState({ ...this.state, portfolio: { ...this.state.portfolio, template: 't3' } }, () => this.handleModal(false))
				break
		}
	}

	//Saving changes
	createPortfolio = () => {
		this.portfolioServices
			.createNew(this.props.loggedInDash._id, this.state.portfolio)
			.then((response) => this.props.history.push(`/sharing/${response.data.template}/${response.data.url}`))
			.catch((err) => new Error(err))
	}

	render() {
		return (
			<>
				<main className='portfolio-creator'>
					<button className='my-button special-button' onClick={() => this.createPortfolio()}>
						Crear Portfolio
					</button>

					<Modal className='my-modal' show={this.state.modalShow}>
						{this.displayModal(this.state.modalId)}

						{/* <button className='mini-link' onClick={() => this.handleModal(false)}>
							cerrar
						</button> */}
						<button className='mini-link' onClick={() => this.props.history.push('/dashboard')}>
							cerrar
						</button>
					</Modal>

					<section className='instructions'>
						<h4>¡Bienvenid@ a tu generador de portfolios!</h4>
						<h6>¿Cómo generar un portfolio? ¡Muy fácil!</h6>
						<p>
							A la izquierda encontrarás un selector con todos los elementos que has añadido en la sección "Experiencia"*. Simplemente tendrás que arrastrar cada elemento al área preparada para ello.
							No te preocupes si no lo ves como te gustaría. Una vez que des al botón "Crear portfolio", todo se ordenará dentro de la plantilla que has elegido.<br></br>
							<small>
								<em>*Si te falta alguno, te recomendamos que vuelvas a esa sección para añadirlos.</em>
							</small>
						</p>
					</section>

					<section className='all-elements'>
						<article className='selector'>
							<h6 className='section-title'>Mis trabajos</h6>
							{this.state.cv &&
								this.state.cv.whatIveDone.map((work, idx) => (
									<figure onDragStart={this.dragStartWork} onDragOver={this.dragOver} id={work} key={idx} draggable='true' className='selector-tag'>
										<img draggable='false' src={work} alt='' />
									</figure>
								))}
							<h6 className='section-title'>Mis Redes Sociales</h6>
							{this.state.cv &&
								this.state.cv.socialMedia.map((social, idx) => (
									<article onDragStart={this.dragStartSocial} onDragOver={this.dragOver} id={social} draggable='true' key={idx} className='selector-tag'>
										<p>{social}</p>
									</article>
								))}
							<h6 className='section-title'>Mis Skills</h6>
							{this.state.cv &&
								this.state.cv.skills.map((skill, idx) => (
									<article onDragStart={this.dragStartSkill} onDragOver={this.dragOver} id={skill} draggable='true' key={idx} className='selector-tag'>
										<p>{skill}</p>
									</article>
								))}
							<h6 className='section-title'>Mi Educación</h6>
							{this.state.education &&
								this.state.education.map((ed, idx) => (
									<article onDragStart={this.dragStartEducation} onDragOver={this.dragOver} id={ed._id} draggable='true' key={idx} className='selector-tag'>
										<h6>{ed.place}</h6>
										<p>{ed.duration}</p>
										<p>{ed.experienceInfo}</p>
									</article>
								))}
							<h6 className='section-title'>Mi Experiencia</h6>
							{this.state.experience &&
								this.state.experience.map((job, idx) => (
									<article onDragStart={this.dragStartJob} onDragOver={this.dragOver} id={job._id} draggable='true' key={idx} className='selector-tag'>
										<h6>{job.place}</h6>
										<p>{job.duration}</p>
										<p>{job.experienceInfo}</p>
									</article>
								))}
						</article>
						<article className='portfolio-constructor'>
							<article className='portfolio-info'>
								{this.state.portfolio.title && <p>Título: {this.state.portfolio.title}</p>}
								{this.state.portfolio.companyName && <p>Empresa: {this.state.portfolio.companyName}</p>}
							</article>
							<article className='owner-data'>
								{this.props.loggedInDash && (
									<>
										<h2>
											{this.props.loggedInDash.name} {this.props.loggedInDash.lastName}
										</h2>
										<h6>
											{this.props.loggedInDash.phone} <span className='bar'>|</span> {this.props.loggedInDash.email}
										</h6>
									</>
								)}
							</article>
							<article className='portfolio-content'>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='end-container social-receptor'></article>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='end-container skill-receptor'></article>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='end-container ed-receptor'></article>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='end-container job-receptor'></article>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='end-container work-receptor'></article>
							</article>
						</article>
					</section>
				</main>
			</>
		)
	}
}

export default PortfolioCreator
