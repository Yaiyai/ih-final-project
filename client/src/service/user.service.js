import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/user`,
			withCredentials: true,
		})
	}

	editUser = (userId, editedUser) => this.service.post(`/updateUser/${userId}`, editedUser)
	upload = (picture) => this.service.post('/upload', picture)
}

export default services
