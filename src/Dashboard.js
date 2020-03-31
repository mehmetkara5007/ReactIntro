import React, { Component } from "react";
import { Row, Container, Col, Badge, Table } from "reactstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 7, order: 1, offset: 2 }}>
            <div>
              <h2>Hello, Mehmet</h2>
              <h4>
                You have <Badge color="success">4</Badge> running integrations
              </h4>
              <h4>
                <Badge color="danger">1</Badge> integration needs your attention
              </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>DANGER</h3>
          <h3>Errors</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Integration</th>
                  <th>Time</th>
                  <th>Error</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Visma Loan</td>
                  <td>02.03.2020</td>
                  <td><Badge color="danger">Unable to Connect</Badge> </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Visma Tid</td>
                  <td>15.03.2020</td>
                  <td><Badge color="warning">Timeout</Badge> </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Visma SalesForce</td>
                  <td>16.03.2020</td>
                  <td><Badge color="danger">Unable to Connect</Badge> </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
