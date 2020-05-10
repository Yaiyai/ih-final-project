import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: 'http://localhost:5000/api',
			withCredentials: true,
		})
	}

	getUsers = () => this.service.get('/users')
}

export default services
