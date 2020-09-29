import React from "react"
import { LoginHtml } from "./Login.html"

class Login extends React.Component {
  state = {
    activeTab: "1",
    email : "",
    password: ""
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
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

  render() {
    return (
      <LoginHtml
        email={this.state.email}
        password={this.state.password}
        handlerOnChangeEmail={this.handlerOnChangeEmail}
        handlerOnChangePassword={this.handlerOnChangePassword}
      />
    )
  }
}
export default Login
