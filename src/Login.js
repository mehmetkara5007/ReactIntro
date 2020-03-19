import React, { Component } from "react";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class Login extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db", 2);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup onSubmit={this.handleSubmit}>
            <Label for="email"> Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup onSubmit={this.handleSubmit}>
            <Label for="password"> Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup onSubmit={this.handleSubmit}>
            <Label for="description"> description</Label>
            <Input
              type="textarea"
              name="password"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup onSubmit={this.handleSubmit}>
            <Label for="city"> city</Label>
            <Input
              type="select"
              name="city"
              id="city"
              placeholder="Enter city"
              onChange={this.handleChange}
            >
              <option>Krakow</option>
              <option>Oslo</option>
              <option>Istanbul</option>
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
