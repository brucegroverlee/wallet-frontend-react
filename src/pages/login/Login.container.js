import React from "react"
import { connect } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { history } from "../../history"
import { api } from "../../api"
import { LoginHtml } from "./Login.html"

class Login extends React.Component {
  state = {
    fetching: false,
    email : "",
    password: "",
  }

  handlerOnChangeEmail = (value) => {
    this.setState({
      email: value,
    })
  }

  handlerOnChangePassword = (value) => {
    this.setState({
      password: value,
    })
  }

  handlerOnClickLogin = async () => {
    try {
      this.setState({ fetching: true, })
      const result = await api.users.login({
        email: this.state.email,
        password: this.state.password,
      })
      localStorage.setItem("token", result.token)
      history.replace("/")
    } catch (error) {
      if (error.response.status === 406) {
        toast.error(`Oops! ${error.response.data.message}`)
        console.error(error.response.data.message)
      } else {
        toast.error("Oops! something went wrong")
        console.error(error.response)
      }
      this.setState({ fetching: false, })
    }
  }

  componentDidMount() {
    if (localStorage.getItem("token") && this.props.loggedIn) {
      history.replace("/")
    }
  }

  render() {
    return (
      <React.Fragment>
        <LoginHtml
          fetching={this.state.fetching}
          email={this.state.email}
          password={this.state.password}
          handlerOnChangeEmail={this.handlerOnChangeEmail}
          handlerOnChangePassword={this.handlerOnChangePassword}
          handlerOnClickLogin={this.handlerOnClickLogin}
        />
        <ToastContainer
          position="bottom-right"
          autoClose={7000}
          hideProgressBar={true}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
})

export default connect(mapStateToProps, {})(Login)