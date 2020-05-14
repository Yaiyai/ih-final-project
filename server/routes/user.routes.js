const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

router.post('/deleteUser/:id', (req, res, next) => {
	User.findByIdAndRemove(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/updateUser/:id', (req, res, next) => {
	User.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
