import React, { Component } from 'react';
import { Table, Form, Container } from 'react-bootstrap';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    name: 'p1',
                    price: 100,
                    checked: false
                },
                {
                    name: 'p2',
                    price: 100,
                    checked: false
                },
                {
                    name: 'p3',
                    price: 100,
                    checked: false
                },
                {
                    name: 'p4',
                    price: 100,
                    checked: false
                }
            ]
        }
    }

    render() {
        return (
            <Container>
                <h1>Products</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, i) => {
                            return (<tr>
                                <td><Form.Check type="checkbox"/></td>
                                <td>{i + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
        )
    }

}

export default Product