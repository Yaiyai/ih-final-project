const mongoose = require('mongoose')
const User = require('../models/user.model')
const MyCV = require('../models/mycv.model')
const ExtraInfo = require('../models/subdocs/extrainfo.model')
const Portfolio = require('../models/portfolio.model')

const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)

mongoose.connect(`mongodb://localhost/cuentamemasih`, { useNewUrlParser: true, useUnifiedTopology: true })
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
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1589106138/Captura_de_pantalla_2020-05-10_a_las_12.22.02_ms8e9a.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1589106138/Captura_de_pantalla_2020-05-10_a_las_12.21.53_tenw1t.png',
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
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1589106138/Captura_de_pantalla_2020-05-10_a_las_12.22.02_ms8e9a.png',
			'https://res.cloudinary.com/cuentamemasih/image/upload/v1589106138/Captura_de_pantalla_2020-05-10_a_las_12.21.53_tenw1t.png',
		],
	},
]

const portfolios = [
	{
		title: 'Yai for Cabify',
		url: '',
	},
	{
		title: 'Armando for Glovo',
		url: '',
	},
]

const educations = [
	{
		place: 'Web Development @ Ironhack',
		duration: "Mar'20 - May'20",
		experienceInfo: 'FullStack Dev | MongoDB | NodeJS | Express | React | Javascript | Sass | Html | Css',
	},
	{
		place: 'Graphic Design + Web Design @ Aula Creactiva',
		duration: "Feb'14 - Oct'14",
		experienceInfo: 'Adobe CC | Adobe InDesign | Adobe Illustrator | Adobe Photoshop',
	},
	{
		place: 'Web Development @ Ironhack',
		duration: "Mar'20 - May'20",
		experienceInfo: 'FullStack Dev | MongoDB | NodeJS | Express | React | Javascript | Sass | Html | Css',
	},
	{
		place: 'LADE @ ICADE',
		duration: "Sept'04 - Jun'09",
		experienceInfo: 'Licenciatura en Administración y dirección de empresas',
	},
]

const jobsInfo = [
	{
		place: 'Graphic Designer @ Bipi',
		duration: "Feb'15 - Mar'20",
		experienceInfo: 'Design thinking & creating process || Software and hardware problems responsable || Assist the Marketing Team and Sales Team on its design queries.',
	},
	{
		place: 'Graphic Designer @ Eurotaxglass',
		duration: "Oct'14 - Feb'15",
		experienceInfo: 'Car parts illustrator',
	},
	{
		place: 'TheCompany',
		duration: "Feb'10 - Mar'20",
		experienceInfo: 'Cosas de ADE',
	},
]

let myUsers = []
let myCvs = []
let myPortfolios = []
let myEducationInfo = []
let myJobsInfo = []

User.create(users)
	.then((usersCreated) => {
		usersCreated.forEach((user) => myUsers.push(user.id))
		return myUsers
	})
	.catch((err) => new Error(err))

ExtraInfo.create(educations)
	.then((educationsCreated) => {
		educationsCreated.forEach((education) => myEducationInfo.push(education.id))
		return myEducationInfo
	})
	.catch((err) => new Error(err))

ExtraInfo.create(jobsInfo)
	.then((jobsCreated) => {
		jobsCreated.forEach((jobs) => myJobsInfo.push(jobs.id))
		return myJobsInfo
	})
	.catch((err) => new Error(err))

MyCV.create(cvs)
	.then((cvsCreated) => {
		cvsCreated.forEach((cv) => myCvs.push(cv.id))
		return myCvs
	})
	.then(() => MyCV.findByIdAndUpdate(myCvs[0], { owner: myUsers[0], education: [myEducationInfo[0], myEducationInfo[1]], jobs: [myJobsInfo[0], myJobsInfo[1]] }, { new: true }).then())
	.then(() => MyCV.findByIdAndUpdate(myCvs[1], { owner: myUsers[1], education: [myEducationInfo[2]], jobs: [myJobsInfo[2]] }, { new: true }).then())
	.catch((err) => new Error(err))

Portfolio.create(portfolios)
	.then((portfoliosCreated) => {
		portfoliosCreated.forEach((protfolio) => myPortfolios.push(protfolio.id))
		return myPortfolios
	})
	.then(() => Portfolio.findByIdAndUpdate(myPortfolios[0], { owner: myUsers[0] }, { new: true }).then())
	.then(() => Portfolio.findByIdAndUpdate(myPortfolios[1], { owner: myUsers[1] }, { new: true }).then())
	.then(() => mongoose.connection.close())
	.catch((err) => new Error(err))
