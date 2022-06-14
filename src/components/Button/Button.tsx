import React from "react";
import "./Button.css";

export interface TextInputProps {
  text: string;
  buttontype: "submit" | "reset";
}

const Button = (props: TextInputProps): JSX.Element => {
  return <button type={props.buttontype}>{props.text}</button>;
};

export default Button;
