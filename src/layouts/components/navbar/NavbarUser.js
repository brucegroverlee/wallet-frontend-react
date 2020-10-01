import React from "react"
import { connect } from "react-redux"
import Avatar from "react-avatar"
import {
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap"
import { NavbarUserDropdown } from "./NavbarUserDropdown"
import { logout } from "../../../redux/actions/auth/logout"

class NavbarUser extends React.PureComponent {
  render() {
    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">

        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                {this.props.user.name}
              </span>
              <span className="user-status">Available</span>
            </div>
            <span data-tour="user">
              <Avatar 
                name={this.props.user.name}
                size={"40px"}
                round
              />
            </span>
          </DropdownToggle>
          <NavbarUserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, { logout })(NavbarUser)
