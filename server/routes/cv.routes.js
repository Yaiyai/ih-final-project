const express = require('express')
const router = express.Router()
const Cv = require('../models/mycv.model')

const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/login'))


router.get('/findMyCvs',checkAuth, (req, res, next) => {
	Cv.find({ owner: req.user.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})
router.get('/findThisCv/:id',checkAuth, (req, res, next) => {
	Cv.findById(req.params.id)
		.populate('owner')
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/editCv/:id',checkAuth, (req, res, next) => {
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

module.exports = router
