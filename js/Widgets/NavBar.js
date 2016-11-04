import React from "react";
import ReactDOM from "react-dom";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavItem} from "react-bootstrap";
import {MenuItem} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import Utilities from '../Util/Utilities.js';


class MyNavBar extends React.Component{
  render(){
    return(
      <Navbar default>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">AKLENA</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="localhost:3000/dashboard">Dashboard</NavItem>
        <NavItem eventKey={2} href="#">Settings</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2}>Hello, {this.props.userName} </NavItem>
        <NavItem eventKey={2} onClick={this.logout.bind(this)}>Logout </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
  logout(){
    Utilities.get("logout",this.successLogout ,this.errorLogout );
  }
  successLogout(){
    window.location.replace("http://localhost:3000/");
  }
  errorLogout(){

  }

}
export default MyNavBar;
