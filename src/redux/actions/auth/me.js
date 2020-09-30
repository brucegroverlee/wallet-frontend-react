import { history } from "../../../history"
import { api } from "../../../api"

export const me = () => {
  return async dispatch => {
    try {
      const token = localStorage.getItem("token")
      const result = await api.users.me(token)
      localStorage.setItem("token", result.token)
      dispatch({
        type: "USER_START_SESSION",
        payload: result.user,
      })
    } catch (error) {
      console.error(error.response)
      localStorage.removeItem("token")
      history.push("login")
    }
  }
}
