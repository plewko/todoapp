import React, { ChangeEvent, useState } from "react";

export interface InputProps {
  inputType: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <input
      name={props.name}
      onChange={props.onChange}
      type={props.inputType}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
