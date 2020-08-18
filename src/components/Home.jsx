import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center pt-5">
          <h1>Home</h1>
        </Row>
      </Container>
    );
  }
}

export default Home;
