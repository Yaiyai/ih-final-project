const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

router.get('/users', (req, res, next) => {
	User.find()
		.then((data) => res.json(data))
		.catch((err) => new Err(err))
})

router.get('/getOneUser/:id', (req, res, next) => {
	User.findById(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => new Err(err))
})

router.post('/deleteUser/:id', (req, res, next) => {
	User.findByIdAndRemove(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => new Err(err))
})

router.post('/updateUser/:id', (req, res, next) => {
	User.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((data) => res.json(data))
		.catch((err) => new Err(err))
})

module.exports = router
