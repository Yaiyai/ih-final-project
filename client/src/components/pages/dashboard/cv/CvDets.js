import React, { Component } from 'react'

import CvServices from '../../../../service/cv.service'
import InfoServices from '../../../../service/info.service'
import './CvDets.css'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Cv extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalShow: false,
			modalId: '',
			cv: {
				socialMedia: [],
				skills: [],
				whatIveDone: [],
				title: '',
				owner: '',
			},
			experience: [],
			eds: [],
			edInfo: {},
			jobInfo: {},
		}
		this.cvServices = new CvServices()
		this.infoServices = new InfoServices()
		this.id = this.props.match.params.id
	}

	handleModal = (visible, modalId) => this.setState({ modalShow: visible, modalId: modalId })

	displayModal = (modalId) => {
		if (this.state.modalShow) {
			switch (modalId) {
				case 'skills':
					return (
						<Form className='myForm' onSubmit={this.handleClose}>
							<Form.Label className='form-label'>Añadir Skill</Form.Label>
							<Form.Control className='form-input' name='newSkill' onChange={this.handleChange} type='text' placeholder='Añadir Skill' />
							<Button className='form-button' type='submit'>
								Añadir
							</Button>
						</Form>
					)
				case 'social':
					return (
						<Form className='myForm' onSubmit={this.handleClose}>
							<Form.Group>
								<Form.Label className='form-label'>Añadir Red Social</Form.Label>
								<Form.Control className='form-input' name='newSocial' onChange={this.handleChange} type='text' placeholder='Añadir Red Social' />
							</Form.Group>

							<Button className='form-button' type='submit'>
								Añadir
							</Button>
						</Form>
					)
				case 'title':
					return (
						<Form className='myForm' onSubmit={this.handleClose}>
							<Form.Group>
								<Form.Label className='form-label'>Cambiar título a tu Cv</Form.Label>
								<Form.Control className='form-input' name='newTitle' onChange={this.handleChange} type='text' placeholder='Pon un titulo nuevo a tu Cv' />
							</Form.Group>

							<Button className='form-button' type='submit'>
								Añadir
							</Button>
						</Form>
					)
				case 'works':
					return (
						<>
							<input className='form-upload' name='newWork' type='file' onChange={this.handleUpload} />
						</>
					)
				case 'education':
					return (
						<Form className='myForm' onSubmit={this.handleClose}>
							<Form.Group>
								<Form.Label className='form-label'>Lugar de estudios</Form.Label>
								<Form.Control className='form-input' name='place' onChange={this.handleEducationChange} type='text' placeholder='Lugar de estudios' />
							</Form.Group>
							<Form.Group>
								<Form.Label className='form-label'>Duración</Form.Label>
								<Form.Control className='form-input' name='duration' onChange={this.handleEducationChange} type='text' placeholder='Pon un titulo nuevo a tu Cv' />
							</Form.Group>
							<Form.Group>
								<Form.Label>¿Qué aprendiste?</Form.Label>
								<Form.Control className='form-input' name='experienceInfo' onChange={this.handleEducationChange} type='text' placeholder='Pon un titulo nuevo a tu Cv' />
							</Form.Group>

							<Button className='form-button' type='submit'>
								Añadir
							</Button>
						</Form>
					)
				case 'job':
					return (
						<Form className='myForm' onSubmit={this.handleClose}>
							<Form.Group>
								<Form.Label className='form-label'>Puesto en la empresa</Form.Label>
								<Form.Control className='form-input' name='place' onChange={this.handleJobChange} type='text' placeholder='Lugar de estudios' />
							</Form.Group>
							<Form.Group>
								<Form.Label className='form-label'>Duración</Form.Label>
								<Form.Control className='form-input' name='duration' onChange={this.handleJobChange} type='text' placeholder='Pon un titulo nuevo a tu Cv' />
							</Form.Group>
							<Form.Group>
								<Form.Label className='form-label'>Cuéntanos tus tareas</Form.Label>
								<Form.Control className='form-input' name='experienceInfo' onChange={this.handleJobChange} type='text' placeholder='Pon un titulo nuevo a tu Cv' />
							</Form.Group>

							<Button className='form-button' type='submit'>
								Añadir
							</Button>
						</Form>
					)
				default:
					return <h1>Holi</h1>
			}
		}
	}

	fileChangedHandler = (event) => {
		this.setState({ newWork: event.target.files[0] })
	}

	handleUpload = (e) => {
		const uploadData = new FormData()
		uploadData.append('newWork', e.target.files[0])
		console.log(e.target.files[0])
		this.cvServices
			.upload(uploadData)
			.then((response) => this.setState({ ...this.state, newWork: response.data.secure_url }))
			.catch((error) => console.error(error))
	}
	getMyCv() {
		this.cvServices
			.findThisCv(this.id)
			.then((response) => this.setState({ cv: response.data }))
			.catch((err) => new Error(err))
	}

	getMyJobs() {
		this.infoServices
			.findJobs(this.id)
			.then((response) => this.setState({ experience: response.data }))
			.catch((err) => new Error(err))
	}

	getMyEducations() {
		this.infoServices
			.findEducations(this.id)
			.then((response) => {
				this.setState({ eds: response.data })
			})
			.catch((err) => new Error(err))
	}

	componentDidMount = () => {
		this.getMyCv()
		this.getMyJobs()
		this.getMyEducations()
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ ...this.state, [name]: value })
	}

	handleEducationChange = (e) => {
		let infoCopy = { ...this.state.edInfo }
		const { name, value } = e.target
		infoCopy = { ...infoCopy, [name]: value }
		console.log(infoCopy)
		this.setState({ edInfo: infoCopy })
	}

	handleJobChange = (e) => {
		let jobCopy = { ...this.state.jobInfo }
		const { name, value } = e.target
		jobCopy = { ...jobCopy, [name]: value }
		console.log(jobCopy)
		this.setState({ jobInfo: jobCopy })
	}

	handleClose = (e) => {
		this.handleModal(false)
	}

	handleCv = (e) => {
		e.preventDefault()

		this.setState(
			{
				cv: {
					...this.state.cv,
					skills: [...this.state.cv.skills, this.state.newSkill],
					socialMedia: [...this.state.cv.socialMedia, this.state.newSocial],
					whatIveDone: [...this.state.cv.whatIveDone, this.state.newWork],
					title: this.state.newTitle,
				},
				eds: [...this.state.eds, this.state.edInfo],
				experience: [...this.state.experience, this.state.jobInfo],
			}
			// () => {
			// 	let educationPromise = this.infoServices.createEducation(this.id, this.state.edInfo)
			// 	let jobPromise = this.infoServices.createJob(this.id, this.state.jobInfo)
			// 	let cvPromise = this.cvServices.editThisCv(this.id, this.state.cv)
			// 	Promise.all([educationPromise, jobPromise, cvPromise])
			// 		.then(() => this.handleModal(false))
			// 		.catch((err) => new Error(err))
			// }
		)
	}

	render() {
		return (
			<>
				<section className='cvPage'>
					<p>{this.state.cv.owner.name}</p>
					<p>{this.state.cv.title}</p>

					<button onClick={() => this.handleModal(true, 'title')} className='myButton'>
						Editar título
					</button>
					{this.state.cv.socialMedia.map((sm, idx) => (
						<p key={idx}>{sm}</p>
					))}
					<button onClick={() => this.handleModal(true, 'social')} className='myButton'>
						Añadir Red Social
					</button>

					{this.state.cv.skills.map((skill, idx) => (
						<p key={idx}>{skill}</p>
					))}

					<button onClick={() => this.handleModal(true, 'skills')} className='myButton'>
						Añadir Skill
					</button>

					<button onClick={this.handleCv} className='myButton'>
						Guardar Cambios
					</button>

					{this.state.eds &&
						this.state.eds.map((ed, idx) => (
							<article key={idx}>
								<h6>{ed.place}</h6>
								<p>{ed.duration}</p>
								<p>{ed.experienceInfo}</p>
							</article>
						))}

					<button onClick={() => this.handleModal(true, 'education')} className='myButton'>
						Añadir Educación
					</button>

					{this.state.experience &&
						this.state.experience.map((job, idx) => (
							<article key={idx}>
								<h6>{job.place}</h6>
								<p>{job.duration}</p>
								<p>{job.experienceInfo}</p>
							</article>
						))}
					<button onClick={() => this.handleModal(true, 'job')} className='myButton'>
						Añadir Experiencia
					</button>

					{this.state.cv.whatIveDone.map((work, idx) => (
						<img key={idx} src={work} />
					))}
					<button onClick={() => this.handleModal(true, 'works')} className='myButton'>
						Añadir Trabajos
					</button>
					<Modal className='myModal' show={this.state.modalShow}>
						{this.displayModal(this.state.modalId)}

						<button className='mini-link' onClick={() => this.handleModal(false)}>
							cerrar
						</button>
					</Modal>
				</section>
			</>
		)
	}
}

export default Cv
