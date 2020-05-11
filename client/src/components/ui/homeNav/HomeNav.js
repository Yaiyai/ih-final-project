import React from 'react'
import './HomeNav.css'

import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
	return (
		<>
			<div className='menu'>
				<Container className='flex-container'>
					<Link className='to-link' to='/'>
						¿Cómo funciona?
					</Link>
					<div>
						<Link className='to-link' to='/signup'>
							Registrarme
						</Link>
						<Link className='to-link' to='/login'>
							Iniciar sesión
						</Link>
					</div>
				</Container>
			</div>
		</>
	)
}

export default NavBar
