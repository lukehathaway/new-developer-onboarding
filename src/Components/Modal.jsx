import React, { Component } from "react";

import ItemModal from "./ItemModal";
import UserModal from "./UserModal";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.modalType = this.props.type;

    this.passUserData = this.passUserData.bind(this);
  }

  passUserData(userData) {
    this.props.action(userData);
  }

  render() {
    return (
      <React.Fragment>
        <a className="ModalClose" onClick={this.props.closeModal} role="button">
          X
        </a>
        {this.modalType === "user" && (
          <UserModal
            action={userData => {
              this.passUserData(userData);
            }}
            closeModal={this.props.closeModal}
          />
        )}
        {this.modalType === "item" && <ItemModal />}
      </React.Fragment>
    );
  }
}

export default Modal;
