import React, { Component } from 'react'

import CvServices from '../../../../service/cv.service'

class Cv extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.cvServices = new CvServices()
	}

	getCv() {
		const id = this.props.match.params.id
		console.log(this.props)
	}

	componentDidMount = () => {
		this.getCv()
	}

	render() {
		return (
			<>
				<h1>soy tu cv con id</h1>
			</>
		)
	}
}

export default Cv
