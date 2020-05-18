import React, { Component } from 'react'

import './login.css'

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
			.login(this.state.loginInfo)
			.then((response) => {
				this.props.setTheUser(response.data)
				this.props.history.push('/dashboard')
			})
			.catch((err) => console.log(err))
	}

	render() {
		return (
			<>
				<HomeNav></HomeNav>
				<Container className='login-page'>
					<h4>¡Iniciar sesión!</h4>
					<Form onSubmit={this.handleSubmit} className='my-form'>
						<Form.Group>
							<Form.Label className='form-label'>Username</Form.Label>
							<Form.Control className='form-input' name='username' onChange={this.handleInputChange} type='text' placeholder='Introduce un nombre de usuario' />
						</Form.Group>

						<Form.Group>
							<Form.Label>Contraseña</Form.Label>
							<Form.Control className='form-input' name='password' onChange={this.handleInputChange} type='password' placeholder='Contraseña' />
						</Form.Group>

						<Button className='form-button' type='submit'>
							Iniciar sesión
						</Button>
					</Form>
					<p>
						¿No tienes cuenta?{' '}
						<Link className='mini-link' to='/signup'>
							Iniciar sesión
						</Link>
					</p>
				</Container>
			</>
		)
	}
}

export default Signup
