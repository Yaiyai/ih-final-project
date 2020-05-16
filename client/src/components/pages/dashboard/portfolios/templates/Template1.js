import React, { Component } from 'react'
import './Templates.css'

class TemplateOne extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<>
				<section className='templates'>
					<h1>Soy la Template 1</h1>
				</section>
			</>
		)
	}
}

export default TemplateOne
