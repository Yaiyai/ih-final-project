import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: 'http://localhost:5000/api',
			withCredentials: true,
		})
	}

	findMyCvs = (userID) => this.service.get('/findMyCvs', userID)
}

export default services
