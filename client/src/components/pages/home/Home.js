import React, { Component } from 'react'
import HomeNav from '../../ui/homeNav/HomeNav'

import Container from 'react-bootstrap/Container'

class Home extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<>
				<HomeNav />
				<Container>
					<h1>Esto es la home</h1>
				</Container>
			</>
		)
	}
}

export default Home
