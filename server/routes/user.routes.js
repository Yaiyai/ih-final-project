const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const uploader = require('../configs/cloudinary.config')

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

router.post('/upload', checkAuth, uploader.single('newAvatar'), (req, res) => {
	if (req.file) {
		res.status(200).json({ secure_url: req.file.secure_url })
	} else {
		res.status(500).json({ message: 'Something went wrong' })
	}
})

module.exports = router
