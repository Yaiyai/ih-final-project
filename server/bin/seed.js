require('dotenv').config()

const mongoose = require('mongoose')
const User = require('../models/user.model')
const MyCV = require('../models/mycv.model')
const ExtraInfo = require('../models/subdocs/extrainfo.model')
const Portfolio = require('../models/portfolio.model')

const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)

mongoose.connect(process.env.REMOTEDB, { useNewUrlParser: true, useUnifiedTopology: true })
User.collection.drop()
MyCV.collection.drop()
Portfolio.collection.drop()
ExtraInfo.collection.drop()

const users = [
	{
		username: 'Yai',
		email: 'myd.rio@hotmail.com',
		password: bcrypt.hashSync('yai', salt),
		avatar: 'https://res.cloudinary.com/cuentamemasih/image/upload/v1589105713/IMG_5477_skvqnf.jpg',
		name: 'Yaiza',
		lastName: 'del Río Mediavilla',
		phone: '615000000',
	},
	{
		username: 'theBossRules',
		email: 'armando@jaleo.com',
		password: bcrypt.hashSync('arya', salt),
		avatar: 'https://res.cloudinary.com/cuentamemasih/image/upload/v1589107987/avataaars_1_qyb9j7.png',
		name: 'Armando',
		lastName: 'Jaleo',
		phone: '615000001',
	},
]

const cvs = [
	{
		title: "Yai's CV",
		socialMedia: ['https://github.com/Yaiyai', 'https://www.linkedin.com/in/yaiza-del-rio/'],
		skills: [
			'FullStack Dev',
			'MongoDB',
			'NodeJS',
			'Express',
			'React',
			'Javascript',
			'Sass',
			'Html',
			'Css',
			'Git & GitHub',
			'Sketch',
			'Invision',
			'Adobe Illustrator',
			'Adobe Indesign',
			'Adobe Photoshop',
			'Adobe Premier',
		],
		whatIveDone: [
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1589106138/Captura_de_pantalla_2020-05-10_a_las_12.22.02_ms8e9a.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1589106138/Captura_de_pantalla_2020-05-10_a_las_12.21.53_tenw1t.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1590060263/cuentame-mas/Captura%20de%20pantalla%202020-05-21%20a%20las%2013.23.15.png.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1590060250/cuentame-mas/Captura%20de%20pantalla%202020-05-21%20a%20las%2013.23.06.png.png',
		],
	},
	{
		title: "Armando's CV",
		socialMedia: [],
		skills: [
			'FullStack Dev',
			'MongoDB',
			'NodeJS',
			'Express',
			'React',
			'Javascript',
			'Sass',
			'Html',
			'Css',
			'Git & GitHub',
			'Sketch',
			'Invision',
			'Adobe Illustrator',
			'Adobe Indesign',
			'Adobe Photoshop',
			'Adobe Premier',
		],
		whatIveDone: [
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1590060231/cuentame-mas/Captura%20de%20pantalla%202020-05-21%20a%20las%2013.23.37.png.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1590060239/cuentame-mas/Captura%20de%20pantalla%202020-05-21%20a%20las%2013.23.24.png.png',
		],
	},
]

const portfolios = [
	{
		title: 'Yai for Cabify',
		url: 'seed-user-one',
		theme: 'color',
		template: 't2',
		companyName: 'Cabify',
		socialMedia: ['https://github.com/Yaiyai', 'https://www.linkedin.com/in/yaiza-del-rio/'],

		avatar: 'https://res.cloudinary.com/cuentamemasih/image/upload/v1589105713/IMG_5477_skvqnf.jpg',
		skills: [
			'FullStack Dev',
			'MongoDB',
			'NodeJS',
			'Express',
			'React',
			'Javascript',
			'Sass',
			'Html',
			'Css',
			'Git & GitHub',
			'Sketch',
			'Invision',
			'Adobe Illustrator',
			'Adobe Indesign',
			'Adobe Photoshop',
			'Adobe Premier',
		],
		works: [
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1589106138/Captura_de_pantalla_2020-05-10_a_las_12.22.02_ms8e9a.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1589106138/Captura_de_pantalla_2020-05-10_a_las_12.21.53_tenw1t.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1590060263/cuentame-mas/Captura%20de%20pantalla%202020-05-21%20a%20las%2013.23.15.png.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1590060250/cuentame-mas/Captura%20de%20pantalla%202020-05-21%20a%20las%2013.23.06.png.png',
		],
	},
	{
		title: 'Armando for Glovo',
		url: 'seed-user-two',
		theme: 'simple',
		skills: ['FullStack Dev', 'MongoDB', 'NodeJS', 'Express', 'React', 'Javascript', 'Sass', 'Html', 'Css'],
		template: 't3',
		companyName: 'Glovo',
		avatar: 'https://res.cloudinary.com/cuentamemasih/image/upload/v1589107987/avataaars_1_qyb9j7.png',
		works: [
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1590060231/cuentame-mas/Captura%20de%20pantalla%202020-05-21%20a%20las%2013.23.37.png.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1590060239/cuentame-mas/Captura%20de%20pantalla%202020-05-21%20a%20las%2013.23.24.png.png',
		],
	},
]

const educations = [
	{
		place: 'Web Development @ Ironhack',
		duration: "Mar'20 - May'20",
		experienceInfo: 'FullStack Dev | MongoDB | NodeJS | Express | React | Javascript | Sass | Html | Css',
		typeOfInfo: 'Education',
	},
	{
		place: 'Graphic Design + Web Design @ Aula Creactiva',
		duration: "Feb'14 - Oct'14",
		experienceInfo: 'Adobe CC | Adobe InDesign | Adobe Illustrator | Adobe Photoshop',
		typeOfInfo: 'Education',
	},
	{
		place: 'Web Development @ Ironhack',
		duration: "Mar'20 - May'20",
		experienceInfo: 'FullStack Dev | MongoDB | NodeJS | Express | React | Javascript | Sass | Html | Css',
		typeOfInfo: 'Education',
	},
	{
		place: 'LADE @ ICADE',
		duration: "Sept'04 - Jun'09",
		experienceInfo: 'Licenciatura en Administración y dirección de empresas',
		typeOfInfo: 'Education',
	},
]

const jobsInfo = [
	{
		place: 'Graphic Designer @ Bipi',
		duration: "Feb'15 - Mar'20",
		experienceInfo: 'Design thinking & creating process || Software and hardware problems responsable || Assist the Marketing Team and Sales Team on its design queries.',
		typeOfInfo: 'Job',
	},
	{
		place: 'Graphic Designer @ Eurotaxglass',
		duration: "Oct'14 - Feb'15",
		experienceInfo: 'Car parts illustrator',
		typeOfInfo: 'Job',
	},
	{
		place: 'TheCompany',
		duration: "Feb'10 - Mar'20",
		experienceInfo: 'Cosas de ADE',
		typeOfInfo: 'Job',
	},
]

let myUsers = []
let myCvs = []
let myPortfolios = []
let myEducationInfo = []
let myJobsInfo = []

let jobsPromise = ExtraInfo.create(jobsInfo)
let educationPromise = ExtraInfo.create(educations)
let portfoliosPromise = Portfolio.create(portfolios)
let cvsPromise = MyCV.create(cvs)

User.create(users)
	.then((usersCreated) => usersCreated.forEach((user) => myUsers.push(user.id)))
	.then(() => Promise.all([cvsPromise, portfoliosPromise, educationPromise, jobsPromise]))
	.then((promises) => {
		promises[0].forEach((cv) => myCvs.push(cv.id))
		promises[1].forEach((portfolio) => myPortfolios.push(portfolio.id))
		promises[2].forEach((education) => myEducationInfo.push(education.id))
		promises[3].forEach((job) => myJobsInfo.push(job.id))
	})
	.then(() => MyCV.findByIdAndUpdate(myCvs[0], { owner: myUsers[0] }, { new: true }))
	.then(() => MyCV.findByIdAndUpdate(myCvs[1], { owner: myUsers[1] }, { new: true }))

	.then(() => Portfolio.findByIdAndUpdate(myPortfolios[0], { owner: myUsers[0] }, { new: true }))
	.then(() => Portfolio.findByIdAndUpdate(myPortfolios[1], { owner: myUsers[1] }, { new: true }))

	.then(() => ExtraInfo.findByIdAndUpdate(myEducationInfo[0], { cv: myCvs[0] }, { new: true }))
	.then(() => ExtraInfo.findByIdAndUpdate(myEducationInfo[1], { cv: myCvs[0] }, { new: true }))
	.then(() => ExtraInfo.findByIdAndUpdate(myEducationInfo[3], { cv: myCvs[1] }, { new: true }))
	.then(() => ExtraInfo.findByIdAndUpdate(myEducationInfo[4], { cv: myCvs[1] }, { new: true }))

	.then(() => ExtraInfo.findByIdAndUpdate(myJobsInfo[0], { cv: myCvs[0] }, { new: true }))
	.then(() => ExtraInfo.findByIdAndUpdate(myJobsInfo[1], { cv: myCvs[0] }, { new: true }))
	.then(() => ExtraInfo.findByIdAndUpdate(myJobsInfo[2], { cv: myCvs[1] }, { new: true }))

	.then(() => mongoose.connection.close())
	.catch((err) => new Error(err))
