import React, { Component } from "react";

import Button from "./Components/Button";
import Modal from "./Components/Modal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: "welcome",
      employee: {
        name: null,
        startDate: null
      },
      showModal: false
    };

    this.attachBindings();
  }

  attachBindings() {
    // this.handleGenerateList = this.handleGenerateList.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.setEmployeeData = this.setEmployeeData.bind(this);
    this.showNewListModal = this.showNewListModal.bind(this);
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  componentDidMount() {}

  handleModal(userData) {
    if (this.state.modalType === "user") {
      this.setState({
        currentView: "list",
        employee: {
          ...userData
        },
        showModal: false
      });
    }

    if (this.state.modalType === "item") {
      // do stuff
    }
  }

  handleName(e) {
    const name = e.target.value;

    this.setState({
      employee: {
        name: name
      }
    });
  }

  showNewListModal() {
    this.setState({
      modalType: "user",
      showModal: true
    });
  }

  get listView() {
    return <div>{this.state.employee.name}</div>;
  }

  get modalView() {
    return (
      <div className="ModalWrapper">
        <div className="ModalInnerWrapper">
          <Modal
            action={userData => {
              this.handleModal(userData);
            }}
            closeModal={this.closeModal}
            type={this.state.modalType}
          />
        </div>
      </div>
    );
  }

  get welcomeView() {
    return (
      <div>
        <Button
          action={this.showNewListModal}
          buttonText="Generate New Checklist"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="AppWrapper">
        {this.state.currentView === "welcome" && this.welcomeView}

        {this.state.currentView === "list" && this.listView}

        {this.state.showModal && this.modalView}
      </div>
    );
  }
}

export default App;
