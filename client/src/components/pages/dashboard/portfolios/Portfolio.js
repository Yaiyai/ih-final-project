import React, { Component } from 'react'
import './Portfolio.css'

import CvServices from '../../../../service/cv.service'
import InfoServices from '../../../../service/info.service'
import PortfolioServices from '../../../../service/portfolio.service'

class PortfolioCreator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cv: '',
			education: '',
			experience: '',
			portfolio: '',
		}
		this.cvServices = new CvServices()
		this.infoServices = new InfoServices()
		this.portfolioServices = new PortfolioServices()
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
	}

	render() {
		return (
			<>
				<main className='portfolioCreator'>
					<section className='allElements'>
						<article className='selector'>
							{this.state.cv &&
								this.state.cv.whatIveDone.map((work, idx) => (
									<figure key={idx} className='selectorTag'>
										<img src={work} alt='' srcset='' />
									</figure>
								))}

							{this.state.cv &&
								this.state.cv.socialMedia.map((social, idx) => (
									<article key={idx} className='selectorTag'>
										<p>{social}</p>
									</article>
								))}

							{this.state.cv &&
								this.state.cv.skills.map((skill, idx) => (
									<article key={idx} className='selectorTag'>
										<p>{skill}</p>
									</article>
								))}

							{this.state.education &&
								this.state.education.map((ed, idx) => (
									<article key={idx} className='selectorTag'>
										<h6>{ed.place}</h6>
										<p>{ed.duration}</p>
										<p>{ed.experienceInfo}</p>
									</article>
								))}

							{this.state.experience &&
								this.state.experience.map((job, idx) => (
									<article key={idx} className='selectorTag'>
										<h6>{job.place}</h6>
										<p>{job.duration}</p>
										<p>{job.experienceInfo}</p>
									</article>
								))}
						</article>
						<article className='portfolioConstructor'>
							<article className='endContainer'>Arrastra redes</article>
							<article className='endContainer'>Arrastra skill</article>
							<article className='endContainer'>Arrastra trayectoria profesional</article>
							<article className='endContainer'>Arrastra educacion</article>
							<article className='endContainer'>Arrastra works</article>
						</article>
					</section>
				</main>
			</>
		)
	}
}

export default PortfolioCreator
