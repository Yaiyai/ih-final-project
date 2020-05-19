import React from 'react'
import HomeNav from '../../ui/homeNav/HomeNav'
import './Home.css'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = (props) => {
	console.log(props)
	return (
		<>
			<HomeNav loggedInHome={props.loggedInUser} setTheUser={props.setTheUser} />
			<main className='homePage'>
				<Container>
					<Row as='header'>
						<Col as='article' md={6}>
							<figure className='logo'>
								<img src='/imgs/home/logo-home.svg' alt='Cuentame más Logo' />
							</figure>
							<h1>Construye tu portfolio de forma rápida y sencilla</h1>
							<h5>
								Porque no todas las empresas necesitan ver todo tu trabajo, usa <strong>Cuéntame Más</strong>.
							</h5>
							<p>Cuéntame Más te proporcinona las herramientas que necesitas para presentar portfolios específicos para la empresa en la que estás interesado en aplicar..</p>
							<p className='features'>Totalmente gratis | No pierdas el tiempo con programas de diseño</p>
							<Link className='myButton' to='/login'>
								crear portfolio
							</Link>
						</Col>
						<Col as='article' md={6}>
							<figure className='imgHeader'>
								<img src='/imgs/home/img-header.svg' alt='Cuentame más' />
							</figure>
						</Col>
					</Row>

					<Row as='section' className='infoSection'>
						<Col md={5} as='article'>
							<figure className='imgInfo'>
								<img src='/imgs/home/mac.svg' alt='Cuentame más - Computer' />
							</figure>
						</Col>
						<Col md={7} as='article'>
							<h2>Crea portfolios específicos</h2>
							<h5>Diseña un portfolio nuevo en minutos.</h5>

							<p>
								Simplemente tienes que añadir contenido que previamente hayas añadido a tu perfil, elige una plantilla y luego personalízala como mejor se adapte a las necesidades de la oferta de
								trabajo que te interesa.
							</p>
						</Col>
					</Row>

					<Row as='section' className='howWorks'>
						<h2>¿Cómo funciona?</h2>
						<article className='groupCards'>
							<article className='eachCard'>
								<figure className='icons'>
									<img src='/imgs/ic/ic-profile.svg' alt='Cuentame más - Computer' />
								</figure>
								<h4>Regístrate</h4>
								<p>Para empezar a montar tus portfolios, es necesario que te registres.</p>
							</article>

							<article className='eachCard'>
								<figure className='icons'>
									<img src='/imgs/ic/ic-cv.svg' alt='Cuentame más - Computer' />
								</figure>
								<h4>Añade</h4>
								<p>Para empezar a montar tus portfolios, es necesario que te registres.</p>
							</article>

							<article className='eachCard'>
								<figure className='icons'>
									<img src='/imgs/ic/ic-addnew.svg' alt='Cuentame más - Computer' />
								</figure>
								<h4>Portfolios</h4>
								<p>Para empezar a montar tus portfolios, es necesario que te registres.</p>
							</article>

							<article className='eachCard'>
								<figure className='icons'>
									<img src='/imgs/ic/ic-link.svg' alt='Cuentame más - Computer' />
								</figure>
								<h4>Comparte</h4>
								<p>Para empezar a montar tus portfolios, es necesario que te registres.</p>
							</article>
						</article>
						<Link className='myButton' to='/login'>
							¡empezar!
						</Link>
					</Row>
				</Container>
			</main>
			<footer>
				<p>© Copyright CuéntameMás 2020</p>
			</footer>
		</>
	)
}

export default Home
