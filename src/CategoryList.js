import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
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

        <Link to="/addCategory">
          <Button outline color="info" size="lg" block>
            Add Category
          </Button>
        </Link>
      </div>
    );
  }
}
