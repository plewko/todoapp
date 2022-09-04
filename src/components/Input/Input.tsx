import React, { ChangeEvent } from "react";
import { StyledInput } from "./Input.styled";

export interface InputProps {
  inputType: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <StyledInput
      name={props.name}
      onChange={props.onChange}
      type={props.inputType}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
