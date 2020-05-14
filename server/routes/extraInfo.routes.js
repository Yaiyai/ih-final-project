const express = require('express')
const router = express.Router()
const ExtraInfo = require('./../models/subdocs/extrainfo.model')

router.get('/getJobs/:id', (req, res, next) => {
	ExtraInfo.find({ cv: req.params.id, typeOfInfo: 'Job' })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.get('/getEducations/:id', (req, res, next) => {
	ExtraInfo.find({ cv: req.params.id, typeOfInfo: 'Education' })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

//Create more jobs or education

router.post('/addJob/:id', (req, res, next) => {
	let place = req.body.place
	let duration = req.body.duration

	ExtraInfo.create({ place: place, duration: duration, typeOfInfo: 'Job', cv: req.params.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/addEducation/:id', (req, res, next) => {
	let place = req.body.place
	let duration = req.body.duration

	ExtraInfo.create({ place: place, duration: duration, typeOfInfo: 'Education', cv: req.params.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
