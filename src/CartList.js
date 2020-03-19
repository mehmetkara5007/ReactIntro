import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Client Name</th>
            <th>Unit price</th>
            <th>Units in Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map(cartItem => (
            <tr key={cartItem.client.id}>
              <td>{cartItem.client.id}</td>
              <td>{cartItem.client.categoryId}</td>
              <td>{cartItem.client.productName}</td>
              <td>{cartItem.client.unitPrice}</td>
              <td>{cartItem.client.unitsInStock}</td>
              <td>{cartItem.client.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem.client)}
                >
                  Remove from cart
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
