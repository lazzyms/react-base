import React from 'react';

import Header from './components/header'
import { MemoryRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Counter from './components/counter'
import './App.css';
import { Tab, Row, Col } from 'react-bootstrap';

const Home = () => <span>Home</span>;

const About = () => <Counter />;

const Users = () => <span>Users</span>;

const App = () => (
  <MemoryRouter>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={2}>
          <Header />
        </Col>
        <Col sm={8}>
          <Switch>
            <Route path="/about">
              <Counter />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Tab.Container>
  </MemoryRouter>
);

export default App;
