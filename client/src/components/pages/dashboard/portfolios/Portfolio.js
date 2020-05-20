import React, { Component } from 'react'
import './Portfolio.css'

import CvServices from '../../../../service/cv.service'
import InfoServices from '../../../../service/info.service'
import PortfolioServices from '../../../../service/portfolio.service'
import UrlServices from '../../../../service/url.service'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

class PortfolioCreator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalShow: false,
			cv: '',
			education: '',
			experience: '',
			portfolio: {
				title: '',
				skills: [],
				socialMedia: [],
				companyName: 'prueba',
				companyAvatar: '',
				education: [],
				experience: [],
				works: [],
				avatar: '',
				url: '',
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
		this.handleModal(true)
	}

	handleModal = (visible) => this.setState({ modalShow: visible })

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
		this.handleModal(false)
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

	//Saving changes
	createPortfolio = () => {
		this.portfolioServices
			.createNew(this.props.loggedInDash._id, this.state.portfolio)
			.then((response) => this.props.history.push(`/sharing/${response.data.url}`))
			.catch((err) => new Error(err))
	}

	render() {
		return (
			<>
				<main className='portfolio-creator'>
					<button className='my-button' onClick={this.createPortfolio}>
						Crear Portfolio
					</button>

					<Modal className='my-modal' show={this.state.modalShow}>
						<h3>¡Importante!</h3>
						<p>Es muy importante que introduzcas un título para tu portfolio y la empresa a la que lo vas a enviar, porque el link que les enviarás depende de estos datos.</p>
						<Form onSubmit={this.handleSubmit}>
							<Form.Label className='form-label'>Introduce el título de tu portfolio</Form.Label>
							<Form.Control name='portfolioTitle' onChange={this.handleChange} className='form-input' type='text' placeholder='Título' required />

							<Form.Label className='form-label'>Empresa a la que le vas a enviar el portfolio</Form.Label>
							<Form.Control name='companyName' onChange={this.handleChange} className='form-input' type='text' placeholder='Empresa' required />
							<button type='submit' className='form-button'>
								guardar datos
							</button>
						</Form>
						<button className='mini-link' onClick={() => this.handleModal(false)}>
							cerrar
						</button>
						{/* <button className='mini-link' onClick={() => this.props.history.push('/dashboard')}>
							cerrar
						</button> */}
					</Modal>

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
							<h6 className='section-title'>Mi Eduacación</h6>
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
