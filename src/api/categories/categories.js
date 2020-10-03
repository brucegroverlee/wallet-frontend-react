import axios from "axios"
import { API_ENDPOINT } from "../../configs/constants"

export class Categories {
  static resource = "categories"

  /**
   *
   */
  static async create(payload) {
    try {
      const token = localStorage.getItem("token")
      const result = await axios({
        method: 'post',
        url: `${API_ENDPOINT}/${this.resource}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: payload,
      })
      return result.data
    } catch (error) {
      throw error
    }
  }

  /**
   *
   */
  static async list(payload) {
    try {
      const query = Object.keys(payload).map(key => `${key}=${payload[key]}`)
      const token = localStorage.getItem("token")
      const result = await axios({
        method: 'get',
        url: `${API_ENDPOINT}/${this.resource}?${query.join(",")}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      return result.data
    } catch (error) {
      throw error
    }
  }

}