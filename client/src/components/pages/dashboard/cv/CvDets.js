import React, { Component } from 'react'

import CvServices from '../../../../service/cv.service'
import './CvDets.css'

class Cv extends Component {
	constructor(props) {
		super(props)
		this.state = {
			education: [],
			jobs: [],
			socialMedia: [],
			skills: [],
			whatIveDone: [],
			title: '',
			owner: '',
		}
		this.cvServices = new CvServices()
	}

	getMyCv() {
		const id = this.props.match.params.id

		this.cvServices
			.findThisCv(id)
			.then((response) => this.setState(response.data))
			.catch((err) => new Error(err))
	}

	componentDidMount = () => {
		this.getMyCv()
	}

	render() {
		return (
			<>
				<section className='cvPage'>
					<h1>{this.state.owner.name}</h1>
					<p>{this.state.title}</p>

					{this.state.skills.map((skill, idx) => (
						<p key={idx}>{skill}</p>
					))}

					<h4>Esxperiencia profesional</h4>
					{this.state.jobs.map((job, idx) => (
						<article key={idx}>
							<h5>{job.place}</h5>
							<h6>{job.duration}</h6>
							<h6>{job.experienceInfo}</h6>
						</article>
					))}

					<h4>Educación</h4>
					{this.state.education.map((educ, idx) => (
						<article key={idx}>
							<h5>{educ.place}</h5>
							<h6>{educ.duration}</h6>
							<h6>{educ.experienceInfo}</h6>
						</article>
					))}

					<h4>Links</h4>
					{this.state.socialMedia.map((sm, idx) => (
						<article key={idx}>
							<p>{sm}</p>
						</article>
					))}
					<h4>Mis trabajos</h4>
					{this.state.whatIveDone.map((work, idx) => (
						<img key={idx} src={work} alt='' />
					))}
				</section>
			</>
		)
	}
}

export default Cv
