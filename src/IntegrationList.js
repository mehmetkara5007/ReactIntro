import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class IntegrationList extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getIntegrations();
  }

  getIntegrations = () => {
    fetch("http://localhost:3000/integrations")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              <Badge color="success">√ </Badge> {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>

        <Link to="/addIntegration">
          <Button outline color="info" size="lg" block>
            Add Integration
          </Button>
        </Link>
      </div>
    );
  }
}
