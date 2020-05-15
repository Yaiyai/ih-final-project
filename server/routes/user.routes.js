const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/login'))


router.post('/deleteUser/:id', checkAuth, (req, res, next) => {
	User.findByIdAndRemove(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/updateUser/:id', checkAuth, (req, res, next) => {
	User.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
