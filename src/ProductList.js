import React, { Component } from "react";
import { Table, Button, Badge } from "reactstrap";

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning"> {this.props.info.title} - {this.props.currentCategory} </Badge>
        </h3>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Time</th>
              <th>Status</th>
              <th>Log</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.unitPrice} - 2020</td>
                <td>{product.quantityPerUnit}</td>
                <td>
                  <Button onClick={() => this.props.addChart(product)} color="info">
                    log
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
