import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import UserServices from '../../../../service/user.service'

import './Profile.css'

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: this.props.loggedInDash.username,
			name: this.props.loggedInDash.name,
			lastName: this.props.loggedInDash.lastName,
			email: this.props.loggedInDash.email,
			phone: this.props.loggedInDash.phone,
		}
		this.userService = new UserServices()
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({
			[name]: value,
		})
	}

	submitEdits = (e) => {
		e.preventDefault()
		this.userService
			.editUser(this.props.loggedInDash._id, this.state)
			.then((response) => {
				this.setState(response.data)
				this.props.history.push('/dashboard')
			})
			.catch((err) => new Error(err))
	}

	render() {
		return (
			<>
				<section className='profilePage'>
					<h4>{this.props.loggedInDash.username}, aquí puedes editar tu perfil</h4>
					<figure className='profileImg'>
						{this.props.loggedInDash.avatar ? <img src={this.props.loggedInDash.avatar} alt='Cuentame más' /> : <img src='/imgs/ic/ic-signup.svg' alt='Cuentame más' />}
					</figure>
					<Form onSubmit={this.submitEdits}>
						<Form.Group>
							<Form.Label>Nombre de usuario</Form.Label>
							<Form.Control name='username' type='text' onChange={this.handleChange} placeholder={this.props.loggedInDash.username} value={this.state.username} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control name='email' type='email' onChange={this.handleChange} placeholder={this.props.loggedInDash.email} value={this.state.email} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Nombre</Form.Label>
							<Form.Control name='name' onChange={this.handleChange} type='text' placeholder={this.props.loggedInDash.name} value={this.state.name} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Apellidos</Form.Label>
							<Form.Control name='lastName' onChange={this.handleChange} type='text' placeholder={this.props.loggedInDash.lastName} value={this.state.lastName} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Teléfono</Form.Label>
							<Form.Control name='phone' onChange={this.handleChange} type='text' placeholder={this.props.loggedInDash.phone} value={this.state.phone} />
						</Form.Group>
						<Button variant='primary' type='submit'>
							Guardar cambios
						</Button>
					</Form>
				</section>
			</>
		)
	}
}

export default Profile
