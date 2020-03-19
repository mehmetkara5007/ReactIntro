import React, { Component } from "react";
import { Table, Button, Badge } from "reactstrap";

export default class ClientList extends Component {

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
            {this.props.clients.map(client => (
              <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.unitPrice} - 2020</td>
                <td>{client.quantityPerUnit}</td>
                <td>
                  <Button onClick={() => this.props.addChart(client)} color="info">
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
