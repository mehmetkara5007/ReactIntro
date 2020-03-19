import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ClientList from "./ClientList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "", clients:[]
  };

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
  };

  componentDidMount() {
    this.getClients();
  }

  getClients = () => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => this.setState({ clients: data }));
  };
  render() {
    let clientInfo = { title: "Client List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              {" "}
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              {" "}
              <ClientList
                clients={this.state.clients}
                currentCategory={this.state.currentCategory}
                info={clientInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
