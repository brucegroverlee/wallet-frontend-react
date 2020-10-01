import React from "react"
import {
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import * as Icon from "react-feather"

export const NavbarUserDropdown = props => {
  return (
    <DropdownMenu right>
      <DropdownItem tag="a" href="#">
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Edit Profile</span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => props.logout()}
      >
        <Icon.Power size={14} className="mr-50" />
        <span className="align-middle">Log Out</span>
      </DropdownItem>
    </DropdownMenu>
  )
}