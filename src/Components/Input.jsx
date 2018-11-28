import React from "react";

const Input = props => {
  return (
    <input
      name={props.name}
      onChange={props.action}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};

export default Input;
