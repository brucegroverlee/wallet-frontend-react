import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import Spinner from "../components/@vuexy/spinner/Loading-spinner"
import { me } from "../redux/actions/auth/me"

class CheckSessionContainer extends React.Component {
  componentDidMount() {
    if ( localStorage.getItem('token') && !this.props.loggedIn ) {
      this.props.me()
    }
  }

  componentDidUpdate() {
    if ( localStorage.getItem('token') && !this.props.loggedIn ) {
      this.props.me()
    }
  }

  render() {
    if (this.props.publicRoute) {
      return (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    }

    if ( localStorage.getItem('token') ) {
      if (this.props.loggedIn) {
        return (
          <React.Fragment>{this.props.children}</React.Fragment>
        )
      } else {
        return (
          <Spinner/>
        )
      }
    } else {
      return (
        <Redirect to={"/login"}/>
      )
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
})

export default connect(mapStateToProps, { me })(CheckSessionContainer)
