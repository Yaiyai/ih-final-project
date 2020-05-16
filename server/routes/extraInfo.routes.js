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
	const { place, duration, experienceInfo } = req.body
	ExtraInfo.create({ place, duration, experienceInfo, typeOfInfo: 'Job', cv: req.params.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

router.post('/addEducation/:id', checkAuth, (req, res, next) => {
	const { place, duration, experienceInfo } = req.body
	ExtraInfo.create({ place, duration, experienceInfo, typeOfInfo: 'Education', cv: req.params.id })
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

//delete
router.post('/delete/:id', checkAuth, (req, res, next) => {
	ExtraInfo.findByIdAndRemove(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => new Error(err))
})

module.exports = router
