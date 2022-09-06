import React, { ChangeEvent } from "react";
import { StyledInput, StyledInputWrapper, StyledSpan } from "./Input.styled";

export interface InputProps {
  inputType: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <StyledInputWrapper>
      <StyledInput
        name={props.name}
        onChange={props.onChange}
        type={props.inputType}
        value={props.value}
        required
        // placeholder={props.placeholder}
      />
      <StyledSpan>{props.placeholder}</StyledSpan>
    </StyledInputWrapper>
  );
};

export default Input;
