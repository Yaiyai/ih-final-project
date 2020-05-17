const express = require('express')
const router = express.Router()
const Cv = require('../models/mycv.model')
const uploader = require('../configs/cloudinary.config')

const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/login'))

router.get('/findMyCvs', checkAuth, (req, res, next) => {
	Cv.find({ owner: req.user.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.get('/findOneCv', checkAuth, (req, res, next) => {
	Cv.findOne({ owner: req.user.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.get('/findThisCv/:id', checkAuth, (req, res, next) => {
	Cv.findById(req.params.id)
		.populate('owner')
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/editCv/:id', checkAuth, (req, res, next) => {
	let newCv = {
		skills: req.body.skills,
		socialMedia: req.body.socialMedia,
		title: req.body.title,
		whatIveDone: req.body.whatIveDone,
	}

	Cv.findByIdAndUpdate(req.params.id, newCv, { new: true })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/upload', checkAuth, uploader.single('newWork'), (req, res) => {
	if (req.file) {
		res.status(200).json({ secure_url: req.file.secure_url })
	} else {
		res.status(500).json({ message: 'Something went wrong' })
	}
})
module.exports = router
