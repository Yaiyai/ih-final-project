import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/cv`,
			withCredentials: true,
		})
	}

	findMyCvs = (userID) => this.service.get('/findMyCvs', userID)
	findThisCv = (cvId) => this.service.get(`/findThisCv/${cvId}`)
	editThisCv = (cvId, changes) => this.service.post(`/editCv/${cvId}`, changes)
	upload = (picture) => this.service.post('/upload', picture)
}

export default services
