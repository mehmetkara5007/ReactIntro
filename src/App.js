import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ClientList from "./ClientList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "",
    clients: [],
    cart: []
  };

  componentDidMount() {
    this.getClients();
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getClients(category.id);
  };

  getClients = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ clients: data }));
  };

  addChart = client => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.client.id === client.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else 
    {
      newCart.push({ client: client, quantity: 1 });
    }
    this.setState({ cart: newCart });
    console.log(this.state.cart.length);
  };

  render() {
    let clientInfo = { title: "Client List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ClientList
                clients={this.state.clients}
                addChart={this.addChart}
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
