import React, { useState } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  Form,
  Container,
} from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { userLogin, apiRequest } from "./actions/userActions";
import { Redirect } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const cookies = new Cookies();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        props.onUserLogin(res.data.token);
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  if (!props.user) {
    return (
      <Container className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email">
            <Form.Text>Email</Form.Text>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <Form.Text>Password</Form.Text>
            <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </Container>
    );
  } else {
    return <Redirect to="/" />;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionToProps = {
  onUserLogin: userLogin,
  onApiRequest: apiRequest,
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log({ propsFromState, propsFromDispatch, ownProps })
//   return {};
// }

export default connect(mapStateToProps, mapActionToProps)(Login);
