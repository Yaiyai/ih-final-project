const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../models/user.model')
const Cv = require('../models/mycv.model')
const Portfolio = require('../models/portfolio.model')
const bcrypt = require('bcrypt')

router.post('/signup', (req, res, next) => {
	const { username, password, email } = req.body

	if (!username || !password) {
		res.status(400).json({ message: 'Rellena usuario y contraseña' })
		return
	}

	if (password.length < 2) {
		res.status(400).json({ message: 'La contraseña debe tener mínimo 3 caracteres.' })
		return
	}

	// User.findOne({ username })
	// 	.then((foundUser) => {
	// 		if (foundUser) {
	// 			res.status(400).json({ message: 'Username taken. Choose another one.' })
	// 			return
	// 		} else {
	// 			const salt = bcrypt.genSaltSync(10)
	// 			const hashPass = bcrypt.hashSync(password, salt)
	// 			return User.create({ username: username, email: email, password: hashPass })
	// 		}
	// 	})
	// 	.catch(() => res.status(500).json({ message: 'Username check went bad.' }))
	// 	.then((createdUser) => req.login(createdUser))
	// 	.catch(() => res.status(400).json({ message: 'Login after signup went bad.' }))
	// 	.then((loggedUser) => res.status(200).json(loggedUser))
	// 	.catch(() => res.status(400).json({ message: 'Saving user to database went wrong.' }))

	User.findOne({ username }, (err, foundUser) => {
		if (err) {
			res.status(500).json({ message: 'Username check went bad.' })
			return
		}

		if (foundUser) {
			res.status(400).json({ message: 'Username taken. Choose another one.' })
			return
		}

		const salt = bcrypt.genSaltSync(10)
		const hashPass = bcrypt.hashSync(password, salt)

		User.create({ username, email, password: hashPass })
			.then((user) => {
				const newCV = { title: 'DefaultCV', owner: user.id }

				Cv.create(newCV).catch((err) => console.log(err))
			})
			.then((newUser) => res.status(200).json(newUser))
			.catch(() => res.status(400).json({ message: 'Saving user to database went wrong.' }))
	})
})

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, theUser, failureDetails) => {
		if (err) {
			res.status(500).json({ message: 'Something went wrong authenticating user' })
			return
		}

		if (!theUser) {
			// "failureDetails" contains the error messages
			// from our logic in "LocalStrategy" { message: '...' }.
			res.status(401).json(failureDetails)
			return
		}

		// save user in session
		req.login(theUser, (err) => {
			if (err) {
				res.status(500).json({ message: 'Session save went bad.' })
				return
			}

			// We are now logged in (that's why we can also send req.user)
			res.status(200).json(theUser)
		})
	})(req, res, next)
})

router.post('/logout', (req, res, next) => {
	// req.logout() is defined by passport
	req.logout()
	res.status(200).json({ message: 'Log out success!' })
})

router.get('/loggedin', (req, res, next) => {
	// req.isAuthenticated() is defined by passport
	if (req.isAuthenticated()) {
		res.status(200).json(req.user)
		return
	}
	res.status(403).json({ message: 'Unauthorized' })
})

module.exports = router
