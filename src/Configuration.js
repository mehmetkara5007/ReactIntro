import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { Row, Container, Col, Badge, Table } from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Row>
        <Col>
          <h3>
            <Badge color="warning">Visma.Net - Visma Loan</Badge>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Badge color="info">Integration ID - 10093</Badge>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 7, order: 1, offset: 2 }}>
          <div>
            <Button
              color="info"
              size="lg"
              block
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              Settings
            </Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
