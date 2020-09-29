import { history } from "../../../history"
import axios from "axios"

export const signupWithJWT = (email, password, name) => {
  return dispatch => {
    axios
      .post("/api/authenticate/register/user", {
        email: email,
        password: password,
        name: name
      })
      .then(response => {
        var loggedInUser

        if(response.data){

          loggedInUser = response.data.user

          localStorage.setItem("token", response.data.token)

          dispatch({
            type: "LOGIN_WITH_JWT",
            payload: { loggedInUser, loggedInWith: "jwt" }
          })

          history.push("/")
        }

      })
      .catch(err => console.log(err))

  }
}
