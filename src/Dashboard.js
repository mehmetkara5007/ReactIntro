import React, { Component } from "react";
import { Row, Container, Col, Badge } from "reactstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col  sm={{ size: 7, order: 1, offset: 1 }}>
            <div>
              <h2>Hello, Mehmet</h2>
              <h4> You have <Badge color="success">4</Badge>  running integrations</h4>
              <h4><Badge color="danger">1</Badge> integration needs your attention</h4>
            </div>
          </Col>
        </Row>
        <Row>
            
        </Row>
      </Container>
    );
  }
}
