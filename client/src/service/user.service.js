import axios from 'axios'

class services {
	constructor() {
		this.service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}`,
			withCredentials: true,
		})
	}

	editUser = (userId, editedUser) => this.service.post(`/updateUser/${userId}`, editedUser)
}

export default services
