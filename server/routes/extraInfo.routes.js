const express = require('express')
const router = express.Router()
const ExtraInfo = require('./../models/subdocs/extrainfo.model')

const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/login'))

router.get('/getJobs/:id', checkAuth, (req, res, next) => {
	ExtraInfo.find({ cv: req.params.id, typeOfInfo: 'Job' })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.get('/getEducations/:id', checkAuth, (req, res, next) => {
	ExtraInfo.find({ cv: req.params.id, typeOfInfo: 'Education' })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

//Create more jobs or education

router.post('/addJob/:id', checkAuth, (req, res, next) => {
	const newJob = {
		place: req.body.place,
		duration: req.body.duration,
		experienceInfo: req.body.experienceInfo,
		typeOfInfo: 'Job',
		cv: req.params.id,
	}

	ExtraInfo.create(newJob)
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/addEducation/:id', checkAuth, (req, res, next) => {
	const newEd = {
		place: req.body.place,
		duration: req.body.duration,
		experienceInfo: req.body.experienceInfo,
		typeOfInfo: 'Education',
		cv: req.params.id,
	}
	console.log(newEd)
	ExtraInfo.create(newEd)
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
