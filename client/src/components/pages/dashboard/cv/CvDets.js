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
						<Form onSubmit={this.handleClose}>
							<Form.Group>
								<Form.Label>Añadir Skill</Form.Label>
								<Form.Control name='newSkill' onChange={this.handleChange} type='text' placeholder='Añadir Skill' />
							</Form.Group>

							<Button className='myButton' type='submit'>
								Submit
							</Button>
						</Form>
					)
				case 'social':
					return (
						<Form onSubmit={this.handleClose}>
							<Form.Group>
								<Form.Label>Añadir Red Social</Form.Label>
								<Form.Control name='newSocial' onChange={this.handleChange} type='text' placeholder='Añadir Red Social' />
							</Form.Group>

							<Button className='myButton' type='submit'>
								Submit
							</Button>
						</Form>
					)
				case 'title':
					return (
						<Form onSubmit={this.handleClose}>
							<Form.Group>
								<Form.Label>Cambiar título a tu Cv</Form.Label>
								<Form.Control name='newTitle' onChange={this.handleChange} type='text' placeholder='Pon un titulo nuevo a tu Cv' />
							</Form.Group>

							<Button className='myButton' type='submit'>
								Submit
							</Button>
						</Form>
					)
				case 'works':
					return (
						<>
							<input name='newWork' type='file' onChange={this.handleUpload} />
						</>
					)
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
			}
			// () => {
			// 	this.cvServices
			// 		.editThisCv(this.id, this.state.cv)
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

					<Modal show={this.state.modalShow}>
						{this.displayModal(this.state.modalId)}

						<button onClick={() => this.handleModal(false)}>cerrar</button>
					</Modal>

					{this.state.eds &&
						this.state.eds.map((ed, idx) => (
							<article key={idx}>
								<h6>{ed.place}</h6>
								<p>{ed.duration}</p>
								<p>{ed.experienceInfo}</p>
							</article>
						))}

					{this.state.experience &&
						this.state.experience.map((job, idx) => (
							<article key={idx}>
								<h6>{job.place}</h6>
								<p>{job.duration}</p>
								<p>{job.experienceInfo}</p>
							</article>
						))}

					{this.state.cv.whatIveDone.map((work, idx) => (
						<img key={idx} src={work} />
					))}
					<button onClick={() => this.handleModal(true, 'works')} className='myButton'>
						Añadir Trabajos
					</button>
				</section>
			</>
		)
	}
}

export default Cv
