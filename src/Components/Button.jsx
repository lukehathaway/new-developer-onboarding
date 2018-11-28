import React from "react";

const Button = props => {
  return <button onClick={props.action}>{props.buttonText}</button>;
};

Button.defaultProps = {
  buttonText: "Click"
};

export default Button;
