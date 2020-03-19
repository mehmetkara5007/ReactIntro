import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Request No</th>
            <th>DB No</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map(cartItem => (
            <tr key={cartItem.client.id}>
              <td>{cartItem.client.id} - 2020</td>
              <td>{cartItem.client.categoryId}</td>
              <td>{cartItem.client.unitPrice}</td>
              <td>{cartItem.client.unitsInStock}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem.client)}
                >
                  Remove Request
                </Button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
