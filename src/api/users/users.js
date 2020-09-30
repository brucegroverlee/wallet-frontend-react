import axios from "axios"
import { API_ENDPOINT } from "../../configs/constants"

export class Users {

  /**
   *
   * @param {object} payload
   * @param {object} payload.email
   * @param {object} payload.password
   * @returns {object} returns an object with the token attribute.
   * @property {string} result.token
   */
  static async login(payload) {
    try {
      const result = await axios({
        method: 'post',
        url: `${API_ENDPOINT}/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
      return result.data
    } catch (error) {
      throw error
    }
  }

  /**
   *
   * @param {object} payload
   * @param {string} payload.name
   * @param {string} payload.email
   * @param {string} payload.password
   * @returns {object} returns an object with the token attribute.
   * @property {string} result.token
   */
  static async signup(payload) {
    try {
      const result = await axios({
        method: 'post',
        url: `${API_ENDPOINT}/signup`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
        },
      })
      return result.data
    } catch (error) {
      throw error
    }
  }

  /**
   *
   * @param {string} token session's token
   * @returns {object} returns an object with the token and user attributes.
   * @property {string} result.token
   * @property {object} result.user
   */
  static async me(token) {
    try {
      const result = await axios({
        method: 'get',
        url: `${API_ENDPOINT}/me`,
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