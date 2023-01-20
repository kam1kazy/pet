import axios from "axios"
import { API_URL } from "../helpers/constants"

axios.defaults.baseURL = API_URL

export const PostService = {
  async getAll() {
    return await axios
      .get("")
      .then((res) => res.data)
      .catch(function (err) {
        console.log(err.message)
      })
  },
}
