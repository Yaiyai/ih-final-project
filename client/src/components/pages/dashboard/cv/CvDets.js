import React, { Component } from 'react'

import CvServices from '../../../../service/cv.service'
import InfoServices from '../../../../service/info.service'
import './CvDets.css'

class Cv extends Component {
	constructor(props) {
		super(props)
		this.state = {
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

	render() {
		return (
			<>
				<section className='cvPage'>
					<p>{this.state.cv.owner.name}</p>
					<p>{this.state.cv.title}</p>

					{this.state.cv.skills.map((skill, idx) => (
						<p key={idx}>{skill}</p>
					))}

					{/* {this.state.eds && console.log(this.state.eds.place)} */}
					{this.state.eds &&
						this.state.eds.map((ed, idx) => (
							<article key={idx}>
								<h6>{ed.place}</h6>
								<p>{ed.duration}</p>
								<p>{ed.experienceInfo}</p>
							</article>
						)) }
					
							

					{this.state.experience &&
						this.state.experience.map((job, idx) => (
							<article key={idx}>
								<h6>{job.place}</h6>
								<p>{job.duration}</p>
								<p>{job.experienceInfo}</p>
							</article>
						)) }
					
					{ this.state.cv.whatIveDone.map((work, idx) => 
						<img key={idx} src={work}/>
					) }
				</section>
			</>
		)
	}
}

export default Cv
