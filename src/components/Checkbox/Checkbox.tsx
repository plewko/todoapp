import React, { ChangeEvent } from "react";
import { StyledCheckbox } from "./Checkox.styled";

export interface CheckboxProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const Checkbox = (props: CheckboxProps): JSX.Element => {
  return (
    <StyledCheckbox
      name={props.name}
      onChange={props.onChange}
      type="checkbox"
      checked={props.checked}
    />
  );
};

export default Checkbox;
