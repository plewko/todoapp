import React from "react";
import "./Button.css";

export interface TextInputProps {
  text: string;
  buttontype: "submit" | "reset";
  onClick?: () => void;
}

const Button = (props: TextInputProps): JSX.Element => {
  return (
    <button type={props.buttontype} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
