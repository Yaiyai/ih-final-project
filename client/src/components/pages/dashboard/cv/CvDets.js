import React, { Component } from 'react'

import CvServices from '../../../../service/cv.service'
import InfoServices from '../../../../service/info.service'
import './CvDets.css'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

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

	handleModal = (visible, modalId) => this.setState({ modalShow: visible, modalId: modalId })

	displayModal = (modalId) => {
		if (this.state.modalShow) {
			switch (modalId) {
				case 'skills':
					return (
						<Form className='myForm' onSubmit={this.skillSubmit}>
							<Form.Label className='form-label'>Añadir Skill</Form.Label>
							<Form.Control className='form-input' name='newSkill' onChange={this.handleSkill} type='text' placeholder='Añadir Skill' />
							<Button className='form-button' type='submit'>
								Añadir
							</Button>
						</Form>
					)
				case 'social':
					return (
						<Form className='myForm' onSubmit={this.socialSubmit}>
							<Form.Group>
								<Form.Label className='form-label'>Añadir Red Social</Form.Label>
								<Form.Control className='form-input' name='newSocial' onChange={this.handleSocial} type='text' placeholder='Añadir Red Social' />
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
						<Form className='myForm' onSubmit={this.edSubmit}>
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
						<Form className='myForm' onSubmit={this.jobSubmit}>
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
					return <h1>¡Bug!</h1>
			}
		}
	}

	handleUpload = (e) => {
		const uploadData = new FormData()
		uploadData.append('newWork', e.target.files[0])
		console.log(e.target.files[0])
		this.cvServices
			.upload(uploadData)
			.then((response) => this.setState({ ...this.state, newWork: response.data.secure_url }))
			.then(() =>
				this.setState({
					cv: {
						...this.state.cv,
						whatIveDone: [...this.state.cv.whatIveDone, this.state.newWork],
					},
				})
			)
			.catch((error) => console.error(error))
	}

	handleSkill = (e) => {
		const { name, value } = e.target
		this.setState({ ...this.state, [name]: value })
	}

	skillSubmit = (e) => {
		e.preventDefault()

		this.setState({ cv: { ...this.state.cv, skills: [...this.state.cv.skills, this.state.newSkill] } }, () => this.handleModal(false))
	}

	handleSocial = (e) => {
		const { name, value } = e.target
		this.setState({ ...this.state, [name]: value })
	}

	socialSubmit = (e) => {
		e.preventDefault()

		this.setState({ cv: { ...this.state.cv, socialMedia: [...this.state.cv.socialMedia, this.state.newSocial] } }, () => this.handleModal(false))
	}

	handleEducationChange = (e) => {
		let edCopy = { ...this.state.edInfo }
		const { name, value } = e.target
		edCopy = { ...edCopy, [name]: value }
		this.setState({ edInfo: edCopy })
	}

	edSubmit = (e) => {
		e.preventDefault()
		this.infoServices
			.createEducation(this.id, this.state.edInfo)
			.then(() => this.setState({ eds: [...this.state.eds, this.state.edInfo] }))
			.then(() => this.handleModal(false))
			.catch((err) => new Error(err))
	}

	handleJobChange = (e) => {
		let jobCopy = { ...this.state.jobInfo }
		const { name, value } = e.target
		jobCopy = { ...jobCopy, [name]: value }

		this.setState({ jobInfo: jobCopy })
	}
	jobSubmit = (e) => {
		e.preventDefault()
		console.log(this.state.jobInfo)
		this.infoServices
			.createJob(this.id, this.state.jobInfo)
			.then(() => this.setState({ experience: [...this.state.experience, this.state.jobInfo] }))
			.then(() => this.handleModal(false))
			.catch((err) => new Error(err))
	}

	handleClose = (e) => {
		this.handleModal(false)
	}

	//removing elements

	removeSkill = (idx) => {
		let skillsCopy = [...this.state.cv.skills]
		skillsCopy.splice(idx, 1)
		this.setState({ cv: { ...this.state.cv, skills: skillsCopy } })
	}

	removeSocial = (idx) => {
		let socialCopy = [...this.state.cv.socialMedia]
		socialCopy.splice(idx, 1)
		this.setState({ cv: { ...this.state.cv, socialMedia: socialCopy } })
	}
	removeWork = (idx) => {
		let worksCopy = [...this.state.cv.whatIveDone]
		worksCopy.splice(idx, 1)
		this.setState({ cv: { ...this.state.cv, whatIveDone: worksCopy } })
	}
	removeEducation = (idx, id) => {
		this.infoServices
			.deleteInfo(id)
			.then(() => {
				let educationCopy = [...this.state.eds]
				educationCopy.splice(idx, 1)
				this.setState({ ...this.state, eds: educationCopy })
			})
			.catch((err) => new Error(err))
	}

	removeJob = (idx, id) => {
		this.infoServices
			.deleteInfo(id)
			.then(() => {
				let jobsCopy = [...this.state.experience]
				jobsCopy.splice(idx, 1)
				this.setState({ ...this.state, experience: jobsCopy })
			})
			.catch((err) => new Error(err))
	}

	//send all changes to the DB

	handleCv = (e) => {
		e.preventDefault()
		this.cvServices
			.editThisCv(this.id, this.state.cv)
			.then(() => this.handleModal(false))
			.catch((err) => new Error(err))
	}

	render() {
		return (
			<>
				<section className='cvPage'>
					{this.state.cv.owner && <h2>¡Hola {this.state.cv.owner.name}!</h2>}
					<h6>Aquí puedes añadir y editar los elementos de tu CV</h6>

					<section className='everySection'>
						<article className='sectionHead'>
							<h4>My skills</h4>
							<button onClick={() => this.handleModal(true, 'skills')} className='myButton mini outlined'>
								Añadir
							</button>
						</article>
						<Row className='skillSection' as='article'>
							{this.state.cv.skills.map((skill, idx) => (
								<article key={idx} className='skillTag'>
									<p>{skill}</p>
									<Button onClick={() => this.removeSkill(idx)} className='myButton mini outlined'>
										Borrar
									</Button>
								</article>
							))}
						</Row>
					</section>

					<section className='everySection'>
						<article className='sectionHead'>
							<h4>Mis redes Sociales</h4>
							<button onClick={() => this.handleModal(true, 'social')} className='myButton mini outlined'>
								Añadir
							</button>
						</article>
						<Row className='socialSection' as='article'>
							{this.state.cv.socialMedia.map((sm, idx) => (
								<article key={idx} className='socialTag'>
									<p>{sm}</p>
									<Button onClick={() => this.removeSocial(idx)} className='myButton mini outlined'>
										Borrar
									</Button>
								</article>
							))}
						</Row>
					</section>

					<section className='everySection'>
						<article className='sectionHead'>
							<h4>Educación</h4>
							<button onClick={() => this.handleModal(true, 'education')} className='myButton mini outlined'>
								Añadir
							</button>
						</article>
						<Row as='article' className='infoSection'>
							{this.state.eds &&
								this.state.eds.map((ed, idx) => (
									<article className='infoTag' key={idx}>
										<h6>{ed.place}</h6>
										<p>{ed.duration}</p>
										<p>{ed.experienceInfo}</p>
										<Button onClick={() => this.removeEducation(idx, ed._id)} className='myButton mini outlined'>
											Borrar
										</Button>
									</article>
								))}
						</Row>
					</section>

					<section className='everySection'>
						<article className='sectionHead'>
							<h4>Experiencia laboral</h4>
							<button onClick={() => this.handleModal(true, 'job')} className='myButton mini outlined'>
								Añadir
							</button>
						</article>
						<Row as='article' className='infoSection'>
							{this.state.experience &&
								this.state.experience.map((job, idx) => (
									<article className='infoTag' key={idx}>
										<h6>{job.place}</h6>
										<p>{job.duration}</p>
										<p>{job.experienceInfo}</p>
										<Button onClick={() => this.removeJob(idx, job._id)} className='myButton mini outlined'>
											Borrar
										</Button>
									</article>
								))}
						</Row>
					</section>

					<section className='everySection'>
						<article className='sectionHead'>
							<h4>Mis trabajos</h4>
							<button onClick={() => this.handleModal(true, 'works')} className='myButton mini outlined'>
								Añadir
							</button>
						</article>
						<Row as='article' className='workSection'>
							{this.state.cv.whatIveDone.map((work, idx) => (
								<article key={idx} className='workTag'>
									<figure className='workImage'>
										<img key={idx} src={work} alt='' />
									</figure>
									<Button onClick={() => this.removeWork(idx)} className='myButton mini outlined'>
										Borrar
									</Button>
								</article>
							))}
						</Row>
					</section>

					<button onClick={this.handleCv} className='myButton'>
						Guardar Cambios
					</button>

					<Modal className='myModal' show={this.state.modalShow} onHide={() => this.handleModal(false)}>
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
