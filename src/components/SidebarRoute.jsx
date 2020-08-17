import React, { Component } from "react";
import { Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBox, faUser } from "@fortawesome/free-solid-svg-icons";

class SidebarRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="flex-column h-100"
      >
        <Navbar.Brand to="/" className="mt-3">
          Title | Logo
        </Navbar.Brand>
        <Nav className="flex-column pl-2" style={{ width: "150px" }}>
          <LinkContainer to="/">
            <Nav.Link>
              <Row style={{ fontSize: "16px" }}>
                <FontAwesomeIcon icon={faHome} size="lg" />
                &nbsp;&nbsp;Home
              </Row>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link>
              <Row style={{ fontSize: "16px" }}>
                <FontAwesomeIcon icon={faBox} size="lg" />
                &nbsp;&nbsp;Products
              </Row>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/users">
            <Nav.Link>
              <Row style={{ fontSize: "16px" }}>
                <FontAwesomeIcon icon={faUser} size="lg" />
                &nbsp;&nbsp;Users
              </Row>
            </Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={() => this.props.handleUserLogout()}>Logout</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default SidebarRoute;
