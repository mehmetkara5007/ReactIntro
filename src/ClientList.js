import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ClientList extends Component {

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory}{" "}
        </h3>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Username</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.clients.map(client => (
              <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.productName}</td>
                <td>{client.unitPrice}</td>
                <td>{client.quantityPerUnit}</td>
                <td>@{client.unitsInStock}</td>
                <td>
                  <Button onClick={() => this.props.addChart(client)} color="info">
                    add
                  </Button>
                </td>
              </tr>
            ))}

            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
