import axios from 'axios'
import { APU_URL } from '../helpers/constants'

axios.defaults.baseURL = APU_URL

export const PostService = {
	async getAll() {
		return await axios
			.get('/posts')
			.then((res) => res.data)
			.catch(function (err) {
				console.log(err.message)
			})
	},
}
