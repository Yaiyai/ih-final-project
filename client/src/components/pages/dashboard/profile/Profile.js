import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'

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
			avatar: this.props.loggedInDash.avatar,
		}
		this.userService = new UserServices()
	}

	handleUpload = (e) => {
		const uploadData = new FormData()
		uploadData.append('newAvatar', e.target.files[0])
		console.log(e.target.files[0])
		this.userService
			.upload(uploadData)
			.then((response) => this.setState({ ...this.state, newAvatar: response.data.secure_url }))
			.then(() => this.setState({ ...this.state, avatar: this.state.newAvatar }))
			.catch((error) => console.error(error))
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	submitEdits = (e) => {
		e.preventDefault()
		this.userService
			.editUser(this.props.loggedInDash._id, this.state)
			.then((response) => {
				this.props.setTheUser(response.data)
			})
			.catch((err) => new Error(err))
	}

	render() {
		return (
			<>
				<section className='profile-page'>
					<h4>{this.props.loggedInDash.username}, aquí puedes editar tu perfil</h4>
					<Form onSubmit={this.submitEdits}>
						<figure className='profile-img'>
							{this.props.loggedInDash.avatar ? <img src={this.props.loggedInDash.avatar} alt='Cuentame más' /> : <img src='/imgs/ic/ic-signup.svg' alt='Cuentame más' />}
						</figure>

						<Form.Label className='form-label'>Editar avatar</Form.Label>
						<Form.Control className='form-upload' name='newAvatar' type='file' onChange={this.handleUpload} />

						<Form.Label className='form-label'>Nombre de usuario</Form.Label>
						<Form.Control className='form-input' name='username' type='text' onChange={this.handleChange} placeholder={this.props.loggedInDash.username} value={this.state.username} />
						<Form.Label>Email address</Form.Label>
						<Form.Control className='form-input' name='email' type='email' onChange={this.handleChange} placeholder={this.props.loggedInDash.email} value={this.state.email} />
						<Form.Label>Nombre</Form.Label>
						<Form.Control className='form-input' name='name' onChange={this.handleChange} type='text' placeholder={this.props.loggedInDash.name} value={this.state.name} />
						<Form.Label>Apellidos</Form.Label>
						<Form.Control className='form-input' name='lastName' onChange={this.handleChange} type='text' placeholder={this.props.loggedInDash.lastName} value={this.state.lastName} />
						<Form.Label>Teléfono</Form.Label>
						<Form.Control className='form-input' name='phone' onChange={this.handleChange} type='text' placeholder={this.props.loggedInDash.phone} value={this.state.phone} />

						<button className='my-button mini' type='submit'>
							Guardar cambios
						</button>
					</Form>
				</section>
			</>
		)
	}
}

export default Profile
