import React, { Component } from "react";
import {
  Card,
  // CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  Badge
} from "reactstrap";

export default class AddIntegration extends Component {
  state = {
    types: []
  };
  componentDidMount() {
    this.getTypes();
  }

  getTypes = () => {
    fetch("http://localhost:3000/types")
      .then(response => response.json())
      .then(data => this.setState({ types: data }));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 7, order: 1, offset: 1 }}>
            <div>
              <h4>You are listing the integrations types.</h4>
            </div>
          </Col>
        </Row>

        <Row>
          {this.state.types.map(type => (
            <Col>
              <div>
                <Card>
                  {/* <CardImg
                  top
                  width="100%"
                  src="/assets/type.jpg"
                  alt="Card image cap"
                /> */}
                  <CardBody>
                    <CardTitle>
                      <Badge color="info">{type.typeName}</Badge>{" "}
                    </CardTitle>
                    <CardSubtitle>Details</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="success">Choose</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
