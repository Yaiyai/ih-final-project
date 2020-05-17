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
			portfolio: {
				profile: '',
				education: '',
				experience: '',
				works: '',
			},
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

	dragStartWork = (e) => {
		const target = e.target
		e.dataTransfer.setData('card_id', target.id)

		setTimeout(() => {
			target.style.display = 'none'
			target.className = 'newAdd'
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
			target.className = 'newAdd'
			this.setState({
				portfolio: {
					...this.state.portfolio,
					profile: [...this.state.portfolio.profile, target.id],
				},
			})
		}, 0)
	}
	dragStartEducation = (e) => {
		const target = e.target
		e.dataTransfer.setData('card_id', target.id)

		setTimeout(() => {
			target.style.display = 'none'
			target.className = 'newAdd'
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
			target.className = 'newAdd'
			this.setState({
				portfolio: {
					...this.state.portfolio,
					experience: [...this.state.portfolio.experience, target.id],
				},
			})
		}, 0)
	}
	dragStartEducation = (e) => {
		const target = e.target
		e.dataTransfer.setData('card_id', target.id)

		setTimeout(() => {
			target.style.display = 'none'
			target.className = 'newAdd'
			this.setState({
				portfolio: {
					...this.state.portfolio,
					education: [...this.state.portfolio.education, target.id],
				},
			})
		}, 0)
	}

	dragOver = (e) => {
		e.stopPropagation()
    }
    
    createPortfolio = () => {
        
    }

	render() {
		return (
			<>
				<main className='portfolioCreator'>
					<section className='allElements'>
						<article className='selector'>
							{this.state.cv &&
								this.state.cv.whatIveDone.map((work, idx) => (
									<figure onDragStart={this.dragStartWork} onDragOver={this.dragOver} id={work} key={idx} draggable='true' className='selectorTag'>
										<img src={work} alt='' />
									</figure>
								))}

							{this.state.cv &&
								this.state.cv.socialMedia.map((social, idx) => (
									<article onDragStart={this.dragStartSkill} onDragOver={this.dragOver} id={social} draggable='true' key={idx} className='selectorTag'>
										<p>{social}</p>
									</article>
								))}

							{this.state.cv &&
								this.state.cv.skills.map((skill, idx) => (
									<article onDragStart={this.dragStartSkill} onDragOver={this.dragOver} id={skill} draggable='true' key={idx} className='selectorTag'>
										<p>{skill}</p>
									</article>
								))}

							{this.state.education &&
								this.state.education.map((ed, idx) => (
									<article onDragStart={this.dragStartEducation} onDragOver={this.dragOver} id={ed._id} draggable='true' key={idx} className='selectorTag'>
										<h6>{ed.place}</h6>
										<p>{ed.duration}</p>
										<p>{ed.experienceInfo}</p>
									</article>
								))}

							{this.state.experience &&
								this.state.experience.map((job, idx) => (
									<article onDragStart={this.dragStartJob} onDragOver={this.dragOver} id={job._id} draggable='true' key={idx} className='selectorTag'>
										<h6>{job.place}</h6>
										<p>{job.duration}</p>
										<p>{job.experienceInfo}</p>
									</article>
								))}
						</article>
						<article className='portfolioConstructor'>
							<article id='socialReceptor' onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer'>
								Arrastra redes
							</article>
							<article id='skillsReceptor' onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer'>
								Arrastra skill
							</article>
							<article id='jobsReceptor' onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer'>
								Arrastra trayectoria profesional
							</article>
							<article id='edsReceptor' onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer'>
								Arrastra educacion
							</article>
							<article id='worksReceptor' onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer'>
								Arrastra works
							</article>
						</article>
					</section>
				</main>
			</>
		)
	}
}

export default PortfolioCreator
