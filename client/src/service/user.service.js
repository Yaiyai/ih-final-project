import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: 'http://localhost:5000/api',
			withCredentials: true,
		})
	}

	editUser = (userId, editedUser) => this.service.post(`/updateUser/${userId}`, editedUser)
}

export default services
