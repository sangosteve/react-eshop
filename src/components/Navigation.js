import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
function Navigation() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">eShop</NavbarBrand>

        <Nav className="mr-auto" navbar>
          
          <NavItem>
            <NavLink href="/cart">Cart</NavLink>
          </NavItem>
        
           <NavItem>
            <NavLink href="/account">Account</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Navigation;
