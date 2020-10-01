import { history } from "../../../history"

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: "USER_END_SESSION",
    })
    localStorage.removeItem("token")
    history.push("login")
  }
}
