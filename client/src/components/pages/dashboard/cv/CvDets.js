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
			modalId: 'skills',
			modalShow: false,
			newSkill: '',
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
						<Form onSubmit={this.handleSkillSubmit}>
							<Form.Group>
								<Form.Label>Añadir Skill</Form.Label>
								<Form.Control onChange={this.handleSkill} type='text' placeholder='Añadir Skill' />
							</Form.Group>

							<Button className='myButton' type='submit'>
								Submit
							</Button>
						</Form>
					)
				case 'kike':
					return <h1>ola kike ke ase</h1>
			}
		}
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

	handleSkill = (e) => {
		let prueba = e.target.value

		this.setState({ newSkill: prueba })
	}

	handleSkillSubmit = (e) => {
		e.preventDefault()
		let skill = this.state.newSkill
		let skillsCopy = [...this.state.cv.skills, skill]

		this.setState(
			{
				cv: {
					...this.state.cv,
					skills: skillsCopy,
				},
			},
			() => {
				this.cvServices
					.editThisCv(this.id, this.state.cv)
					.then(() => this.handleModal(false))
					.catch((err) => new Error(err))
			}
		)
	}

	render() {
		return (
			<>
				<section className='cvPage'>
					<p>{this.state.cv.owner.name}</p>
					<p>{this.state.cv.title}</p>

					{this.state.cv.socialMedia.map((sm, idx) => (
						<p key={idx}>{sm}</p>
					))}

					{this.state.cv.skills.map((skill, idx) => (
						<p key={idx}>{skill}</p>
					))}

					<button onClick={() => this.handleModal(true, 'skills')} className='myButton'>
						Añadir Skill
					</button>

					<button onClick={() => this.handleModal(true, 'kike')} className='myButton'>
						Tal
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
				</section>
			</>
		)
	}
}

export default Cv
