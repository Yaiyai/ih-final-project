import React, { Component } from 'react'
import './Portfolio.css'

import CvServices from '../../../../service/cv.service'
import InfoServices from '../../../../service/info.service'
import PortfolioServices from '../../../../service/portfolio.service'
import UrlServices from '../../../../service/url.service'

class PortfolioCreator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cv: '',
			education: '',
			experience: '',
			portfolio: {
				profile: [],
				education: [],
				experience: [],
				works: [],
				avatar: '',
				url: 'cuidao-que-molo',
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
	// dragStartEducation = (e) => {
	// 	const target = e.target
	// 	e.dataTransfer.setData('card_id', target.id)

	// 	setTimeout(() => {
	// 		target.style.display = 'none'
	// 		target.className = 'newAdd'
	// 		this.setState({
	// 			portfolio: {
	// 				...this.state.portfolio,
	// 				education: [...this.state.portfolio.education, target.id],
	// 			},
	// 		})
	// 	}, 0)
	// }

	dragOver = (e) => {
		e.stopPropagation()
	}

	createPortfolio = () => {
		this.portfolioServices
			.createNew(this.props.loggedInDash._id, this.state.portfolio)
			.then((response) => this.props.history.push(`/sharing/${response.data.url}`))
			.catch((err) => new Error(err))
	}

	render() {
		return (
			<>
				<main className='portfolioCreator'>
					<button className='myButton' onClick={this.createPortfolio}>
						Crear Portfolio
					</button>
					<section className='allElements'>
						<article className='selector'>
							<figure draggable='true' onDragStart={this.dragStartAvatar} onDragOver={this.dragOver} id={this.props.loggedInDash.avatar} className='selectorTag'>
								<img src={this.props.loggedInDash.avatar} alt='' />
							</figure>

							<h6 className='sectionTitle'>Mis trabajos</h6>
							{this.state.cv &&
								this.state.cv.whatIveDone.map((work, idx) => (
									<figure onDragStart={this.dragStartWork} onDragOver={this.dragOver} id={work} key={idx} draggable='true' className='selectorTag'>
										<img src={work} alt='' />
									</figure>
								))}
							<h6 className='sectionTitle'>Mis Redes Sociales</h6>
							{this.state.cv &&
								this.state.cv.socialMedia.map((social, idx) => (
									<article onDragStart={this.dragStartSkill} onDragOver={this.dragOver} id={social} draggable='true' key={idx} className='selectorTag'>
										<p>{social}</p>
									</article>
								))}
							<h6 className='sectionTitle'>Mis Skills</h6>
							{this.state.cv &&
								this.state.cv.skills.map((skill, idx) => (
									<article onDragStart={this.dragStartSkill} onDragOver={this.dragOver} id={skill} draggable='true' key={idx} className='selectorTag'>
										<p>{skill}</p>
									</article>
								))}
							<h6 className='sectionTitle'>Mi Eduacación</h6>
							{this.state.education &&
								this.state.education.map((ed, idx) => (
									<article onDragStart={this.dragStartEducation} onDragOver={this.dragOver} id={ed._id} draggable='true' key={idx} className='selectorTag'>
										<h6>{ed.place}</h6>
										<p>{ed.duration}</p>
										<p>{ed.experienceInfo}</p>
									</article>
								))}
							<h6 className='sectionTitle'>Mi Experiencia</h6>
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
							<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='creatorHeader'>
								
							</article>
							<figure onDrop={this.drop} onDragOver={this.dragOverReceptor} className='avatarReceptor'></figure>

							<article className='portfolioContent'>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer'>
									
								</article>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer'>
									
								</article>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer'>
									
								</article>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer'>
									
								</article>
								<article onDrop={this.drop} onDragOver={this.dragOverReceptor} className='endContainer workReceptor'>
									
								</article>
							</article>
						</article>
					</section>
				</main>
			</>
		)
	}
}

export default PortfolioCreator
