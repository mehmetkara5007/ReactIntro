import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import IntegrationList from "./IntegrationList";
import ClientList from "./ClientList";
import NotFound from "./NotFound";
import CartList from "./CartList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import myForm from "./myForm";
import Dashboard from "./Dashboard";
import AddIntegration from "./AddIntegration";

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
    } else {
      newCart.push({ client: client, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(client.productName + " added", 2);
  };

  removeFromCart = client => {
    let newCart = this.state.cart.filter(c => c.client.id !== client.id);
    this.setState({ cart: newCart });
    alertify.error(client.productName + " removed", 2);
  };

  render() {
    let clientInfo = { title: "Client List" };
    let categoryInfo = { title: "Integration List" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <IntegrationList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route
                  exact
                  path="/clients"
                  render={props => (
                    <ClientList
                      {...props}
                      clients={this.state.clients}
                      addChart={this.addChart}
                      currentCategory={this.state.currentCategory}
                      info={clientInfo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route path="/addIntegration" component={AddIntegration} />
                <Route path="/login" component={Login} />
                <Route path="/myForm" component={myForm} />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
