import React from "react"
import { connect } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { history } from "../../history"
import { api } from "../../api"
import { RegisterHtml } from "./Register.html"

class Register extends React.Component {
  state = {
    fetching: false,
    name: "",
    email : "",
    password: "",
    confirmPass: "",
  }

  handlerOnChangeName = (value) => {
    this.setState({
      name: value,
    })
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

  handlerOnChangeConfirmPassword = (value) => {
    this.setState({
      confirmPass: value,
    })
  }

  handlerOnClickSignup = async () => {
    try {
      this.setState({ fetching: true, })
      const result = await api.users.signup({
        name: this.state.name,
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
        <RegisterHtml
          fetching={this.state.fetching}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          confirmPass={this.state.confirmPass}
          handlerOnChangeName={this.handlerOnChangeName}
          handlerOnChangeEmail={this.handlerOnChangeEmail}
          handlerOnChangePassword={this.handlerOnChangePassword}
          handlerOnChangeConfirmPassword={this.handlerOnChangeConfirmPassword}
          handlerOnClickSignup={this.handlerOnClickSignup}
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

export default connect(mapStateToProps, {})(Register)
