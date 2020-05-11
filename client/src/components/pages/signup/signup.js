import React, { Component } from 'react'

import './signup.css'

import AuthServices from '../../../service/auth.service'
import HomeNav from '../../ui/homeNav/HomeNav'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginInfo: {
				username: '',
				email: '',
				password: '',
			},
			errorMessage: '',
		}
		this.signupService = new AuthServices()
	}

	handleInputChange = (e) => {
		let loginInfoCopy = { ...this.state.loginInfo }
		const { name, value } = e.target
		loginInfoCopy = { ...loginInfoCopy, [name]: value }

		this.setState({ loginInfo: loginInfoCopy })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.signupService
			.signup(this.state.loginInfo)
			.then((response) => {
				this.props.setTheUser(response.data)
				this.props.history.push('/')
			})
			.catch((err) => err.response.status === 400 && this.setState({ errorMessage: err.response.data.message }))
	}

	render() {
		return (
			<>
				<HomeNav></HomeNav>
				<Container className='signup-page'>
					<h4>¡Quiero registrarme!</h4>
					<Form onSubmit={this.handleSubmit} className='my-form'>
						<Form.Group>
							<Form.Label className='form-label'>Username</Form.Label>
							<Form.Control className='form-input' name='username' onChange={this.handleInputChange} value={this.state.username} type='text' placeholder='Introduce un nombre de usuario' />
						</Form.Group>

						<Form.Group>
							<Form.Label>Correo electrónico</Form.Label>
							<Form.Control className='form-input' name='email' onChange={this.handleInputChange} value={this.state.email} type='email' placeholder='Introduce un correo electrónico' />
						</Form.Group>

						<Form.Group>
							<Form.Label>Contraseña</Form.Label>
							<Form.Control className='form-input' name='password' onChange={this.handleInputChange} value={this.state.password} type='password' placeholder='Contraseña' />
						</Form.Group>

						<Button className='form-button' type='submit'>
							Crear Usuario
						</Button>
					</Form>
					<p>
						¿Ya tienes cuenta?{' '}
						<Link className='mini-link' to='/login'>
							Iniciar Sesión
						</Link>
					</p>
				</Container>
			</>
		)
	}
}

export default Signup
