import React, { Component } from "react";

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Row, Container, Button, NavItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  updateModal(isVisible) {
    this.state.isVisible = isVisible;
    this.forceUpdate();
  }

  render() {
    return (
      // <Nav defaultActiveKey="/" className="flex-column">
      //   <LinkContainer to="/">
      //     <Nav.Link>Home</Nav.Link>
      //   </LinkContainer>
      //   <LinkContainer to="/about">
      //     <Nav.Link>About</Nav.Link>
      //   </LinkContainer>
      //   <LinkContainer to="/users">
      //     <Nav.Link>Users</Nav.Link>
      //   </LinkContainer>
      // </Nav>
      //   <Container fluid>
      //     <Row>
            <Navbar
              collapseOnSelect
              expand="lg"
              bg="dark"
              variant="dark"
              className="flex-column justify-content-start"
            >
              <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
              {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
              {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                <Nav defaultActiveKey="/" className="flex-column text-left">

                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/users">
                    <Nav.Link>Users</Nav.Link>
                  </LinkContainer>
                </Nav>
              {/* </Navbar.Collapse> */}
            </Navbar>
      //     </Row>
      //   </Container>
    );
  }
}

export default Header;
