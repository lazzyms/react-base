import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          name: "u1",
          price: 100,
          checked: false,
        },
        {
          name: "u2",
          price: 100,
          checked: false,
        },
        {
          name: "u3",
          price: 100,
          checked: false,
        },
        {
          name: "u4",
          price: 100,
          checked: false,
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <h1>Users</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Users;
