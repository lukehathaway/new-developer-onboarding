import React from "react";

import Button from "./Button";
import Input from "./Input";

const ItemModal = props => {
  return (
    <React.Fragment>
      <Input name="item" type="text" />
      <Button action={props.action} buttonText="Go" />
    </React.Fragment>
  );
};

export default ItemModal;
