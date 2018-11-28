import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

class UserModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      startDate: ""
    };

    this.attachBindings();
  }

  attachBindings() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setName = this.setName.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
  }

  handleSubmit() {
    const userData = {
      name: this.state.name,
      startDate: this.state.startDate
    };

    if (userData.name !== "" && userData.startDate != "") {
      this.props.action(userData);
    }
  }

  setName(e) {
    this.setState({
      name: e.target.value
    });
  }

  setStartDate(e) {
    this.setState({
      startDate: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <Input
          action={this.setName}
          name="name"
          placeholder="Name"
          type="text"
        />
        <Input
          action={this.setStartDate}
          name="startDate"
          placeholder="Start Date (MM/DD/YYYY)"
          type="text"
        />
        <Button action={this.handleSubmit} buttonText="Go" />
      </React.Fragment>
    );
  }
}

export default UserModal;
